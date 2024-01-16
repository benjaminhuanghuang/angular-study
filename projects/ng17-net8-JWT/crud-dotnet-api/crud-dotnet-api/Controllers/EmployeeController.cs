using Microsoft.AspNetCore.Mvc;

namespace crud_dotnet_api.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
