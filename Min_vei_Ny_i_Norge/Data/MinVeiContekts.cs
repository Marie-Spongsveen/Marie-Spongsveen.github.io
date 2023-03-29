using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
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
                        SvarAlternativTekst = "EU/EEA land"
                    },
                    new SvarAlternativ
                    {
                        Id = 1,
                        SvarAlternativId = 2,
                        SvarAlternativTekst = "Ikke EU/EEA land"
                    },
                   
                    new SvarAlternativ
                    {
                        Id = 2,
                        SvarAlternativId = 3,
                        SvarAlternativTekst = "EU/EEA land"
                    },
                     new SvarAlternativ
                     {
                         Id = 2,
                         SvarAlternativId = 4,
                         SvarAlternativTekst = "Ikke EU/EEA land"
                     },


                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 5,
                        SvarAlternativTekst = "Work or jobseeking"

                    },

                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 6,
                        SvarAlternativTekst = "Education"

                    },
                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 7,
                        SvarAlternativTekst = "Seeking asylum or refuge"

                    },

                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 8,
                        SvarAlternativTekst = "Family immigration or moving to family living in Norway"

                    },
                    new SvarAlternativ
                    {
                        Id = 3,
                        SvarAlternativId = 9,
                        SvarAlternativTekst = "Stay at your own expense"

                    },
                    new SvarAlternativ
                    {
                        Id = 4,
                        SvarAlternativId = 10,
                        SvarAlternativTekst = "I  have received a job offer in Norway"

                    },

                     new SvarAlternativ
                     {
                         Id = 4,
                         SvarAlternativId = 11,
                         SvarAlternativTekst = "I am being sent by my employer to Norway to work"

                     },

                      new SvarAlternativ
                      {
                          Id = 4,
                          SvarAlternativId = 12,
                          SvarAlternativTekst = "I am coming as a job seeker"

                      },

                    new SvarAlternativ
                    {
                        Id = 5,
                        SvarAlternativId = 13,
                        SvarAlternativTekst = "01.01.2023"
                    },
                    new SvarAlternativ
                    {
                        Id = 6,
                        SvarAlternativId = 14,
                        SvarAlternativTekst = "Less than 3 months"
                    },

                      new SvarAlternativ
                      {
                          Id = 6,
                          SvarAlternativId = 15,
                          SvarAlternativTekst = "More than 3 months"
                      },
                    new SvarAlternativ
                    {
                        Id = 7,
                        SvarAlternativId = 16,
                        SvarAlternativTekst = "Yes, I have applied, or my employer has applied on my behalf"

                    },
                     new SvarAlternativ
                     {
                         Id = 7,
                         SvarAlternativId = 17,
                         SvarAlternativTekst = "No"

                     });
            });


            modelBuilder.Entity<AnonymBruker>(entity =>
            {
                entity.HasKey(e => e.AnonymBrukerId);
                entity.Property(e => e.AnonymBrukerId);
              
            });

            modelBuilder.Entity<Resultat>(entity =>
            {
                entity.HasKey(e => e.ResultatId);
                entity.Property(e => e.ResultatId);
                entity.Property(e => e.ResultatTekst);

                entity.HasData(
                     new Resultat
                     {
                         ResultatId = 1,
                         ResultatTekst = "Report a move to Norway"
                     },
                     new Resultat
                     {
                         ResultatId = 2,
                         ResultatTekst = "Register as an EU/EEA citizen with the police"
                     },
                     new Resultat
                     {
                         ResultatId = 3,
                         ResultatTekst = "National identification number"
                     },
                     new Resultat
                     {
                         ResultatId = 4,
                         ResultatTekst = "Tax deduction card"
                     });

            });

        }
        public DbSet<Sporsmal> Sporsmals => Set<Sporsmal>();
        public DbSet<SvarAlternativ> SvarAlternativer => Set<SvarAlternativ>();
        public DbSet<AnonymBruker> AnonymBruker => Set<AnonymBruker>();
        public DbSet<Resultat> Resultat => Set<Resultat>();
    }


   

       
}