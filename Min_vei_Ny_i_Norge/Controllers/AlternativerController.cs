using Microsoft.AspNetCore.Mvc;
using Min_vei_Ny_i_Norge.Data;
using Min_vei_Ny_i_Norge.Models;
using Microsoft.EntityFrameworkCore;

namespace Min_vei_Ny_i_Norge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AlternativerController : ControllerBase
    {
        public readonly MinVeiContekts _db;

        public AlternativerController(MinVeiContekts db)
        {
            _db = db;
        }

        //Get : api/Alternativ
        [HttpGet("/hent/{id}")]
        public async Task<string> GetAlternativers(int id)
        {
            //if (_db.Alternativers == null)
            //{
            //     return NotFound();
            //}
            var etAlternativ = await _db.Alternativers.FindAsync(id);

            //if (etAlternativ == null)
            //{
            //    return NotFound();
            //}

            var alternativ = new Alternativers()
            {
                Id = etAlternativ.Id,
                Alternativet = etAlternativ.Alternativet
            };

            return alternativ.Alternativet;
        }

        //Vet ikke om den funker, men jaja
        [HttpPost]
        public async Task<ActionResult<Alternativers>> PostAlternativers(Alternativers alternativ)
        {
            _db.Alternativers.Add(alternativ);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAlternativers), new { id = alternativ.Id }, alternativ);
        }
    }
}



