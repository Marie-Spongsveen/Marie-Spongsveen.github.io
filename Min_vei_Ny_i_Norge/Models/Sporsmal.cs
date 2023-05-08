using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KeyAttribute = System.ComponentModel.DataAnnotations.KeyAttribute;
using Min_vei_Ny_i_Norge.Models;

namespace Min_vei_Ny_i_Norge.Models
{
    public class Sporsmal
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Sporsmalet { get; set; } = string.Empty;

           
    }
    
       
}


    

