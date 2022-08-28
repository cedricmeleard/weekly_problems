namespace MarkdownTab
{
    public class NotATable : Table
    {
        private string tableToParse;

        public NotATable(string tableToParse)
        {
            this.tableToParse = tableToParse;
        }

        public override string PrettyPrint()
        {
            return this.tableToParse;
        }
    }
}