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
    
    public partial class Group
    {
        public string ParentId { get; set; }
        public string GroupId { get; set; }
        public string Name { get; set; }
        public Nullable<int> lev { get; set; }
        public string tree { get; set; }
    }
}
