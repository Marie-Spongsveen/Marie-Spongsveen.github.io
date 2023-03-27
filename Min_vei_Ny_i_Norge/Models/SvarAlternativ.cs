using MessagePack;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KeyAttribute = System.ComponentModel.DataAnnotations.KeyAttribute;

namespace Min_vei_Ny_i_Norge.Models
{
    public class SvarAlternativ
    {
        [Key]
        public int SvarAlternativId { get; set; }
        
        [Required]
        public string SvarAlternativTekst { get; set; }

        // Foreign key 
        public virtual int Id { get; set; }
        [ForeignKey("Id")]
        public virtual Sporsmal Sporsmals { get; set; }
   


    }
}
