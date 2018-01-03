using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OrdersRepository
{
    public class MobileUser
	{
		public int Id { get; set; }
		public string AgentId { get; set; }
		public string AgentName { get; set; }
		public string AgentPassword { get; set; }
		public string AgentMobileId { get; set; }
		public bool IsActive { get; set; }
		public bool Deleted { get; set; }

		[ForeignKey("AgentId")]
		public virtual agent Agent { get; set; }
	}
}
