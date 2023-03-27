﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Min_vei_Ny_i_Norge.Data;

#nullable disable

namespace Min_vei_Ny_i_Norge.Migrations
{
    [DbContext(typeof(MinVeiContekts))]
    [Migration("20230327132615_SvarAlternativer")]
    partial class SvarAlternativer
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.4");

            modelBuilder.Entity("Min_vei_Ny_i_Norge.Models.Sporsmal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Sporsmalet")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Sporsmals");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Sporsmalet = "What is your citizenship?"
                        },
                        new
                        {
                            Id = 2,
                            Sporsmalet = "What is your second citizenship?"
                        },
                        new
                        {
                            Id = 3,
                            Sporsmalet = "What is the main purpose of your stay in norway?"
                        },
                        new
                        {
                            Id = 4,
                            Sporsmalet = "Do you have a job offer in norway or do you plan to come as a job seeker?"
                        },
                        new
                        {
                            Id = 5,
                            Sporsmalet = "What is your expected date of arrival?"
                        },
                        new
                        {
                            Id = 6,
                            Sporsmalet = "How long do you plan to stay in norway?"
                        },
                        new
                        {
                            Id = 7,
                            Sporsmalet = "Have you applied for a tax deduction card in norway?"
                        });
                });

            modelBuilder.Entity("Min_vei_Ny_i_Norge.Models.SvarAlternativ", b =>
                {
                    b.Property<int>("SvarAlternativId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Id")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SvarAlternativTekst")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("SvarAlternativId");

                    b.HasIndex("Id");

                    b.ToTable("SvarAlternativer");

                    b.HasData(
                        new
                        {
                            SvarAlternativId = 1,
                            Id = 1,
                            SvarAlternativTekst = "Austria"
                        },
                        new
                        {
                            SvarAlternativId = 2,
                            Id = 1,
                            SvarAlternativTekst = "Belgia"
                        },
                        new
                        {
                            SvarAlternativId = 3,
                            Id = 1,
                            SvarAlternativTekst = "Bulgaria"
                        },
                        new
                        {
                            SvarAlternativId = 196,
                            Id = 2,
                            SvarAlternativTekst = "Croatia"
                        },
                        new
                        {
                            SvarAlternativId = 197,
                            Id = 2,
                            SvarAlternativTekst = "Denmark"
                        },
                        new
                        {
                            SvarAlternativId = 198,
                            Id = 2,
                            SvarAlternativTekst = "Estonia"
                        },
                        new
                        {
                            SvarAlternativId = 391,
                            Id = 3,
                            SvarAlternativTekst = "Work or jobseeking"
                        },
                        new
                        {
                            SvarAlternativId = 392,
                            Id = 3,
                            SvarAlternativTekst = "Education"
                        },
                        new
                        {
                            SvarAlternativId = 393,
                            Id = 3,
                            SvarAlternativTekst = "Seeking asylum or refuge"
                        },
                        new
                        {
                            SvarAlternativId = 394,
                            Id = 3,
                            SvarAlternativTekst = "Family immigration or moving to family living in Norway"
                        },
                        new
                        {
                            SvarAlternativId = 395,
                            Id = 3,
                            SvarAlternativTekst = "Stay at your own expense"
                        },
                        new
                        {
                            SvarAlternativId = 396,
                            Id = 4,
                            SvarAlternativTekst = "I  have received a job offer in Norway"
                        },
                        new
                        {
                            SvarAlternativId = 397,
                            Id = 4,
                            SvarAlternativTekst = "I am being sent by my employer to Norway to work"
                        },
                        new
                        {
                            SvarAlternativId = 398,
                            Id = 4,
                            SvarAlternativTekst = "I am coming as a job seeker"
                        },
                        new
                        {
                            SvarAlternativId = 399,
                            Id = 5,
                            SvarAlternativTekst = "01.01.2023"
                        },
                        new
                        {
                            SvarAlternativId = 400,
                            Id = 6,
                            SvarAlternativTekst = "Less than 3 months"
                        },
                        new
                        {
                            SvarAlternativId = 401,
                            Id = 6,
                            SvarAlternativTekst = "More than 3 months"
                        },
                        new
                        {
                            SvarAlternativId = 402,
                            Id = 7,
                            SvarAlternativTekst = "Yes, I have applied, or my employer has applied on my behalf"
                        },
                        new
                        {
                            SvarAlternativId = 403,
                            Id = 7,
                            SvarAlternativTekst = "No"
                        });
                });

            modelBuilder.Entity("Min_vei_Ny_i_Norge.Models.SvarAlternativ", b =>
                {
                    b.HasOne("Min_vei_Ny_i_Norge.Models.Sporsmal", "Sporsmals")
                        .WithMany()
                        .HasForeignKey("Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Sporsmals");
                });
#pragma warning restore 612, 618
        }
    }
}
