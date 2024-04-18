// See https://aka.ms/new-console-template for more information

namespace constructor
{
    public partial class Program
    {
        public int MyProperty { get; set; }

        public static void Main()
        {
            Person person = new() { Birthdate = new DateTime(1992, 2, 2) };
            Console.WriteLine(person.Age);
        }
    }
}
