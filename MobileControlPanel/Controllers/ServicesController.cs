using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Helpers;

namespace MobileControlPanel.Controllers
{
  [Produces("application/json")]
  [Route("api/Services")]
  public class ServicesController : Controller
  {
    private SQLProcedure _serviceSQL;
    public ServicesController(SQLProcedure service)
    {
      _serviceSQL = service;
    }
    [HttpGet("{nameProcedure}")]
    public async Task<IActionResult> ExecuteProcedure(string nameProcedure)
    {
      if(String.IsNullOrEmpty(nameProcedure)) return BadRequest("Empty name");//NotFound
      try
      {
        var result = await _serviceSQL.ExecuteStoredProcedureAsync(nameProcedure);
        return Ok(result);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
