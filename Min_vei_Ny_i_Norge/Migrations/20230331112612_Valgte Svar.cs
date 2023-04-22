using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Min_vei_Ny_i_Norge.Migrations
{
    /// <inheritdoc />
    public partial class ValgteSvar : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ValgteSvar",
                columns: table => new
                {
                    ValgteSvarId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AnonymBrukerId = table.Column<int>(type: "INTEGER", nullable: false),
                    SvarAlternativId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ValgteSvar", x => x.ValgteSvarId);
                    table.ForeignKey(
                        name: "FK_ValgteSvar_AnonymBruker_AnonymBrukerId",
                        column: x => x.AnonymBrukerId,
                        principalTable: "AnonymBruker",
                        principalColumn: "AnonymBrukerId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ValgteSvar_SvarAlternativer_SvarAlternativId",
                        column: x => x.SvarAlternativId,
                        principalTable: "SvarAlternativer",
                        principalColumn: "SvarAlternativId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ValgteSvar_AnonymBrukerId",
                table: "ValgteSvar",
                column: "AnonymBrukerId");

            migrationBuilder.CreateIndex(
                name: "IX_ValgteSvar_SvarAlternativId",
                table: "ValgteSvar",
                column: "SvarAlternativId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ValgteSvar");
        }
    }
}
