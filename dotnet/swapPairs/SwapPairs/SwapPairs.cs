namespace SwapPairs
{
    public class SwapPairs
    {
        public int[] Convert(int[] entry)
        {
            if (entry == null) return new int[]{ };

            var result = entry.Clone() as int[];
            for (var i = 0; i <= result.Length - 2; i += 2)
            {
                var temp = (int)result[i];
                result[i] = result[i+1];
                result[i+1] = temp;
            }
            
            return result;
        }

        public LinkedList<int> Convert(LinkedList<int> entry)
        {
            if (entry == null) return new LinkedList<int>();

            var result = new LinkedList<int>();
            var copy = new LinkedList<int>(entry);

            while(copy.Count > 0)
            {
                var toRight = Pop(copy);
                var toLeft = Pop(copy);

                if (toLeft != null)
                    result.AddLast(toLeft.Value);
                
                if (toRight != null)
                    result.AddLast(toRight.Value);
            }
            return result;
        }

        /// <summary>
        /// Remove first element of a list and return it
        /// </summary>
        /// <param name="copy"></param>
        /// <remarks>TODO should be change to extenstion of linkedlist</remarks>
        /// <returns></returns>
        private static int? Pop(LinkedList<int> copy)
        {
            var firstElement = copy.First;
            if (firstElement == null) return null;

            copy.RemoveFirst();
            return firstElement.Value;
        }
    }
}