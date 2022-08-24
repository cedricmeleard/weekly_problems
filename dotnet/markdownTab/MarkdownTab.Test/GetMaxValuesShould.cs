namespace MarkdownTab.Test
{
    public class GetMaxValuesShould
    {
        [Fact]

        public void Should_get_max_word_lengths()
        {

            var sut = new Table();
            IEnumerable<List<Cell>> lines = new List<List<Cell>>()
            {
                new List<Cell>() { new Cell("Syntax"), new Cell("Description") },
                new List<Cell>() { new Cell("---"), new Cell("-----------") },
                new List<Cell>() { new Cell("Header"), new Cell("Title") },
                new List<Cell>() { new Cell("Paragraph"), new Cell("Text") }
            };

            // I should get the max value for each cells
            Assert.Equal(new List<int> { 9, 11 }, sut.GetMaxValues(lines));
        }

    }
}
