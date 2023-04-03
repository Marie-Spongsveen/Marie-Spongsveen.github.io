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
        public async Task<List<SvarAlternativ>> hentSvaralternativ(int id)
        {
            List<SvarAlternativ> s = await _db.SvarAlternativer.Where(x => x.Sporsmals.Id == id)
                .Select(x => new SvarAlternativ
                {
                    Id = x.Id,
                    Sporsmals = x.Sporsmals,
                    SvarAlternativId = x.SvarAlternativId,
                    SvarAlternativTekst = x.SvarAlternativTekst,
                }).ToListAsync();

            return s;
        }
    }
}