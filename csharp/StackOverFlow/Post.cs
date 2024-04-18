// See https://aka.ms/new-console-template for more information
namespace StackOverFlow_csharp
{
    public class Post
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public int CurrentVote { get; set; }

        public int CalculateVote(int a, int b)
        {
            _ = GetUpvote(a);
            _ = GetDownvote(b);
            return CurrentVote;
        }

        private int GetUpvote(int a)
        {
            return CurrentVote += a;
        }

        private int GetDownvote(int b)
        {
            return CurrentVote -= b;
        }
    }
}
