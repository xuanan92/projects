// See https://aka.ms/new-console-template for more information

namespace constructor
{
    public class Customer
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public List<Order> Orders { get; set; } = new();

        /* public Customer(string name) */
        /* { */
        /*     Id = 2; */
        /*     Name = name ?? throw new NullReferenceException(); */
        /**/
        /*     Orders = new List<Order>(); */
        /* } */

        /* public Customer(int id) */
        /*     : this() */
        /* { */
        /*     this.Id = id; */
        /* } */
        /**/
        /* public Customer(int id, string? name) */
        /*     : this(id) */
        /* { */
        /*     this.Name = name; */
        /* } */
    }
}
