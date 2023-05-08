using MessagePack;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KeyAttribute = System.ComponentModel.DataAnnotations.KeyAttribute;

namespace Min_vei_Ny_i_Norge.Models
{
    public class BrukerSvarAlternativ
    {
        [Key]
        public int BrukerSvarAlternativId { get; set; }

        [Required]
        public string BrukerSvarAlternativTekst { get; set; }

        // Foreign key 
        public virtual int Id { get; set; }
        [ForeignKey("Id")]
        public virtual Sporsmal Sporsmals { get; set; }



    }
}

