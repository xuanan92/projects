// See https://aka.ms/new-console-template for more information
using StackOverFlow_csharp;

internal class Program
{
    public static void Main()
    {
        Console.WriteLine("Hello, World!");

        Post post =
            new()
            {
                Title = "Welcome to the Fulture",
                Description = "There are many things to explore"
            };
        Console.WriteLine(post.CalculateVote(5, 1));
    }
}
