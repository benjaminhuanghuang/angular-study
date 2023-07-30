using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.API.Data;
using TodoApp.API.Models;

namespace TodoApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {

        private readonly TodoDbContext _todoDbcontext;

        public TodoController(TodoDbContext context)
        {
            _todoDbcontext = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTodos()
        {
            var todos = await _todoDbcontext.Todos
                .Where(x => !x.IsDeleted)
                .OrderByDescending(x=>x.CreatedDate)
                .ToListAsync();
            return Ok(todos);
        }

        [HttpGet]
        [Route("get-deleted-todos")]
        public async Task<IActionResult> GetDeletedTodos()
        {
            var todos = await _todoDbcontext.Todos
                .Where(x => x.IsDeleted)
                .OrderByDescending(x => x.CreatedDate)
                .ToListAsync();
            return Ok(todos);
        }


        [HttpPost]
        public async Task<IActionResult> AddTodo(Todo todo)
        {
            todo.Id = Guid.NewGuid();
            todo.CreatedDate = DateTime.Now;
            _todoDbcontext.Todos.Add(todo);
            await _todoDbcontext.SaveChangesAsync();
            return Ok(todo);
        }

        [HttpPut]
        public async Task<IActionResult> AddTodo([FromRoute] Guid guid, Todo todoUpdateRequest)
        {
            var todo = await _todoDbcontext.Todos.FindAsync(guid);
            if (todo == null)
            {
                return NotFound();
            }
            todo.IsCompleted = todoUpdateRequest.IsCompleted;
            todo.CompletedDate = DateTime.Now;
            await _todoDbcontext.SaveChangesAsync();

            return Ok(todo);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTodoById([FromRoute] Guid guid)
        {
            var todo = await _todoDbcontext.Todos.FindAsync(guid);
            if (todo == null)
            {
                return NotFound();
            }
            todo.IsCompleted = true;
            todo.CompletedDate = DateTime.Now;
            await _todoDbcontext.SaveChangesAsync();
            return Ok(todo);
        }
    }
}
