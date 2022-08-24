namespace MarkdownTab.Test;

public class MarkdownTabShould
{
    [Theory]
    [InlineData("", "")]
    //[InlineData("blabla", "blabla")]
    [InlineData(
@"| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |", 
@"| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |")]
    [InlineData(
@"| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph      | Text |",    
 @"| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |")]
    [InlineData(
@"| Syntax | Description |
| --- | ----------- |
| Header | Title |", 
@"| Syntax | Description |
| ------ | ----------- |
| Header | Title       |")]
    public void Format_correctly_my_tab(string source, string expected)
    {
        var sut = new Table().
            WithSource(source);
        Assert.Equal(expected, sut.PrettyPrint());
    }
}