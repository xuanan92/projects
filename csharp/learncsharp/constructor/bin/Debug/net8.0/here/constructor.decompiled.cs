using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.Versioning;

[assembly: CompilationRelaxations(8)]
[assembly: RuntimeCompatibility(WrapNonExceptionThrows = true)]
[assembly: Debuggable(DebuggableAttribute.DebuggingModes.Default | DebuggableAttribute.DebuggingModes.DisableOptimizations | DebuggableAttribute.DebuggingModes.IgnoreSymbolStoreSequencePoints | DebuggableAttribute.DebuggingModes.EnableEditAndContinue)]
[assembly: TargetFramework(".NETCoreApp,Version=v8.0", FrameworkDisplayName = ".NET 8.0")]
[assembly: AssemblyCompany("constructor")]
[assembly: AssemblyConfiguration("Debug")]
[assembly: AssemblyFileVersion("1.0.0.0")]
[assembly: AssemblyInformationalVersion("1.0.0+4ab46d1a62328e145696a5b04be4b4324b3a2585")]
[assembly: AssemblyProduct("constructor")]
[assembly: AssemblyTitle("constructor")]
[assembly: AssemblyVersion("1.0.0.0")]
[module: RefSafetyRules(11)]
namespace constructor;

public class Customer
{
	public int Id { get; set; }

	public string? Name { get; set; }

	public List<Order> Orders { get; set; } = new List<Order>();

}
public class Order
{
}
public class Program
{
	public static void Main()
	{
		Console.WriteLine("Hello, World!");
		Customer customer = new Customer
		{
			Id = 1
		};
		Console.WriteLine(customer.Id);
		Console.WriteLine(customer.Name);
		Order item = new Order();
		customer.Orders.Add(item);
	}
}
