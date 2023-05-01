using Microsoft.AspNetCore.Mvc;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Models;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

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

            var etResultat = await _db.Resultater.FindAsync();

            var resultat = new Resultat()
            {
                Id = etResultat.Id,
                Resultatet = etResultat.Resultatet,
                ResultatetTekst = etResultat.ResultatetTekst
            };

            return resultat.Resultatet;
        }



        //Vet ikke om den funker, men jaja
        [HttpPost("/hent")]
        public async Task<ActionResult<Resultat>> PostResultat(Resultat resultat)
        {
            _db.Resultater.Add(resultat);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetResultat), new { id = resultat.Id }, resultat);
        }

    }

    public class ValgtSvarController : ControllerBase
    {
        public readonly MinVeiContekts _db;

        public ValgtSvarController(MinVeiContekts db)
        {
            _db = db;
        }


        public async Task<IActionResult> LagreValgtSvar([FromBody] ValgtSvar valgtSvar)
        {
            try
            {
                // Check if the chosen answer already exists in the database
                var eksiterendeSvar = await _db.ValgteSvar.FindAsync(valgtSvar.Id);

                if (eksiterendeSvar != null)
                {
                    // If the answer already exists, update it with the new choice
                    eksiterendeSvar.Id = valgtSvar.Id;
                }
                else
                {
                    // If the answer doesn't exist, add a new record for it
                    _db.ValgteSvar.Add(valgtSvar);
                }

                // Save the changes to the database
                await _db.SaveChangesAsync();

                // Return a 200 OK response indicating success
                return Ok();
            }
            catch (Exception ex)
            {
                // If an error occurs, return a 500 Internal Server Error response
                return StatusCode(500, ex.Message);
            }
        }
    }
}
