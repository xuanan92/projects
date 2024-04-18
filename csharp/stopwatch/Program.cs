namespace stopwatch
{
    public partial class Program
    {
        private static void Main()
        {
            const string commandStart = "start";
            const string commandStop = "stop";
            const string commandQuit = "quit";

            StopWatch obj = new();

            while (true)
            {
                Console.WriteLine("Enter command:");
                string? userCommand = Console.ReadLine();

                switch (userCommand)
                {
                    case commandStart:
                        if (obj.IsRunning)
                        {
                            Console.WriteLine("You can not start twice in a row");
                            break;
                        }
                        obj.StartTimer();
                        break;
                    case commandStop:
                        if (!obj.IsRunning)
                        {
                            Console.WriteLine("The clock is currently stopped");
                            break;
                        }
                        obj.StopTimer();
                        Console.WriteLine(obj.TimeSpan().TotalSeconds);
                        break;
                    case commandQuit:
                        break;
                    default:
                        Console.WriteLine("Invalid command");
                        break;
                }
                if (userCommand == commandQuit)
                {
                    Console.WriteLine("Quit the program");
                    break;
                }
            }
        }
    }
}
