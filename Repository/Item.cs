//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан по шаблону.
//
//     Изменения, вносимые в этот файл вручную, могут привести к непредвиденной работе приложения.
//     Изменения, вносимые в этот файл вручную, будут перезаписаны при повторном создании кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebOrders
{
    using System;
    using System.Collections.Generic;
    
    public partial class Item
    {
        public string ParentId { get; set; }
        public string ItemId { get; set; }
        public string Name { get; set; }
        public Nullable<int> lev { get; set; }
        public string Unit { get; set; }
        public string Pack { get; set; }
        public decimal Weight { get; set; }
        public decimal Volume { get; set; }
        public Nullable<decimal> Bal { get; set; }
        public Nullable<long> barCode { get; set; }
        public string tree { get; set; }
        public Nullable<decimal> priceRef { get; set; }
    }
}
