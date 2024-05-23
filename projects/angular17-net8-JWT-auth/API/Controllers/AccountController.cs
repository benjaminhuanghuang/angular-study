using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
//using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;  // ControllerBase
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace API.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        // private readonly UserManager<AppUser> _userManager;
        // private readonly RoleManager<IdentityRole> _roleManager;
        // private readonly IConfiguration _configuration;
        [HttpGet]
        public string Hi()
        {
            return "Hi";
        }
    }
}
