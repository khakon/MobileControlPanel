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

  public class LogPaymentsController : Controller
  {
    private OrdersDbContext db;
    public LogPaymentsController(OrdersDbContext ordersContext)
    {
      db = ordersContext;
    }
    [Route("api/LogPayments/{countDay}")]
    public IActionResult LogPayments(int countDay = 0)
    {
      try
      {
        var maxDate = db.logsPayments.Max(s => s.timeStampServer).AddDays(-countDay);
        maxDate = db.logsPayments.Where(s=>s.timeStampServer<= maxDate).Max(s => s.timeStampServer);
        var minDate = maxDate.AddDays(-1);
        var model = db.logsPayments.Where(s => s.timeStampServer >= minDate && s.timeStampServer <= maxDate).Select(s => new { s.id, agent = s.agents.name, customer = s.customers.Kontr, s.sum, s.timeStamp, s.comment, s.timeStampServer }).Distinct().OrderByDescending(s => s.timeStampServer).ThenBy(s => new { s.agent, s.customer });
        return Ok(model);
      }
      catch (Exception ex)
      {
        return StatusCode(500);
      }
    }

  }
}
