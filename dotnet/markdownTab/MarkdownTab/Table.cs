using System.Text;

namespace MarkdownTab;
public class Table
{
    private List<List<Cell>> _convertedLines = new();

    public Table WithSource(string source)
    {
        if (string.IsNullOrEmpty(source.Trim()))
            return new NotATable();

        var lines = source.Split("\r\n");
        _convertedLines = lines.Select(line => ConvertLine(line)).ToList();

        return this;
    }

    public virtual string PrettyPrint()
    {
        var maxValues = GetMaxValues(_convertedLines);
        StringBuilder result = new();
        foreach (var line in _convertedLines)
        {
            var newLine = new StringBuilder();
            for (int i = 0; i < maxValues.Count; i++)
            {
                string text = line[i].Text;
                int cellLength = maxValues[i];

                newLine.AppendFormat("| {0} ",
                    text.PadRight(cellLength, text.StartsWith("-") ? '-' : ' '));
            }

            result.Append(newLine.ToString() + $"|\r\n");
        }

        return result
            .ToString()
            // berk
            .TrimEnd('\n').TrimEnd('\r');
    }

    public List<Cell> ConvertLine(string line)
    {
        return line
            .Split("|")
            .Where(p => p.Length > 0)
            .Select(p => new Cell(p.Trim()))
            .ToList();
    }

    public List<int> GetMaxValues(IEnumerable<List<Cell>> rows)
    {
        var result = new List<int>();
        // I should get the max value for each cells
        foreach (var row in rows)
        {
            var rowCellLength = row.Select(cell => cell.Size).ToList();
            if (result.Count == 0) result = rowCellLength;
            else
            {
                for (int i = 0; i < result.Count; i++)
                {
                    result[i] = Math.Max(result[i], rowCellLength[i]);
                }
            }
        }

        return result;
    }
}
