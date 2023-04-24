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
        //public DbSet<SvarAlternativ> SvarAlternativer { get; set; }
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
                        SvarAlternativTekst = "Work or job seeking"

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
                        SvarAlternativTekst = "I have received a job offer in Norway"

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


            modelBuilder.Entity<BrukerSvarAlternativ>(entity =>

            {

                entity.HasKey(e => e.BrukerSvarAlternativId);
                entity.Property(e => e.Id);
                entity.Property(e => e.BrukerSvarAlternativId);
                entity.Property(e => e.BrukerSvarAlternativTekst);


                entity.HasData(
                   

                    new BrukerSvarAlternativ
                    {
                        Id = 3,
                        BrukerSvarAlternativId = 1,
                        BrukerSvarAlternativTekst = "Work or job seeking"

                    },

                    new BrukerSvarAlternativ
                    {
                        Id = 3,
                        BrukerSvarAlternativId = 2,
                        BrukerSvarAlternativTekst = "Education"

                    },
                    new BrukerSvarAlternativ
                    {
                        Id = 3,
                        BrukerSvarAlternativId = 3,
                        BrukerSvarAlternativTekst = "Seeking asylum or refuge"

                    },

                    new BrukerSvarAlternativ
                    {
                        Id = 3,
                        BrukerSvarAlternativId = 4,
                        BrukerSvarAlternativTekst = "Family immigration or moving to family living in Norway"

                    },
                    new BrukerSvarAlternativ
                    {
                        Id = 3,
                        BrukerSvarAlternativId = 5,
                        BrukerSvarAlternativTekst = "Stay at your own expense"

                    },
                    new BrukerSvarAlternativ
                    {
                        Id = 4,
                        BrukerSvarAlternativId = 6,
                        BrukerSvarAlternativTekst = "I have received a job offer in Norway"

                    },

                     new BrukerSvarAlternativ
                     {
                         Id = 4,
                         BrukerSvarAlternativId = 7,
                         BrukerSvarAlternativTekst = "I am being sent by my employer to Norway to work"

                     },

                      new BrukerSvarAlternativ
                      {
                          Id = 4,
                          BrukerSvarAlternativId = 8,
                          BrukerSvarAlternativTekst = "I am coming as a job seeker"

                      },

                    
                    new BrukerSvarAlternativ
                    {
                        Id = 6,
                        BrukerSvarAlternativId = 9,
                        BrukerSvarAlternativTekst = "Less than 3 months"
                    },

                    new BrukerSvarAlternativ
                    {
                        Id = 6,
                        BrukerSvarAlternativId = 10,
                        BrukerSvarAlternativTekst = "Between 3 months and 6 months"
                    },

                    new BrukerSvarAlternativ
                      {
                          Id = 6,
                          BrukerSvarAlternativId = 11,
                          BrukerSvarAlternativTekst = "More than 3 months"
                      },
                    new BrukerSvarAlternativ
                    {
                        Id = 7,
                        BrukerSvarAlternativId = 12,
                        BrukerSvarAlternativTekst = "Yes, I have applied, or my employer has applied on my behalf"

                    },
                     new BrukerSvarAlternativ
                     {
                         Id = 7,
                         BrukerSvarAlternativId = 13,
                         BrukerSvarAlternativTekst = "No"

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
                entity.Property(e => e.ResultatNavn);
                entity.Property(e => e.ResultatTekst);

            });

            modelBuilder.Entity<ValgteSvar>(entity =>
            {
                entity.HasKey(e => e.ValgteSvarId);
                entity.Property(e => e.ValgteSvarId);
                entity.Property(e => e.AnonymBrukerId);
                entity.Property(e => e.SvarAlternativId);

            });

            modelBuilder.Entity<EU_EEA_Land>(entity =>
            {
                entity.HasKey(e => e.LandId);
                entity.Property(e => e.LandId);
                entity.Property(e => e.Land);

                entity.HasData(

                    new EU_EEA_Land { 
                        LandId = 1,
                        Land = "Austria"
                    },

                    new EU_EEA_Land { 
                        LandId = 2,
                        Land = "Belgium"
                    },

                    new EU_EEA_Land
                    {
                        LandId = 3,
                        Land = "Bulgaria"
                    },

                     new EU_EEA_Land
                     {
                         LandId = 4,
                         Land = "Croatia"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 5,
                         Land = "Cyprus"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 6,
                         Land = "Czech Republic"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 7,
                         Land = "Denmark"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 8,
                         Land = "Estonia"
                     },


                     new EU_EEA_Land
                     {
                         LandId = 9,
                         Land = "Finland"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 10,
                         Land = "France"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 11,
                         Land = "Germany"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 12,
                         Land = "Greece"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 13,
                         Land = "Hungary"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 14,
                         Land = "Ireland"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 15,
                         Land = "Italy"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 16,
                         Land = "Latvia"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 17,
                         Land = "Lithuania"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 18,
                         Land = "Luxembourg"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 19,
                         Land = "Malta"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 20,
                         Land = "Netherland"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 21,
                         Land = "Poland"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 22,
                         Land = "Portugal"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 23,
                         Land = "Romania"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 24,
                         Land = "Slovakia"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 25,
                         Land = "Slovenia"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 26,
                         Land = "Spain"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 27,
                         Land = "Sweden"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 28,
                         Land = "Iceland"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 29,
                         Land = "Liechtenstein"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 30,
                         Land = "Norway"
                     },

                     new EU_EEA_Land
                     {
                         LandId = 31,
                         Land = "Switzerland"
                     }

                    );
            });



        }

       

        

        public DbSet<Sporsmal> Sporsmals => Set<Sporsmal>();

       public DbSet<SvarAlternativ> SvarAlternativer => Set<SvarAlternativ>();
        public DbSet<BrukerSvarAlternativ> BrukerSvarAlternativer => Set<BrukerSvarAlternativ>();

        public DbSet<Resultat> Resultat => Set<Resultat>();
        public DbSet<AnonymBruker> AnonymBruker => Set<AnonymBruker>();
        public DbSet<ValgteSvar> ValgteSvar => Set<ValgteSvar>();

        public DbSet<EU_EEA_Land> EU_EEA_Land => Set<EU_EEA_Land>();


    }


   

       
}