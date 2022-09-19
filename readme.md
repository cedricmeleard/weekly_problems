# Problems

Weekly problems from ["rendezvous with cassidoo"](https://buttondown.email/cassidoo/archive) blog posts

"From Interview question of the week and week question is:" get link to the underlyning blog post

**How to test**

Problems are done (for now) in JS and some times in C#.
All files are here with theirs test file to, if you want to run them.

## Grade average points

["From Interview question of the week and week question is:"](https://buttondown.email/cassidoo/archive/dont-you-ever-ever-give-up-on-you-sheryl-lee-ralph/)

> Given a set of letter grades, output the GPA (grade point average) of those grades.

| Letter | grade points |
| A  | 4    |
| A- | 3.7  |
| B+ | 3.3  |
| B  | 3    |
| B- | 2.7  |
| C+ | 2.3  |
| C  | 2    |
| C- | 1.7  |
| D+ | 1.3  |
| D  | 1    |
| D- | 0.7  |
| F  | 0    |

```JavaScript
> calculateGPA(['A'])
4

> calculateGPA(['F', 'F', 'F'])
0

> calculateGPA(['A', 'A-', 'B+', 'B', 'B-'])
3.3

> calculateGPA(['A', 'B+', 'C-', 'A'])
3.3
```

logic code file : [grade.js](./js/grade/grade.js)


## Boucing Logo

["From Interview question of the week and week question is:"](https://buttondown.email/cassidoo/archive/i-enjoy-the-time-passing-i-think-its-a-privilege/)

> Remember the bouncing DVD logo? Given the dimensions of the logo, its initial coordinates, and the size of a screen, write a function that will determine if its next collision will hit the corner of the screen. Assume it is initially moving southeast with a slope of -1. Extra credit, figure out how many bounces/collisions it will take to hit a corner!

```JavaScript
let dimensions = [5,5]
let initialCoordinates = [0,0] // you decide which part of the logo the coords map to
let screenSize = [100,100]

> cornerHit(dimensions, initialCoordinates, screenSize)
> true // in one collision

> cornerHit(dimensions, [45,70], [400,200])
> false
```

Implementation for multiple event just started, but it seems quite long going futher and no time yet

> TODO FINISH THIS

logic code file : [boucinglogo.js](./js/bouncinglogo/boucinglogo.js)

## fromTo

["From Interview question of the week and week question is:"](https://buttondown.email/cassidoo/archive/if-everything-was-perfect-you-would-never-learn/)

> Given 2 numbers, write a function fromTo that produces a generator, that will produce values in a range.
 
```JavaScript
let gen = fromTo(5,7)

> gen()
5
> gen()
6
> gen()
7
> gen()
undefined
```

code file : [fromTo.js](./js/fromTo/fromTo.js)

## Markdown Tab

["From Interview question of the week and week question is:"](https://buttondown.email/cassidoo/archive/find-something-youre-passionate-about-and-keep/)

> Given a string that represents a markdown table, return a formatted markdown table. A formatted markdown table means that the width of each column is the width of the longest cell in the column.

Input:

```console
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
```

Output:

```console
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

logic code file : [Table.cs](./dotnet/markdownTab/MarkdownTab/Table.cs)

Need refactoring, will return input if not starting and finish with (could much better using a real regex)
use like this

```csharp
 var markdownTable = new Table()
                            .WithSource(source)
                            .PrettyPrint();
```

## Parenthesis Substring

["From Interview question of the week and week question is:"](https://buttondown.email/cassidoo/archive/friends-and-good-manners-will-carry-you-where/)

> Given a string s consisting of various parenthesis ( and ), find the length of the longest valid parenthesis substring.

Example:

```javascript
> parensSubstring('(()(')
> 2

> parensSubstring(')()(()))')
> 6
```

code file : [parensSubstring.js](./js/parenthesisSubstring/parensSubstring.js)

## Swap pairs

["From Interview question of the week and week question is:"](https://buttondown.email/cassidoo/archive/youve-got-to-get-up-every-morning-with-a-smile-on/)

> Given a list, swap every two adjacent nodes. Something to think about: How would your code change if this were a linked list, versus an array?

```javascript
> swapPairs([1,2,3,4])
> [2,1,4,3]

> swapPairs([])
> []
```

Simple implementation in JavaScript and antoher cas in .Net with the use of LinkedList

JS code file : [swapPairs.js](./js/swapPairs/swapPairs.js)
C# code file : [SwapPairs.cs](./dotnet/swapPairs/SwapPairs/SwapPairs.cs)

## Number of Ones

["From Interview question of the week and week question is:"](https://buttondown.email/cassidoo/archive/science-is-not-a-boys-game-its-not-a-girls-game/)

> Given an integer n, count the total number of 1 digits appearing in all non-negative integers less than or equal to n.

Example:

```javascript
> numberOfOnes(14)
> 7 // 1, 10, 11, 12, 13, 14
```

code file : [numberOfOnes.js](./js/numberOfOnes/numberOfOnes.js)
