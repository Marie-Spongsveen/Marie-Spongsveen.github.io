using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Models;

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
            var etSporsmal = await _db.Sporsmals.FindAsync(id);

            var sporsmal = new Sporsmal()
            {
                Id = etSporsmal.Id,
                Sporsmalet = etSporsmal.Sporsmalet
            };

            return sporsmal.Sporsmalet;
        }

        [HttpGet]
        [Route("/hentSvaralternativ/{id}")]

        // Marie versjon
        public async Task<List<BrukerSvarAlternativ>> hentSvaralternativ(int id)
         {   
             List<BrukerSvarAlternativ> s = await _db.BrukerSvarAlternativer.Where(x => x.Sporsmals.Id == id)
                  .Select(x => new BrukerSvarAlternativ
                  {
                      Id = x.Id,
                      Sporsmals = x.Sporsmals,
                      BrukerSvarAlternativId = x.BrukerSvarAlternativId,
                       BrukerSvarAlternativTekst = x.BrukerSvarAlternativTekst,
                  }).ToListAsync();

              return s;
            
            Console.WriteLine("Her er SvarList:");
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
