using Microsoft.AspNetCore.Mvc;
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
        public async Task<string> GetSporsmal(int id)
        {
            var etSporsmal = await _db.Sporsmals.FindAsync(id);

            var sporsmal = new Sporsmal()
            {
                Id = etSporsmal.Id,
                Sporsmalet = etSporsmal.Sporsmalet
            };

            return sporsmal.Sporsmalet;
        }

        //Vet ikke om den funker, men jaja
        [HttpPost]
        public async Task<ActionResult<Sporsmal>> PostSporsmal (Sporsmal sporsmal)
        {
            _db.Sporsmals.Add(sporsmal);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSporsmal), new { id = sporsmal.Id }, sporsmal);
        }
    }
}