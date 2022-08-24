namespace MarkdownTab
{
    public class Cell
    {
        public Cell(string v)
        {
            this.Text = v;
            this.Size = v.Length;
        }

        public string Text { get; private set; }
        public int Size { get; private set; }
    }
}