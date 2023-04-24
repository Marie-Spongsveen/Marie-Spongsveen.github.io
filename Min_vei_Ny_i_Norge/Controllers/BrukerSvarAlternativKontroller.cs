using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Migrations;
using Min_vei_Ny_i_Norge.Models;
using BrukerSvarAlternativ = Min_vei_Ny_i_Norge.Models.BrukerSvarAlternativ;

namespace Min_vei_Ny_i_Norge.Controllers
{
    

        [ApiController]
        [Route("[controller]")]
        public class BrukerSvarAlternativKontroller : ControllerBase

        {

            private readonly MinVeiContekts _db;

            public BrukerSvarAlternativKontroller(MinVeiContekts db)
            {
                _db = db;
            }

            [HttpGet]
            [Route("/hentSvarAlternativ/{id}")]

            public async Task<List<String>> HentSvarAlternativ(int id)

            {
                var svarAlternativer = new List<String>();

                var svarAlternativList = new List<BrukerSvarAlternativ>();

                svarAlternativList = await _db.BrukerSvarAlternativer.ToListAsync();

                foreach (var etSvarAlternativ in svarAlternativList)
                {

                    var svarAlternativ = (string)etSvarAlternativ.BrukerSvarAlternativTekst;

                    svarAlternativer.Add(svarAlternativ);

                }



                return svarAlternativer;


            }




        }


    }

