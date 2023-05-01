using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Min_vei_Ny_i_Norge.Models
{
    public class ValgtSvar
    {
        [Key]
        public int ValgteSvarId { get; set; }

        // Foreign key 
        public virtual int AnonymBrukerId { get; set; }
        [ForeignKey("AnonymBrukerId")]
        public virtual AnonymBruker AnonymBruker { get; set; }
        public virtual int SvarAlternativId { get; set; }
        [ForeignKey("SvarAlternativId")]
      
        public virtual SvarAlternativ SvarAlternativer { get; set; }
    }
}
