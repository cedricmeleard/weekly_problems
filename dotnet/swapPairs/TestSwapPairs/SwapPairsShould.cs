using System.Collections;

namespace TestSwapPairs
{
    public class SwapPairsShould
    {
        [Theory]
        [ClassData(typeof(ArrayBasedTestData))]
        public void Match_expected_result(int[] entry, int[] expected)
        {
            var sut = new SwapPairs.SwapPairs();
            var result = sut.Convert(entry);

            Assert.Equal(expected.Length, result.Length);
            Assert.Equal(expected, result);
        }

        public class ArrayBasedTestData : IEnumerable<object[]>
        {
            public IEnumerator<object[]> GetEnumerator()
            {
                yield return new object[] { new int[] { }, new int[] { } };
                yield return new object[] { new int[] { 1, 2 }, new int[] { 2, 1 } };
                yield return new object[] { new int[] { 1, 2, 3, 4 }, new int[] { 2, 1, 4, 3 } };
                yield return new object[] { new int[] { 1, 2, 3, 4, 5 }, new int[] { 2, 1, 4, 3, 5 } };
            }

            IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
        }

        [Theory]
        [ClassData(typeof (LinkedListBasedTestData))]
        public void Match_expected_result_when_linkedList(LinkedList<int> entry, LinkedList<int> expected)
        {
            var sut = new SwapPairs.SwapPairs();
            var result = sut.Convert(entry);

            Assert.Equal(expected.Count, result.Count);
            Assert.Equal(expected, result);
        }
    }

    internal class LinkedListBasedTestData : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            var entry = new int[] { 1, 2, 3, 4, 5 };
            var expected = new int[] { 2, 1, 4, 3, 5 };

            yield return new object[] { new LinkedList<int>(), new LinkedList<int>() };
            yield return new object[] { new LinkedList<int>(entry.Take(2)), new LinkedList<int>(expected.Take(2)) };
            yield return new object[] { new LinkedList<int>(entry.Take(4)), new LinkedList<int>(expected.Take(4)) };
            yield return new object[] { new LinkedList<int>(entry), new LinkedList<int>(expected) };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}