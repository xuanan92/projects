// See https://aka.ms/new-console-template for more information
namespace composition_csharp
{
    public class DbMigrator(Logger logger)
    {
        private readonly Logger _logger = logger;

        public void Migrate()
        {
            _logger.Log("We're migrating");
        }
    }
}
