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

        //hey
        //hey

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
    }
}