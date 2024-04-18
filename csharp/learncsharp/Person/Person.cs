// See https://aka.ms/new-console-template for more information

namespace consoleHelloCsharp
{
    public class Person
    {
        public string? FirstName;
        public string? LastName;

        public void Introduce()
        {
            System.Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}
