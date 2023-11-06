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
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateTodo([FromRoute] Guid id, Todo todoUpdateRequest)
        {
            var todo = await _todoDbcontext.Todos.FindAsync(id);
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
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteTodo([FromRoute] Guid id)
        {
            var todo = await _todoDbcontext.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            todo.IsDeleted = true;
            todo.CompletedDate = DateTime.Now;
            await _todoDbcontext.SaveChangesAsync();
            return Ok(todo);
        }

        [HttpPut]
        [Route("undo-deleted-todo/{id:Guid}")]
        public async Task<IActionResult> UndoDeletedTodo([FromRoute] Guid id)
        {
            var todo = await _todoDbcontext.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            todo.IsDeleted = false;
            todo.DeletedDate = null;
            await _todoDbcontext.SaveChangesAsync();
            return Ok(todo);
        }   
    }
}
