using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace OrdersRepository
{
    public class OrdersDbContext : DbContext
    {
        public virtual DbSet<agent> agents { get; set; }
        public virtual DbSet<Group> Groups { get; set; }
        public virtual DbSet<Item> Items { get; set; }
        public virtual DbSet<Price> Prices { get; set; }
        public virtual DbSet<logsString> logsStrings { get; set; }
        public virtual DbSet<history> history { get; set; }
		public virtual DbSet<historyOrder> historyOrders { get; set; }
		public virtual DbSet<GoodsAgent> GoodsAgents { get; set; }
        public virtual DbSet<log> logs { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<logsPayment> logsPayments { get; set; }
        public virtual DbSet<logsPaymentString> logsPaymentStrings { get; set; }
        public virtual DbSet<Plan> Plans { get; set; }
        public virtual DbSet<paymentsHistory> paymentsHistories { get; set; }
        public virtual DbSet<balDoc> balDocs { get; set; }
        public virtual DbSet<GeoCustomer> GeoCustomers { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<LogApp> LogApps { get; set; }
		public virtual DbSet<MobileUser> MobileUsers { get; set; }

		public OrdersDbContext(DbContextOptions<OrdersDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
