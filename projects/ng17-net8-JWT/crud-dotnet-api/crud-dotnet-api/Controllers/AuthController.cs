using Microsoft.AspNetCore.Mvc;

namespace crud_dotnet_api.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
