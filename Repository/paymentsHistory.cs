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
    
    public partial class paymentsHistory
    {
        public int id { get; set; }
        public System.DateTime period { get; set; }
        public string iddoc { get; set; }
        public string docno { get; set; }
        public string agent { get; set; }
        public string code { get; set; }
        public string kontr { get; set; }
        public decimal suma { get; set; }
    }
}
