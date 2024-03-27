// See https://aka.ms/new-console-template for more information
using System;
using System.Globalization;

namespace consoleHelloCsharp
{
    public class Program
    {
        public static void Main()
        {
            var imageWidth = "300";
            var imageWi = 300;
            Console.WriteLine("Enter image height:");
            var imageHeight = "400";
            int width = Convert.ToInt32(imageWidth, CultureInfo.InvariantCulture);
            int height = Convert.ToInt32(imageHeight, CultureInfo.InvariantCulture);
            int hel = imageWi;
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
