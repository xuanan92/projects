using Microsoft.EntityFrameworkCore;
using mvcmyself.Models;

namespace mvcmyself.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<CategoryModel>? Categories { get; set; }
    }
}
