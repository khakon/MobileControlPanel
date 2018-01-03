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
    [Route("api/Dashboard")]
    public class DashboardController : Controller
    {
    private OrdersDbContext db;
    public DashboardController(OrdersDbContext ordersContext)
    {
      db = ordersContext;
    }
    //[HttpGet("Orders")]
    public IActionResult GetStats()
    {
      try
      {
        var model = new {
          sumOrders = db.Orders.Sum(s=>s.sum),
          countOrders = db.Orders.Select(s=>s.number).Distinct().Count(),
          countOrdersString = db.Orders.Count(),
          sumPays = db.Payments.Sum(s => s.sum),
          countPays = db.Payments.Select(s=>s.customer).Distinct().Count(),
          countPaysString = db.Payments.Count()
        };
        return Ok(model);
      }
      catch (Exception ex)
      {
        return StatusCode(500);
      }
    }
  }
}
