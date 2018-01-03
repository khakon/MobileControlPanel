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
  [Route("api/Payments")]
  public class PaymentsController : Controller
  {
    private OrdersDbContext db;
    public PaymentsController(OrdersDbContext ordersContext)
    {
      db = ordersContext;
    }
    //[HttpGet("Orders")]
    public IActionResult Payments()
    {
      try
      {
        var model = db.Payments.Select(s => new { s.id, agent = s.agents.name, customer = s.customers.Kontr, s.sum, s.timeStamp }).Distinct().OrderBy(s => new { s.agent, s.customer });
        return Ok(model);
      }
      catch (Exception ex)
      {
        return StatusCode(500);
      }
    }
    [HttpGet("{id}")]
    public IActionResult Payment(int id)
    {
      try
      {
        var model = db.Payments.Select(s => new { s.id, agentName = s.agents.name, customerName = s.customers.Kontr, s.sum, s.timeStamp }).Distinct().SingleOrDefault(s=>s.id == id);
        return Ok(model);
      }
      catch (Exception ex)
      {
        return StatusCode(500);
      }
    }
    [HttpPost]
    [Produces("application/json")]
    public IActionResult Add([FromBody]Payment model)
    {
      try
      {
        if (db.Payments.Any(s => s.id == model.id))
        {
          var item = db.Payments.SingleOrDefault(s => s.id == model.id);
          item.sum = model.sum;
          db.Update(item);
          db.SaveChanges();
        }
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
      return RedirectToAction("Payments");
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      try
      {
        if (!db.Payments.Any(s => s.id == id)) return BadRequest("Оплата не найдена");//NotFound
        var item = db.Payments.FirstOrDefault(s => s.id == id);
        db.Remove(item);
        db.SaveChanges();
        return RedirectToAction("Payments");
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
