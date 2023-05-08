using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Models;
using Newtonsoft.Json;
using System.Text;

//hey

namespace Min_vei_Ny_i_Norge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SporsmalKontroller : ControllerBase
    {
        private readonly MinVeiContekts _db;

        public SporsmalKontroller(MinVeiContekts db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("/hent/{id}")]
        public async Task<string> hent(int id)
        {

            string sporsmalTekst = "";

            if (id == 1 || id == 3 || id==4 || id == 6 || id==7)
            {
                var etSporsmal = await _db.Sporsmals.FindAsync(id);
                var sporsmal = new Sporsmal()
                {
                    Id = etSporsmal.Id,
                    Sporsmalet = etSporsmal.Sporsmalet
                };

                sporsmalTekst = sporsmal.Sporsmalet;
            }



            return sporsmalTekst;

        }    




        [HttpGet]
        [Route("/hentnoe/{q}")]
        public async Task<List<SvarAlternativ>> hentNoe(string q)
        {
            Console.WriteLine(q);
            q = q + "?";
            List<SvarAlternativ> s = await _db.SvarAlternativer.Where(x => x.Sporsmals.Sporsmalet == q)
                .Select(x => new SvarAlternativ
                {
                    Id = x.Id,
                    Sporsmals = x.Sporsmals,
                    SvarAlternativId = x.SvarAlternativId,
                    SvarAlternativTekst = x.SvarAlternativTekst,
                }).ToListAsync();
            Console.WriteLine(s);
            return s;
        }

        [HttpGet]
        [Route("/hentSvaralternativ/{id}")]

        public async Task<List<Min_vei_Ny_i_Norge.Models.BrukerSvarAlternativ>> hentSvaralternativ(int id)
        {
            List<Min_vei_Ny_i_Norge.Models.BrukerSvarAlternativ> s = await _db.BrukerSvarAlternativer.Where(x => x.Sporsmals.Id == id)
                    .Select(x => new Min_vei_Ny_i_Norge.Models.BrukerSvarAlternativ
                    {
                        Id = x.Id,
                        Sporsmals = x.Sporsmals,
                        BrukerSvarAlternativId = x.BrukerSvarAlternativId,
                        BrukerSvarAlternativTekst = x.BrukerSvarAlternativTekst,
                    }).ToListAsync();

            return s;
        }



        [HttpPost]
        [Route("/hentSvar/")]
        public async Task<bool> hentSvar()
        {
            bool ok = true;

            String body;
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.UTF8))
            {
                body = await reader.ReadToEndAsync();
            }

            Dictionary<string, object> dictionary = JsonConvert.DeserializeObject<Dictionary<string, object>>(body);

            // konverter valgte svar og spørsmål (som er key og value pairs) hentet fra frontend i List av type <int> som inneholder tilsvarende svaralternativId
            var valgteSvaralternativListe = await KonverterValgteSvar(dictionary);


            // oppretter ny anonym bruker og lagrer den database

            int nyBrukerId = await HentNyBrukerId();
            await LagreNyAnonymBruker(nyBrukerId);


            // Lagrer valgte svaralternativ i tabell "ValgteSvar" med AnonymBrukerId som nyBrukerId

            try
            {
                for (int i = 0; i < valgteSvaralternativListe.Count; i++)
                {
                    int svaralternativId = valgteSvaralternativListe[i];

                    await LagreValgteSvar(nyBrukerId, svaralternativId);
                }

                ok = true;

                Console.WriteLine("Ny anonymBruker valgte svaralternativer ble lagret.");
            }
            catch (Exception)
            {
                ok = false;
                Console.WriteLine("Ny anonymBruker valgte svaralternativer ble ikke lagret.");
            }

            //var LagretValgtSvar =  await _db.ValgteSvar.ToListAsync();



            //var LagretValgtSvarId = await HentBrukerValgteSvar(nyBrukerId);
            //var brukerReultater = await HentBrukerResultat();

            // Sjekker disse metodene

            // await LagreValgteSvar(3, 3);

            //var brukerSvarAlternativIdList = HentBrukerValgteSvar(nyBrukerId);

            //string resultat1 = await hentResultat(1);


            //string resultat2 = await hentResultat(2);

            return ok;

        }





        // metode for konvertere dictionary List av type  <string, object> hentet fra frontend  to List <int> med valgte svaralternativID
        public async Task<List<int>> KonverterValgteSvar(Dictionary<string, object> dictionary)
        {
            List<int> valgteSvarID = new();

            if (dictionary.Count != 0)
            {
                var sporsmalList = await HentAlleSporsmal();

                string sporsmal1 = sporsmalList[0];
                string sporsmal2 = sporsmalList[1];
                string sporsmal3 = sporsmalList[2];
                string sporsmal4 = sporsmalList[3];
                string sporsmal5 = sporsmalList[4];
                string sporsmal6 = sporsmalList[5];
                string sporsmal7 = sporsmalList[6];

                if (dictionary.ContainsKey(sporsmal1))
                {
                    string svar1 = dictionary[sporsmal1].ToString();

                    string valgtsvar1 = await SjekkLand(svar1);

                    if (valgtsvar1.Equals("EU/EEA land"))
                    {
                        valgteSvarID.Add(1);

                    }

                    if (valgtsvar1.Equals("Ikke EU/EEA land"))
                    {
                        valgteSvarID.Add(2);

                    }
                }

                if (dictionary.ContainsKey(sporsmal2))
                {
                    string? svar2 = dictionary[sporsmal2]?.ToString();

                    string valgtsvar2 = await SjekkLand(svar2);

                    if (valgtsvar2.Equals("EU/EEA land"))
                    {
                        valgteSvarID.Add(4);

                    }

                    if (valgtsvar2.Equals("Ikke EU/EEA land"))
                    {
                        valgteSvarID.Add(5);

                    }
                }

                if (dictionary.ContainsKey(sporsmal3))
                {
                    string svar3 = dictionary[sporsmal3].ToString();


                    if (svar3.Equals("Work or job seeking"))
                    {
                        valgteSvarID.Add(7);

                    }

                    if (svar3.Equals("Education"))
                    {
                        valgteSvarID.Add(8);

                    }

                    if (svar3.Equals("Seeking asylum or refuge"))
                    {
                        valgteSvarID.Add(9);

                    }

                    if (svar3.Equals("Family immigration or moving to family living in Norway"))
                    {
                        valgteSvarID.Add(10);

                    }

                    if (svar3.Equals("Stay at your own expense"))
                    {
                        valgteSvarID.Add(11);

                    }

                }


                if (dictionary.ContainsKey(sporsmal4))
                {
                    string svar4 = dictionary[sporsmal4].ToString();


                    if (svar4.Equals("I have received a job offer in Norway"))
                    {
                        valgteSvarID.Add(13);

                    }

                    if (svar4.Equals("I am being sent by my employer to Norway to work"))
                    {
                        valgteSvarID.Add(14);

                    }

                    if (svar4.Equals("I am coming as a job seeker"))
                    {
                        valgteSvarID.Add(15);

                    }


                }



                if (dictionary.ContainsKey(sporsmal6))
                {
                    string svar6 = dictionary[sporsmal6].ToString();


                    if (svar6.Equals("Less than 3 months"))
                    {
                        valgteSvarID.Add(18);

                    }

                    if (svar6.Equals("Between 3 months and 6 months"))
                    {
                        valgteSvarID.Add(19);

                    }

                    if (svar6.Equals("More than 6 months"))
                    {
                        valgteSvarID.Add(20);

                    }

                }

                if (dictionary.ContainsKey(sporsmal7))
                {
                    string svar7 = dictionary[sporsmal7].ToString();


                    if (svar7.Equals("Yes, I have applied, or my employer has applied on my behalf"))
                    {
                        valgteSvarID.Add(22);

                    }

                    if (svar7.Equals("No"))
                    {
                        valgteSvarID.Add(23);

                    }

                }


            }

            return valgteSvarID;
        }




        //metode for å hente list over alle spørsmål fra database
        public async Task<List<string>> HentAlleSporsmal()
        {
            List<string> sporsmalTekstList = new List<string>();

            var sporsmalList = await _db.Sporsmals.ToListAsync();

            foreach (var etSporsmal in sporsmalList)
            {

                var sporsmalTekst = (string)etSporsmal.Sporsmalet;

                sporsmalTekstList.Add(sporsmalTekst);

            }


            return sporsmalTekstList;
        }




        //metode for å hente list over alle svaralternativer fra database (tabell "SvarAlternativer")

        public async Task<List<string>> HentAlleSvarAlternativer()
        {
            var svarAlternativTekstList = new List<string>();

            var svaralternativList = await _db.SvarAlternativer.ToListAsync();


            foreach (var etSvarAlternativ in svaralternativList)
            {

                var svaralternativTekst = (string)etSvarAlternativ.SvarAlternativTekst;

                svarAlternativTekstList.Add(svaralternativTekst);

            }

            return svarAlternativTekstList;
        }





        //metode for å legge til og lagre ny anonym bruker i database (i tabell "AnonymBruker")

        public async Task<bool> LagreNyAnonymBruker(int anonymBrukerId)
        {
            try
            {

                var nyAnonymBruker = new Min_vei_Ny_i_Norge.Models.AnonymBruker()
                {
                    AnonymBrukerId = anonymBrukerId,
                };

                _db.AnonymBruker.Add(nyAnonymBruker);
                await _db.SaveChangesAsync();

                Console.WriteLine("Ny anonymBruker ble lagret.");
                return true;
            }

            catch (Exception)
            {
                Console.WriteLine("Feil ved lagring av ny anonymBruker.");
                return false;

            }

        }





        // metode som sjekker verdi til siste bruker Idnummer og returnerer neste ledig idnummer for ny bruker  
        public async Task<int> HentNyBrukerId()
        {

            int nyAnonymBrukerId = 0;
            int sisteAnonymBrukerId = 0;
            var sisteAnonymBruker = await _db.AnonymBruker.OrderByDescending(a => a.AnonymBrukerId).FirstOrDefaultAsync();
            if (sisteAnonymBruker != null)
            {
                sisteAnonymBrukerId = sisteAnonymBruker.AnonymBrukerId;

            }

            nyAnonymBrukerId = sisteAnonymBrukerId + 1;

            return nyAnonymBrukerId;
        }






        //metode for å legge til valgte svare i database (i tabell "ValgteSvar")

        public async Task<bool> LagreValgteSvar(int anonymBrukerId, int svarAlternativId)
        {
            try
            {

                var nyValgteSvar = new Min_vei_Ny_i_Norge.Models.ValgteSvar()
                {

                    AnonymBrukerId = anonymBrukerId,
                    SvarAlternativId = svarAlternativId
                };

                _db.ValgteSvar.Add(nyValgteSvar);
                await _db.SaveChangesAsync();

                Console.WriteLine("Ny valgtesvar ble lagret.");
                return true;
            }

            catch (Exception)
            {
                Console.WriteLine("Feil ved lagring av valgtesvar.");
                return false;

            }

        }



        // metode for å hente alle valgtesvar til anonymbruker med bestemt id

        public async Task<List<int>> HentBrukerValgteSvar(int anonymBrukerId)
        {

            var brukerSvarAlternativIdList = new List<int>();

            var brukerValgteSvarList = await _db.ValgteSvar.ToListAsync();

            foreach (var etBrukerValgteSvar in brukerValgteSvarList)
            {


                if (etBrukerValgteSvar.AnonymBrukerId == anonymBrukerId)
                {

                    var svarAlternativID = (int)etBrukerValgteSvar.SvarAlternativId;

                    brukerSvarAlternativIdList.Add(svarAlternativID);

                }

            }
            return brukerSvarAlternativIdList;

        }





        [HttpGet]
        [Route("/hentResultat")]

        public async Task<List<string>> HentBrukerResultat()
        {
            //oppretter list av type "string" hvor vi skal legge til aktuelle resultate til bruker
            var brukerResultatList = new List<string>();



            // henter alle resultater fra database
            //var resultater = await _db.Resultat.ToListAsync();



            // inisialiserer strenger resultater og henter tilsvarende resultater fra database  :


            // 1. resultat som tilsvarer "melde flytting":
            var meldeFlytting = await hentResultat(1);


            // 2. resultat som tilsvarer "Registrere hos politi":
            var politiRegistrering = await hentResultat(2);


            // 3. resultat som tilsvarer " ID-nummer ":
            var idNummer = await hentResultat(3);


            // 4. resultat som tilsvarer "Skattekort ":

            var skattekort = await hentResultat(4);


            // henter Id til siste bruker
            var sisteAnonymBruker = await _db.AnonymBruker.OrderByDescending(a => a.AnonymBrukerId).FirstOrDefaultAsync();
            int sisteAnonymBrukerId = sisteAnonymBruker.AnonymBrukerId;

            // henter siste bruker svaralternativer fra database (fra tabell "ValgteSvar")


            List<int> brukerSvarAlternativIdList = await HentBrukerValgteSvar(sisteAnonymBrukerId);



            if (brukerSvarAlternativIdList.Count != 0)
            {
                //hvis EU/EØS-land
                if (brukerSvarAlternativIdList.Contains(1) || brukerSvarAlternativIdList.Contains(4))
                {
                    brukerResultatList.Add(meldeFlytting);
                    brukerResultatList.Add(politiRegistrering);
                    brukerResultatList.Add(idNummer);
                    brukerResultatList.Add(skattekort);

                    // hvis man ikke skal jobbe i Norge (svarer utdanning, asyl, familie eller på egne midler), må ikke  oppgis info om ID-nummer
                    if (brukerSvarAlternativIdList.Contains(8) || brukerSvarAlternativIdList.Contains(9) || brukerSvarAlternativIdList.Contains(10) || brukerSvarAlternativIdList.Contains(11))
                    {
                        // må sjekkse hver gang om Idnummer info eksistere fra før i brukerResultatList. Hvis ja må fjernes
                        if (brukerResultatList.Contains(idNummer))
                        {
                            brukerResultatList.Remove(idNummer);
                        }

                    }

                    //hvis man svarer svarer på spm4 at man skal jobbe, må info om ID-nummer oppgis
                    if (brukerSvarAlternativIdList.Contains(13) || brukerSvarAlternativIdList.Contains(14) || brukerSvarAlternativIdList.Contains(15))
                    {     // må sjekkse hver gang om Idnummer info eksistere fra før i brukerResultatList. Hvis ja må fjernes
                        if (!brukerResultatList.Contains(idNummer))
                        {
                            brukerResultatList.Add(idNummer);
                        }
                    }


                    // hvis man skal være under 3 mnd
                    if (brukerSvarAlternativIdList.Contains(18))
                    {
                        brukerResultatList.Remove(politiRegistrering);
                        brukerResultatList.Remove(meldeFlytting);
                    }

                    // hvis man skal være over 3 mnd og under 6 mnd
                    if (brukerSvarAlternativIdList.Contains(19))
                    {

                        brukerResultatList.Remove(meldeFlytting);
                    }


                    // hvis man har søkt skattekort 
                    if (brukerSvarAlternativIdList.Contains(22))
                    {
                        brukerResultatList.Remove(skattekort);
                    }

                }


                // hvis ikke EU/EØS-land blir det ikke noe lagt til i  brukerResultatList : ingenting vises på resultat side

            }
            else
            {
                //all info (alle resultat Tekst legges til  brukerResultatList) hvis bruker ikke besvart noe spørsmål og brukerSvarAlternativIdList er tom
                /*foreach (var etResultat in resultater)
                { 
                var resultatTekst = (string)etResultat.ResultatTekst;
                    brukerResultatList.Add(resultatTekst);
                }*/
                brukerResultatList.Add(meldeFlytting);
                brukerResultatList.Add(politiRegistrering);
                brukerResultatList.Add(idNummer);
                brukerResultatList.Add(skattekort);

            }

            Console.WriteLine("!!!!!!!!!!!!!!!!", brukerResultatList);
            return brukerResultatList;
        }



        public async Task<string> hentResultat(int id)
        {
            var etResultat = await _db.Resultat.FindAsync(id);

            var resultat = new Models.Resultat()
            {
                ResultatId = etResultat.ResultatId,
                ResultatNavn = etResultat.ResultatNavn,
                ResultatTekst = etResultat.ResultatTekst
            };

            return resultat.ResultatTekst;
        }





        // metode sørger for å hente EU/EØS land fra database og returnere land List som List av type <string>
        public async Task<List<string>> HentEULand()

        {
            var EU_EEA_Land_List = new List<String>();



            var landList = await _db.EU_EEA_Land.ToListAsync();

            foreach (var etEU_EEA_Land in landList)
            {

                var eu_eea_land = (string)etEU_EEA_Land.Land;

                EU_EEA_Land_List.Add(eu_eea_land);

            }
            return EU_EEA_Land_List;
        }


        // metode tar inn parameter Land som string og sjekker om den finnes i tabell med EU/EØS-Land og returnere tilsvarende svaralternativ teksten.
        public async Task<string> SjekkLand(string land)

        {
            List<string> EU_EEA_Land_List = await HentEULand();
            string resultat = "";


            //Sjekker hvis valgtLangt er EU eller EØS Land

            if (!string.IsNullOrEmpty(land))
            {
                // valgtland er i  EU/EØS-land list
                if (EU_EEA_Land_List.Contains(land))
                {
                    resultat = "EU/EEA land";
                }
                else
                {
                    // valgtland er ikke i  EU/EØS-land list
                    resultat = "Ikke EU/EEA land";
                }
            }
            else
            {
                // bruker har ikke gjort noe valg
                resultat = "Ikke besvart";
            }


            return resultat;


        }




        //Olga Versjon

        /*public async Task<List<String>> hentSvaralternativ(int id)
        { 
            var svarAlternativer = new List<String>();

            var svarAlternativList = new List<BrukerSvarAlternativ>();

            svarAlternativList = await _db.BrukerSvarAlternativer.ToListAsync();

            foreach (var etSvarAlternativ in svarAlternativList)
            {


                if (etSvarAlternativ.Id == id)
                {

                    var svarAlternativ = (string)etSvarAlternativ.BrukerSvarAlternativTekst;

                    svarAlternativer.Add(svarAlternativ);

                }



            }



            return svarAlternativer;

        }*/


    }
}
