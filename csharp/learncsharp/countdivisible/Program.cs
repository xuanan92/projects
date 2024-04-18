namespace countdivisible
{
    public class Program
    {
        public static void Main()
        {
            string path = @"/home/xuanan92/Downloads/OFL.txt";
            string alltexts = File.ReadAllText(path);
            string[] arrayTexts = alltexts.Split(" ");
            var array = new int[] { 1, 2, 3, 4, 5 };
            int count = 0;
            foreach (string word in arrayTexts)
            {
                if (word.Length > count)
                {
                    count = word.Length;
                }
            }
            List<string> wordMaxLengthArray = new();
            foreach (string w in arrayTexts)
            {
                if (w.Length == count)
                {
                    wordMaxLengthArray.Add(w);
                }
            }
            foreach (string s in wordMaxLengthArray)
            {
                Console.WriteLine(s);
            }
        }
    }
} // namespace countdivisible
