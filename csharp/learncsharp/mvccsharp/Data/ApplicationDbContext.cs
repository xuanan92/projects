using Microsoft.EntityFrameworkCore;
using mvccsharp.Models;

namespace mvccsharp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<CategoryModel> Categories { get; set; }
    }
}
