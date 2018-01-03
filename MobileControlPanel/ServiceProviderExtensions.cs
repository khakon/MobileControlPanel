using Helpers;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace MobileControlPanel
{
    public static class ServiceProviderExtensions
    {
    public static void AddSQLProcedure(this IServiceCollection services, string connectionString)
    {
      services.AddTransient<SQLProcedure>(s=>new SQLProcedure(connectionString));
    }
  }
}
