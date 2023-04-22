using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class EU_EEA_Land : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EU_EEA_Land",
                columns: table => new
                {
                    LandId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Land = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EU_EEA_Land", x => x.LandId);
                });

            migrationBuilder.InsertData(
                table: "EU_EEA_Land",
                columns: new[] { "LandId", "Land" },
                values: new object[,]
                {
                    { 1, "Austria" },
                    { 2, "Belgium" },
                    { 3, "Bulgaria" },
                    { 4, "Croatia" },
                    { 5, "Cyprus" },
                    { 6, "Czech Republic" },
                    { 7, "Denmark" },
                    { 8, "Estonia" },
                    { 9, "Finland" },
                    { 10, "France" },
                    { 11, "Germany" },
                    { 12, "Greece" },
                    { 13, "Hungary" },
                    { 14, "Ireland" },
                    { 15, "Italy" },
                    { 16, "Latvia" },
                    { 17, "Lithuania" },
                    { 18, "Luxembourg" },
                    { 19, "Malta" },
                    { 20, "Netherland" },
                    { 21, "Poland" },
                    { 22, "Portugal" },
                    { 23, "Romania" },
                    { 24, "Slovakia" },
                    { 25, "Slovenia" },
                    { 26, "Spain" },
                    { 27, "Sweden" },
                    { 28, "Iceland" },
                    { 29, "Liechtenstein" },
                    { 30, "Norway" },
                    { 31, "Switzerland" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EU_EEA_Land");
        }
    }
}
