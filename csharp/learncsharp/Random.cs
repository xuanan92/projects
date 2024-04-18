using System;

namespace MyApplication
{
  
  enum Errors
  {
   [Description = "loi"]
    account_nf,
    Medium,
    High
  }
  class Program
  {
    static void Main(string[] args)
    {
      int myVar = (int) Level.Medium;
      Console.WriteLine(myVar);
    }
  }
}
