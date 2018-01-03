using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrdersRepository;

namespace MobileControlPanel.Controllers
{
  [Produces("application/json")]
  [Route("api/Orders")]
  public class OrdersController : Controller
  {
    private OrdersDbContext db;
    public OrdersController(OrdersDbContext ordersContext)
    {
      db = ordersContext;
    }
    //[HttpGet("Orders")]
    public IActionResult Orders()
    {
      try
      {
        var model = db.Orders.Select(s => new { s.id, s.date, agent = s.agents.name, customer = s.customers.Kontr, s.number, product = s.items.Name, s.quantity, s.price, sum = Math.Round((decimal)s.sum,2), s.timeStamp }).Distinct().OrderBy(s => new { s.agent, s.customer, s.number });
        return Ok(model);
      }
      catch(Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      try
      {
        if (!db.Orders.Any(s => s.id == id))  return BadRequest("Заказ не найден");//NotFound
        var item = db.Orders.FirstOrDefault(s => s.id == id);
        db.Remove(item);
        db.SaveChanges();
        return RedirectToAction("Orders");
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

  }
}
