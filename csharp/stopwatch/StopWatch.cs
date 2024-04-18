namespace stopwatch
{
    public partial class Program
    {
        public class StopWatch
        {
            public DateTime StartTimeStamp { get; set; }
            public DateTime StopTimeStamp { get; set; }
            public bool IsRunning { get; private set; }

            public void StartTimer()
            {
                StartTimeStamp = DateTime.Now;
                IsRunning = true;
            }

            public void StopTimer()
            {
                StopTimeStamp = DateTime.Now;
                IsRunning = false;
            }

            public TimeSpan TimeSpan()
            {
                return StopTimeStamp - StartTimeStamp;
            }
        }
    }
}
