using Microsoft.EntityFrameworkCore;
using Min_vei_Ny_i_Norge.Models;
using System.Diagnostics;

namespace Min_vei_Ny_i_Norge.Data
{
    public class MinVeiContekts : DbContext
    {
        public MinVeiContekts(DbContextOptions<MinVeiContekts> option) : base(option)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity <Sporsmal>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id);
                entity.Property(e => e.Sporsmalet);

                entity.HasData(
                    new Sporsmal
                    {
                        Id = 1,
                        Sporsmalet = "What is your citizenship?"
                    },
                    new Sporsmal
                    {
                        Id = 2,
                        Sporsmalet = "What is your second citizenship?"
                    },
                    new Sporsmal
                    {
                        Id = 3,
                        Sporsmalet = "What is the main purpose of your stay in norway?"
                    },
                    new Sporsmal
                    {
                        Id = 4,
                        Sporsmalet = "Do you have a job offer in norway or do you plan to come as a job seeker?"
                    },
                    new Sporsmal
                    {
                        Id = 5,
                        Sporsmalet = "What is your expected date of arrival?"
                    },
                    new Sporsmal
                    {
                        Id = 6,
                        Sporsmalet = "How long do you plan to stay in norway?"
                    },
                    new Sporsmal
                    {
                        Id = 7,
                        Sporsmalet = "Have you applied for a tax deduction card in norway?"
                    }
                    );
            });



            modelBuilder.Entity<SvarAlternativ>(entity =>

            {
               
                entity.HasKey(e => e.SvarAlternativId);
                entity.Property(e => e.Id);
                entity.Property(e => e.SvarAlternativId);
                entity.Property(e => e.SvarAlternativTekst);


                entity.HasData(
                    new SvarAlternativ
                    {
                        Id = 1,
                        SvarAlternativId = 1,
                        SvarAlternativTekst = "Austria"
                    },
                    new SvarAlternativ
                    {
                        Id = 1,
                        SvarAlternativId = 2,
                        SvarAlternativTekst = "Belgia"
                    },
                    new SvarAlternativ
                    {
                        Id = 1,
                        SvarAlternativId = 3,
                        SvarAlternativTekst = "Bulgaria"
                    },
                    new SvarAlternativ
                    {
                        Id = 2,
                        SvarAlternativId = 196,
                        SvarAlternativTekst = "Croatia"
                    },
                     new SvarAlternativ
                     {
                         Id = 2,
                         SvarAlternativId = 197,
                         SvarAlternativTekst = "Denmark"
                     },

                      new SvarAlternativ
                      {
                          Id = 2,
                          SvarAlternativId = 198,
                          SvarAlternativTekst = "Estonia"
                      },

                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 391,
                        SvarAlternativTekst = "Work or jobseeking"

                    },

                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 392,
                        SvarAlternativTekst = "Education"

                    },
                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 393,
                        SvarAlternativTekst = "Seeking asylum or refuge"

                    },

                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 394,
                        SvarAlternativTekst = "Family immigration or moving to family living in Norway"

                    },
                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 395,
                        SvarAlternativTekst = "Stay at your own expense"

                    },
                    new SvarAlternativ
                    {
                        Id = 4,
                        SvarAlternativId = 396,
                        SvarAlternativTekst = "I  have received a job offer in Norway"

                    },

                     new SvarAlternativ
                     {
                         Id = 4,
                         SvarAlternativId = 397,
                         SvarAlternativTekst = "I am being sent by my employer to Norway to work"

                     },

                      new SvarAlternativ
                      {
                          Id = 4,
                          SvarAlternativId = 398,
                          SvarAlternativTekst = "I am coming as a job seeker"

                      },

                    new SvarAlternativ
                    {
                        Id = 5,
                        SvarAlternativId = 399,
                        SvarAlternativTekst = "01.01.2023"
                    },
                    new SvarAlternativ
                    {
                        Id = 6,
                        SvarAlternativId = 400,
                        SvarAlternativTekst = "Less than 3 months"
                    },

                      new SvarAlternativ
                      {
                          Id = 6,
                          SvarAlternativId = 401,
                          SvarAlternativTekst = "More than 3 months"
                      },
                    new SvarAlternativ
                    {
                        Id = 7,
                        SvarAlternativId = 402,
                        SvarAlternativTekst = "Yes, I have applied, or my employer has applied on my behalf"

                    },
                     new SvarAlternativ
                     {
                         Id = 7,
                         SvarAlternativId = 403,
                         SvarAlternativTekst = "No"

                     });
            });

        }
        public DbSet<Sporsmal> Sporsmals => Set<Sporsmal>();
        public DbSet<SvarAlternativ> SvarAlternativer => Set<SvarAlternativ>();
    }


   

       
}