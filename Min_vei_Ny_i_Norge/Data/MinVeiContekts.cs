using Microsoft.EntityFrameworkCore;
using Min_vei_Ny_i_Norge.Models;

namespace Min_vei_Ny_i_Norge.Data
{
    public class MinVeiContekts : DbContext
    {
        public MinVeiContekts(DbContextOptions<MinVeiContekts> option) : base(option)
        { }

        public DbSet<Sporsmal> Sporsmals => Set<Sporsmal>();

        public DbSet<Alternativers> Alternativers { get; set; } = null!;

        public DbSet<Resultat> Resultater { get; set; } = null!;

        public DbSet<ValgtSvar> ValgteSvar { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sporsmal>(entity =>
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
                        Sporsmalet = "What is the main purpose of your stay in Norway?"
                    },
                    new Sporsmal
                    {
                        Id = 4,
                        Sporsmalet = "Do you have a job offer in Norway or do you plan to come as a job seeker?"
                    },
                    new Sporsmal
                    {
                        Id = 5,
                        Sporsmalet = "What is your expected date of arrival?"
                    },
                    new Sporsmal
                    {
                        Id = 6,
                        Sporsmalet = "How long do you plan to stay in Norway?"
                    },
                    new Sporsmal
                    {
                        Id = 7,
                        Sporsmalet = "Have you applied for a tax deduction card in Norway?"
                    }
                    );
            });

            modelBuilder.Entity<Alternativers>().ToTable("Alternativ");

            modelBuilder.Entity<Resultat>().ToTable("Resultat");

            modelBuilder.Entity<ValgtSvar>().ToTable("ValgtSvar");
        }

    }
}