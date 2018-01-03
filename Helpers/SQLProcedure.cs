using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Helpers
{

	public class SQLProcedure
	{
		private string _connectionString;
		public SQLProcedure() { }
		public SQLProcedure(string connection) {
			_connectionString = connection;
		}
		public void StoredProcedure(string textCommand, Dictionary<string, int> listParameter)
		{
			using (SqlConnection connection = new SqlConnection(_connectionString))
			{
				SqlCommand cmd = new SqlCommand(textCommand, connection);
				cmd.CommandType = CommandType.StoredProcedure;
				cmd.CommandTimeout = 3000;
				foreach (var p in listParameter.Keys)
				{
					cmd.Parameters.Add(new SqlParameter(p, SqlDbType.Int));
					cmd.Parameters[p].Value = listParameter[p];
				}
				connection.Open();
				cmd.ExecuteNonQuery();
			}

		}
		public void StoredProcedure(string textCommand, Dictionary<string, string> listParameter)
		{
			using (SqlConnection connection = new SqlConnection(_connectionString))
			{
				SqlCommand cmd = new SqlCommand(textCommand, connection);
				cmd.CommandType = CommandType.StoredProcedure;
				cmd.CommandTimeout = 3000;
				foreach (var p in listParameter)
				{
					cmd.Parameters.Add(new SqlParameter(p.Key, SqlDbType.NChar));
					cmd.Parameters[p.Key].Value = p.Value;
				}
				connection.Open();
				cmd.ExecuteNonQuery();
			}

		}
		public void StoredProcedure(string nameProcedure)
		{
			using (SqlConnection connection = new SqlConnection(_connectionString))
			{
				SqlCommand cmd = new SqlCommand(nameProcedure, connection);
				cmd.CommandType = CommandType.StoredProcedure;
				cmd.CommandTimeout = 3000;
				connection.Open();
				cmd.ExecuteNonQuery();
			}
		}
		public void SQLCommand(string textCommand, Dictionary<string, string> listParameter)
		{
			using (SqlConnection connection = new SqlConnection(_connectionString))
			{
				SqlCommand cmd = new SqlCommand(textCommand, connection);
				cmd.CommandType = CommandType.Text;
				cmd.CommandTimeout = 3000;
				foreach (var p in listParameter)
				{
					cmd.Parameters.Add(new SqlParameter(p.Key, SqlDbType.NChar));
					cmd.Parameters[p.Key].Value = p.Value;
				}
				connection.Open();
				cmd.ExecuteNonQuery();
			}
		}
		public async Task<int> ExecuteStoredProcedureAsync(string nameProcedure)
		{
			using (var newConnection = new SqlConnection(_connectionString))
			using (var cmd = new SqlCommand(nameProcedure, newConnection))
			{
				cmd.CommandType = CommandType.Text;
				await newConnection.OpenAsync().ConfigureAwait(false);
				return await cmd.ExecuteNonQueryAsync().ConfigureAwait(false);
			}
			
		}
	}
}
