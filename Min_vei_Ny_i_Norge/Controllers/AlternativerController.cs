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
        public async Task<string> hent(int id)
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

            var alternativ = new Alternativ()
            {
                Id = etAlternativ.Id,
                Alternativet = etAlternativ.Alternativet
            };

            return alternativ.Alternativet;
        }

    }
}



