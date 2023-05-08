using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class MinVeiInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sporsmals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Sporsmalet = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sporsmals", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Sporsmals",
                columns: new[] { "Id", "Sporsmalet" },
                values: new object[,]
                {
                    { 1, "What is your citizenship?" },
                    { 2, "What is your second citizenship?" },
                    { 3, "What is the main purpose of your stay in Norway?" },
                    { 4, "Do you have a job offer in Norway or do you plan to come as a job seeker?" },
                    { 5, "What is your expected date of arrival?" },
                    { 6, "How long do you plan to stay in Norway?" },
                    { 7, "Have you applied for a tax deduction card in Norway?" }
                });

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sporsmals");
        }
    }
}
