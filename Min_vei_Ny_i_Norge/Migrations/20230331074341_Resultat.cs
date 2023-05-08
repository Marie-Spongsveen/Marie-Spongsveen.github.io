using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

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
                 ResultatNavn = table.Column<string>(type: "TEXT", nullable: false),
                 ResultatTekst  = table.Column<string>(type: "TEXT", nullable: false)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Resultat", x => x.ResultatId);
               }); ;

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                           name: "Resultat");

        }
    }
}
