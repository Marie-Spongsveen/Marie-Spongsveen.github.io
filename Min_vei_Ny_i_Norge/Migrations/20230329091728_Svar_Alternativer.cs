using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class Svar_Alternativer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 196);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 197);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 198);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 391);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 392);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 393);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 394);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 395);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 396);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 397);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 398);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 399);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 400);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 401);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 402);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 403);

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 1,
                column: "SvarAlternativTekst",
                value: "EU/EEA land");

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 2,
                column: "SvarAlternativTekst",
                value: "Ikke EU/EEA land");

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 3,
                columns: new[] { "Id", "SvarAlternativTekst" },
                values: new object[] { 2, "EU/EEA land" });

            migrationBuilder.InsertData(
                table: "SvarAlternativer",
                columns: new[] { "SvarAlternativId", "Id", "SvarAlternativTekst" },
                values: new object[,]
                {
                    { 4, 2, "Ikke EU/EEA land" },
                    { 5, 3, "Work or jobseeking" },
                    { 6, 3, "Education" },
                    { 7, 3, "Seeking asylum or refuge" },
                    { 8, 3, "Family immigration or moving to family living in Norway" },
                    { 9, 3, "Stay at your own expense" },
                    { 10, 4, "I  have received a job offer in Norway" },
                    { 11, 4, "I am being sent by my employer to Norway to work" },
                    { 12, 4, "I am coming as a job seeker" },
                    { 13, 5, "01.01.2023" },
                    { 14, 6, "Less than 3 months" },
                    { 15, 6, "More than 3 months" },
                    { 16, 7, "Yes, I have applied, or my employer has applied on my behalf" },
                    { 17, 7, "No" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 17);

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 1,
                column: "SvarAlternativTekst",
                value: "Austria");

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 2,
                column: "SvarAlternativTekst",
                value: "Belgia");

            migrationBuilder.UpdateData(
                table: "SvarAlternativer",
                keyColumn: "SvarAlternativId",
                keyValue: 3,
                columns: new[] { "Id", "SvarAlternativTekst" },
                values: new object[] { 1, "Bulgaria" });

            migrationBuilder.InsertData(
                table: "SvarAlternativer",
                columns: new[] { "SvarAlternativId", "Id", "SvarAlternativTekst" },
                values: new object[,]
                {
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
        }
    }
}
