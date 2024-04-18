internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");

        Stack snew = new Stack();
        snew.Push(1);
        snew.Push(4);
        snew.Push(9);
        Console.WriteLine(snew.Pop());
    }
}
