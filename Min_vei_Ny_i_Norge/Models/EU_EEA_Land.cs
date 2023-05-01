using System.ComponentModel.DataAnnotations;

namespace Min_vei_Ny_i_Norge.Models
{
    public class EU_EEA_Land
    {
        [Key]
        public int LandId { get; set; }

        [Required]
        public string Land { get; set; }
    }
}
