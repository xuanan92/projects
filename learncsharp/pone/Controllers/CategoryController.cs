using Microsoft.AspNetCore.Mvc;

namespace pone.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
