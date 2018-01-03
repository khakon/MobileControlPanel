using System;
using System.Collections.Generic;
using System.Text;

namespace OrdersRepository
{
    public class historyOrder
    {
		public int id { get; set; }
		public Nullable<System.DateTime> period { get; set; }
		public string iddoc { get; set; }
		public string docno { get; set; }
		public string agent { get; set; }
		public string code { get; set; }
		public string kontr { get; set; }
		public string tov { get; set; }
		public decimal quant { get; set; }
		public decimal price { get; set; }
		public decimal suma { get; set; }
	}
}
