using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Migrations;
using Min_vei_Ny_i_Norge.Models;
using EU_EEA_Land = Min_vei_Ny_i_Norge.Models.EU_EEA_Land;

namespace Min_vei_Ny_i_Norge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Sjekk_EU_EEA_Land : ControllerBase
    {
        private readonly MinVeiContekts _db;

        public Sjekk_EU_EEA_Land(MinVeiContekts db)
        {
            _db = db;
        }



       // [HttpGet]
        //[Route("/sjekkLand/{land}")]


        public async Task<List<string>> HentEULand()

        {
            var EU_EEA_Land_List = new List<String>();

            var landList = new List<EU_EEA_Land>();
          
            landList = await _db.EU_EEA_Land.ToListAsync();

            foreach (var etEU_EEA_Land in landList)
            {

                var eu_eea_land = (string)etEU_EEA_Land.Land;

                EU_EEA_Land_List.Add(eu_eea_land);

            }
            return EU_EEA_Land_List;
        }


        [HttpPost("/sjekkLand")]
        public async Task <string> SjekkLand(string land)

        {
            List<string> EU_EEA_Land_List = await HentEULand();
            string resultat = "";


            string valgtLand = Request.Form["./landNedtrekksliste"];

            //string valgtLand = dropdownMenu.SelectedValue;



            
            //Sjekker hvis valgtLangt er EU eller EØS Land

            if (!string.IsNullOrEmpty(valgtLand))
            {
                // valgtland er i  EU/EØS-land list
                if (EU_EEA_Land_List.Contains(valgtLand))
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

    }
}
