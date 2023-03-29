using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class Resultat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Resultat",
                columns: table => new
                {
                    ResultatId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ResultatTekst = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resultat", x => x.ResultatId);
                });

            migrationBuilder.InsertData(
                table: "Resultat",
                columns: new[] { "ResultatId", "ResultatTekst" },
                values: new object[,]
                {
                    { 1, "Report a move to Norway" },
                    { 2, "Register as an EU/EEA citizen with the police" },
                    { 3, "National identification number" },
                    { 4, "Tax deduction card" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Resultat");
        }
    }
}
