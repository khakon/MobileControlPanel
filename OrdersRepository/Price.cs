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
    
    public partial class Price
    {
        public int id { get; set; }
        public string TovId { get; set; }
        public string KnId { get; set; }
        public Nullable<decimal> Price1 { get; set; }
        public Nullable<decimal> Discount { get; set; }
    }
}
