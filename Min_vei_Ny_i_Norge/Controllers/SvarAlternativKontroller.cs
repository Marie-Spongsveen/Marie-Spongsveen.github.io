using Microsoft.AspNetCore.Mvc;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore.SqlServer;
using System.Threading.Tasks;



namespace Min_vei_Ny_i_Norge.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SvarAlternativKontroller : ControllerBase

    {

        private readonly MinVeiContekts _db;

        public SvarAlternativKontroller(MinVeiContekts db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("/hentSvarAlternativ/{id}")]

        public async Task<List<String>> HentSvarAlternativ(int id)

        {
            var svarAlternativer = new List<String>();

            var svarAlternativList = new List<SvarAlternativ>();

            svarAlternativList = await _db.SvarAlternativer.ToListAsync();



            foreach (var etSvarAlternativ in svarAlternativList)
            {
                /* var svarAlternativ = new SvarAlternativ()
                 {
                     Id = etSvarAlternativ.Id,
                      = etSporsmal.Sporsmalet
                 };
                */




                if (etSvarAlternativ.Id == id && !etSvarAlternativ.SvarAlternativTekst.Equals("Ikke besvart"))
                {
                    
                        var svarAlternativ = (string)etSvarAlternativ.SvarAlternativTekst;

                        svarAlternativer.Add(svarAlternativ);
                   
                     

                }
            }

            return svarAlternativer;


        }




    }
}


    /* public async Task<List<string>> HentSvar(int id)

     {
         var svarAlternativer = new List<String>();


         var result = await _db.QueryAsync<string>("SELECT SvarAlternativTekst FROM SvarAlternativer WHERE Id = @id", new { id });
         foreach (var row in result)
         {
             var svarAlternativ = (string)row;
             svarAlternativer.Add(svarAlternativ);
         }


         return svarAlternativer;
     }*/
