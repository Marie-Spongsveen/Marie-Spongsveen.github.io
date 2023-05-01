using Microsoft.AspNetCore.Mvc;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Models;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace Min_vei_Ny_i_Norge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

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
                //Sjekker om det valgte svaret allerede finnes i databasen
                var eksiterendeSvar = await _db.ValgteSvar.FindAsync(valgtSvar.ValgteSvarId);

                if (eksiterendeSvar != null)
                {
                    //Hvis det finnes, oppdateres det med det nye
                    eksiterendeSvar.ValgteSvarId = valgtSvar.ValgteSvarId;
                }
                else
                {
                    //Hvis ikke, blir den lagt til
                    _db.ValgteSvar.Add(valgtSvar);
                }

                //Lagre endringen i databasen
                await _db.SaveChangesAsync();

                //Returnerer en statuskode 200 for å vise suksess
                return Ok();
            }
            catch (Exception ex)
            {
                //HVis det skulle være en error
                return StatusCode(500, ex.Message);
            }
        }
    }

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
    }


}
