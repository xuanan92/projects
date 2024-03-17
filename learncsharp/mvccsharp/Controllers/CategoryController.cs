using Microsoft.AspNetCore.Mvc;
using mvccsharp.Data;
using mvccsharp.Models;

namespace mvccsharp.Controllers
{
    public class CategoryController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CategoryController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<CategoryModel> objCategoryList = _db.Categories.ToList();
            return View(objCategoryList);
        }
    }
}
