// See https://aka.ms/new-console-template for more information
using System;
using System.Globalization;

namespace consoleHelloCsharp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter image width:");
            string imageWidth = Console.ReadLine();
            while (string.IsNullOrEmpty(imageWidth))
            {
                Console.WriteLine("Image width cannot be null. Please enter a value:");
                imageWidth = Console.ReadLine();
            }
            Console.WriteLine("Enter image height:");
            string imageHeight = Console.ReadLine();
            int width = Convert.ToInt32(imageWidth, CultureInfo.InvariantCulture);
            int height = Convert.ToInt32(imageHeight, CultureInfo.InvariantCulture);
            if (width > height)
            {
                Console.WriteLine("landscape");
            }
            else
            {
                Console.WriteLine("portrait");
            }
        }
    }
}
