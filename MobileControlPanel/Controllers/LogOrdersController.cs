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
  [Route("api/LogOrders")]
  public class LogOrdersController : Controller
  {
    private OrdersDbContext db;
    public LogOrdersController(OrdersDbContext ordersContext)
    {
      db = ordersContext;
    }
    //[HttpGet("Orders")]
    public IActionResult LogOrders()
    {
      try
      {
        var maxDate = (DateTime)db.logs.Max(s => s.timeStampServer);
        var minDate = maxDate.Date;
        var model = db.logs.Where(s=>s.timeStampServer >= minDate && s.timeStampServer <= maxDate).Select(s => new { s.id, s.date, agent = s.agents.name, customer = s.customers.Kontr, s.number, product = s.items.Name, s.quantity, s.price, s.sum, s.timeStampServer }).Distinct().OrderByDescending(s=> s.timeStampServer).ThenBy(s => new { s.agent, s.customer, s.number });
        var modelList = model.ToList();
        return Ok(model);
      }
      catch (Exception ex)
      {
        return StatusCode(500);
      }
    }
  }
}
