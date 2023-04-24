using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class BrukerSvarAlternativ : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BrukerSvarAlternativer",
                columns: table => new
                {
                    BrukerSvarAlternativId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BrukerSvarAlternativTekst = table.Column<string>(type: "TEXT", nullable: false),
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrukerSvarAlternativer", x => x.BrukerSvarAlternativId);
                    table.ForeignKey(
                        name: "FK_BrukerSvarAlternativer_Sporsmals_Id",
                        column: x => x.Id,
                        principalTable: "Sporsmals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "BrukerSvarAlternativer",
                columns: new[] { "BrukerSvarAlternativId", "BrukerSvarAlternativTekst", "Id" },
                values: new object[,]
                {
                    { 1, "Work or job seeking", 3 },
                    { 2, "Education", 3 },
                    { 3, "Seeking asylum or refuge", 3 },
                    { 4, "Family immigration or moving to family living in Norway", 3 },
                    { 5, "Stay at your own expense", 3 },
                    { 6, "I have received a job offer in Norway", 4 },
                    { 7, "I am being sent by my employer to Norway to work", 4 },
                    { 8, "I am coming as a job seeker", 4 },
                    { 9, "Less than 3 months", 6 },
                    { 10, "Between 3 months and 6 months", 6 },
                    { 11, "More than 3 months", 6 },
                    { 12, "Yes, I have applied, or my employer has applied on my behalf", 7 },
                    { 13, "No", 7 }
                });

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 5,
                column: "SvarAlternativTekst",
                value: "Work or job seeking");

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 10,
                column: "SvarAlternativTekst",
                value: "I have received a job offer in Norway");

            migrationBuilder.CreateIndex(
                name: "IX_BrukerSvarAlternativer_Id",
                table: "BrukerSvarAlternativer",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BrukerSvarAlternativer");

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 5,
                column: "SvarAlternativTekst",
                value: "Work or jobseeking");

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 10,
                column: "SvarAlternativTekst",
                value: "I  have received a job offer in Norway");
        }
    }
}
