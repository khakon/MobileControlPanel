//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан по шаблону.
//
//     Изменения, вносимые в этот файл вручную, могут привести к непредвиденной работе приложения.
//     Изменения, вносимые в этот файл вручную, будут перезаписаны при повторном создании кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OrdersRepository
{
    using System;
    using System.Collections.Generic;
	using System.ComponentModel.DataAnnotations.Schema;

	public partial class log
    {
        public int id { get; set; }
        public System.DateTime date { get; set; }
        public string payment { get; set; }
        public string agent { get; set; }
        public string customer { get; set; }
        public string itemId { get; set; }
        public double quantity { get; set; }
        public Nullable<double> price { get; set; }
        public Nullable<int> number { get; set; }
        public Nullable<System.DateTime> timeStampServer { get; set; }
        public Nullable<double> sum { get; set; }
        public string comment { get; set; }

		[ForeignKey("agent")]
		public virtual agent agents { get; set; }
		[ForeignKey("customer")]
		public virtual Customer customers { get; set; }
		[ForeignKey("itemId")]
		public virtual Item items { get; set; }
	}
}