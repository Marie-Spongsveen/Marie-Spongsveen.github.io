using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class AnonymBruker : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AnonymBruker",
                columns: table => new
                {
                    AnonymBrukerId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnonymBruker", x => x.AnonymBrukerId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnonymBruker");
        }
    }
}
