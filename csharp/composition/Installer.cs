// See https://aka.ms/new-console-template for more information

namespace composition_csharp
{
    public class Installer(Logger logger)
    {
        private readonly Logger _logger = logger;

        public void Install()
        {
            _logger.Log("We're installing");
        }
    }
}
