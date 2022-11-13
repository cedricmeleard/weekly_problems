# Problems

Weekly problems from ["rendezvous with cassidoo"](https://buttondown.email/cassidoo/archive) blog posts

"From Interview question of the week and week question is:" get link to the underlyning blog post

**How to test**
Problems are done (for now) in JS and some times in C#.
All files are here with theirs test file to, if you want to run them.

## anti divisor

> Given a positive integer n, return all of its anti-divisors. Anti-divisors are numbers that do not divide a number by the largest possible margin (1 is not an anti-divisor of any number).

More information concerning [The Anti-Divisor here](https://oeis.org/A066272/a066272a.html)

Example:

```javascript
> antidivisor(1)
> []

> antidivisor(3)
> [2]

> antidivisor(5)
> [2,3]

> antidivisor(10)
> [3,4,7]

> antidivisor(234)
> [4,7,12,36,52,67,156]
```

logic code file : [antidivisor.js](./js/antidivisor/antidivisor.js)

## passDoors

> Let’s say you have n doors that start out as closed. With the first pass across the doors, you toggle every door open. With the second pass, you toggle every second door. With the third, every third door, and so on. Write a function that takes in an integer numberOfPasses, and returns how many doors are open after the number of passes. Thanks Max for inspiring this question!

```js
let n = 7
let numberOfPasses = 3

passDoors(n, numberOfPasses)
> 4

// Explanation:
// 0 means open, 1 means closed
// Initial: 1 1 1 1 1 1 1
// Pass 1:  0 0 0 0 0 0 0
// Pass 2:  0 1 0 1 0 1 0
// Pass 3:  0 1 1 1 0 0 0
```

logic code file : [passdoors.js](./js/passdoors/passdoors.js)

## Trauncate words

> Write a function that truncates words in a string to length n

```javascript
let n = 3

truncate('never gonna give you up', n)
> 'nev gon giv you up'

truncate('*hello* darkness, my ~old_friend', n)
> '*hel* dar, my ~old_fri'
```

logic code file : [truncate.js](./js/truncate/truncate.js)

## Fibonacci like suite

> Given two integers, generate a “fibonacci-like” sequence of n digits (where the next number in the pattern is the sum of the previous two numbers)
Extra credit: Given a sequence, determine if the sequence is “fibonacci-like”.

```javascript
let n = 5

> fibLike(10, 20, n)
> [10, 20, 30, 50, 80]

> fibLike(3, 7, n)
> [3, 7, 10, 17, 27]
```

logic code file : [fibonacci.js](./js/fibonacci_like/fibonacci.js)

## Ordinal

> Write a function to output the ordinal suffix of a positive integer concatenated to an inputted number.

```JavaScript
> ordinal(3)
> '3rd'

> ordinal(57)
> '57th'
```

For this one another approch is to use native plurals [Intl.PluralRules link to MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)
witch provide all methods to resolve this problem with **type: ordinal**
anyway my logic code file : [ordinal.js](./js/ordinal/ordinal.js)

## Grade average points

> Given a set of letter grades, output the GPA (grade point average) of those grades.

| Letter | grade points |
| --- | --- |
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

> Given an integer n, count the total number of 1 digits appearing in all non-negative integers less than or equal to n.

Example:

```javascript
> numberOfOnes(14)
> 7 // 1, 10, 11, 12, 13, 14
```

code file : [numberOfOnes.js](./js/numberOfOnes/numberOfOnes.js)
