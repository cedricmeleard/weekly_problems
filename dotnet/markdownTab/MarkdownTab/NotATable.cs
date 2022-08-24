namespace MarkdownTab
{
    public class NotATable : Table
    {
        public override string PrettyPrint()
        {
            return String.Empty;
        }
    }
}