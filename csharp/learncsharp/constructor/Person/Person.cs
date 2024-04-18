// See https://aka.ms/new-console-template for more information

namespace constructor;

public partial class Program
{
    public class Person
    {
        public DateTime Birthdate { get; set; }
        public int Age
        {
            get
            {
                TimeSpan timeSpan = DateTime.Now - Birthdate;
                int year = timeSpan.Days / 365;
                return year;
            }
        }
    }
}
