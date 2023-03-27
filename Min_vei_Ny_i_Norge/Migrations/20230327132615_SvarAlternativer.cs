using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class SvarAlternativer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SvarAlternativer",
                columns: table => new
                {
                    SvarAlternativId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SvarAlternativTekst = table.Column<string>(type: "TEXT", nullable: false),
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SvarAlternativer", x => x.SvarAlternativId);
                    table.ForeignKey(
                        name: "FK_SvarAlternativer_Sporsmals_Id",
                        column: x => x.Id,
                        principalTable: "Sporsmals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 3,
                column: "Sporsmalet",
                value: "What is the main purpose of your stay in norway?");

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 4,
                column: "Sporsmalet",
                value: "Do you have a job offer in norway or do you plan to come as a job seeker?");

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 6,
                column: "Sporsmalet",
                value: "How long do you plan to stay in norway?");

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 7,
                column: "Sporsmalet",
                value: "Have you applied for a tax deduction card in norway?");

            migrationBuilder.InsertData(
                table: "SvarAlternativer",
                columns: new[] { "SvarAlternativId", "Id", "SvarAlternativTekst" },
                values: new object[,]
                {
                    { 1, 1, "Austria" },
                    { 2, 1, "Belgia" },
                    { 3, 1, "Bulgaria" },
                    { 196, 2, "Croatia" },
                    { 197, 2, "Denmark" },
                    { 198, 2, "Estonia" },
                    { 391, 3, "Work or jobseeking" },
                    { 392, 3, "Education" },
                    { 393, 3, "Seeking asylum or refuge" },
                    { 394, 3, "Family immigration or moving to family living in Norway" },
                    { 395, 3, "Stay at your own expense" },
                    { 396, 4, "I  have received a job offer in Norway" },
                    { 397, 4, "I am being sent by my employer to Norway to work" },
                    { 398, 4, "I am coming as a job seeker" },
                    { 399, 5, "01.01.2023" },
                    { 400, 6, "Less than 3 months" },
                    { 401, 6, "More than 3 months" },
                    { 402, 7, "Yes, I have applied, or my employer has applied on my behalf" },
                    { 403, 7, "No" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_SvarAlternativer_Id",
                table: "SvarAlternativer",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SvarAlternativer");

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 3,
                column: "Sporsmalet",
                value: "What is the main purpose of your stay in Norway?");

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 4,
                column: "Sporsmalet",
                value: "Do you have a job offer in Norway or do you plan to come as a job seeker?");

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 6,
                column: "Sporsmalet",
                value: "How long do you plan to stay in Norway?");

            migrationBuilder.UpdateData(
                table: "Sporsmals",
                keyColumn: "Id",
                keyValue: 7,
                column: "Sporsmalet",
                value: "Have you applied for a tax deduction card in Norway?");
        }
    }
}
