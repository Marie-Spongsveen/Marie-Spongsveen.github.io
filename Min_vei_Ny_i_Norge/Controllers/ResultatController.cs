using Microsoft.AspNetCore.Mvc;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Models;
using Microsoft.EntityFrameworkCore;

namespace Min_vei_Ny_i_Norge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ResultatController : ControllerBase
    {
        public readonly MinVeiContekts _db;

        public ResultatController(MinVeiContekts db)
        {
            _db = db;
        }

        //Get : api/Resultat
        [HttpGet("/hent/{id}")]
        public async Task<string> GetResultat(int id)
        {
            //if (_db.Resultat == null)
            //{
            //    return NotFound();
            //}

            var etResultat = await _db.Resultater.FindAsync();


            //if (resultater == null)
            //{
            //    return NotFound();
            //}

            var resultat = new Resultat()
            {
                Id = etResultat.Id,
                Resultatet = etResultat.Resultatet,
                ResultatetTekst = etResultat.ResultatetTekst
            };

            return resultat.Resultatet;
        }

        //Vet ikke om den funker, men jaja
        [HttpPost]
        public async Task<ActionResult<Resultat>> PostResultat(Resultat resultat)
        {
            _db.Resultater.Add(resultat);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetResultat), new { id = resultat.Id }, resultat);
        }

    }
}
