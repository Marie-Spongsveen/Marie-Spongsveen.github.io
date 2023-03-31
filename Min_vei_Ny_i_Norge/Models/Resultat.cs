using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations;
using RequiredAttribute = Microsoft.Build.Framework.RequiredAttribute;

namespace Min_vei_Ny_i_Norge.Models
{
    public class Resultat
    {
        [Key]
        public int ResultatId { get; set; }
        [Required]
        public string ResultatNavn { get; set; } = string.Empty;
        [Required]
        public string ResultatTekst { get; set; } = string.Empty;
    }
}
