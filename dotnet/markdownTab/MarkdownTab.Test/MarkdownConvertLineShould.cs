namespace MarkdownTab.Test
{
    public class MarkdownConvertLineShould
    {
        [Fact]
        public void Should_return_converted_line()
        {
            var sut = new Table();

            var convertedLine = sut.ConvertLine("| Description |").First<Cell>();

            Assert.Equal("Description", convertedLine.Text);
            Assert.Equal(11, convertedLine.Size);
        }

        [Fact]
        public void Should_return_converted_line_with_2_cells()
        {
            var sut = new Table();

            var cells = sut.ConvertLine("| Syntax | Description |");

            Assert.Equal("Syntax", cells[0].Text);
            Assert.Equal(6, cells[0].Size);

            Assert.Equal("Description", cells[1].Text);
            Assert.Equal(11, cells[1].Size);
        }
    }
}
