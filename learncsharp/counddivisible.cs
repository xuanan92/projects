using System;

namespace CountDivisible
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var count = 0;
      for (var i = 1; i <= 100; i++ )
      {
        if (i % 3 == 0)
          count++;
        i++;
        Console.WriteLine("There are {0} numbers divisible by 3", count));
      }
    }
  }
}
