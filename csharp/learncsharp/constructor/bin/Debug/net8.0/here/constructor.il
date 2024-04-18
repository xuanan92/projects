// IL code: constructor
.class private auto ansi '<Module>'
{
} // end of class <Module>

.class public auto ansi beforefieldinit constructor.Customer
	extends [System.Runtime]System.Object
{
	.custom instance void [System.Runtime]System.Runtime.CompilerServices.NullableContextAttribute::.ctor(uint8) = (
		01 00 01 00 00
	)
	.custom instance void [System.Runtime]System.Runtime.CompilerServices.NullableAttribute::.ctor(uint8) = (
		01 00 00 00 00
	)
	// Fields
	.field private int32 '<Id>k__BackingField'
	.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
		01 00 00 00
	)
	.custom instance void [System.Runtime]System.Diagnostics.DebuggerBrowsableAttribute::.ctor(valuetype [System.Runtime]System.Diagnostics.DebuggerBrowsableState) = (
		01 00 00 00 00 00 00 00
	)
	.field private string '<Name>k__BackingField'
	.custom instance void [System.Runtime]System.Runtime.CompilerServices.NullableAttribute::.ctor(uint8) = (
		01 00 02 00 00
	)
	.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
		01 00 00 00
	)
	.custom instance void [System.Runtime]System.Diagnostics.DebuggerBrowsableAttribute::.ctor(valuetype [System.Runtime]System.Diagnostics.DebuggerBrowsableState) = (
		01 00 00 00 00 00 00 00
	)
	.field private class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> '<Orders>k__BackingField'
	.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
		01 00 00 00
	)
	.custom instance void [System.Runtime]System.Diagnostics.DebuggerBrowsableAttribute::.ctor(valuetype [System.Runtime]System.Diagnostics.DebuggerBrowsableState) = (
		01 00 00 00 00 00 00 00
	)

	// Methods
	.method public hidebysig specialname 
		instance int32 get_Id () cil managed 
	{
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
			01 00 00 00
		)
		// Method begins at RVA 0x2050
		// Header size: 1
		// Code size: 7 (0x7)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: ldfld int32 constructor.Customer::'<Id>k__BackingField'
		IL_0006: ret
	} // end of method Customer::get_Id

	.method public hidebysig specialname 
		instance void set_Id (
			int32 'value'
		) cil managed 
	{
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
			01 00 00 00
		)
		// Method begins at RVA 0x2058
		// Header size: 1
		// Code size: 8 (0x8)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: ldarg.1
		IL_0002: stfld int32 constructor.Customer::'<Id>k__BackingField'
		IL_0007: ret
	} // end of method Customer::set_Id

	.method public hidebysig specialname 
		instance string get_Name () cil managed 
	{
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.NullableContextAttribute::.ctor(uint8) = (
			01 00 02 00 00
		)
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
			01 00 00 00
		)
		// Method begins at RVA 0x2061
		// Header size: 1
		// Code size: 7 (0x7)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: ldfld string constructor.Customer::'<Name>k__BackingField'
		IL_0006: ret
	} // end of method Customer::get_Name

	.method public hidebysig specialname 
		instance void set_Name (
			string 'value'
		) cil managed 
	{
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.NullableContextAttribute::.ctor(uint8) = (
			01 00 02 00 00
		)
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
			01 00 00 00
		)
		// Method begins at RVA 0x2069
		// Header size: 1
		// Code size: 8 (0x8)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: ldarg.1
		IL_0002: stfld string constructor.Customer::'<Name>k__BackingField'
		IL_0007: ret
	} // end of method Customer::set_Name

	.method public hidebysig specialname 
		instance class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> get_Orders () cil managed 
	{
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
			01 00 00 00
		)
		// Method begins at RVA 0x2072
		// Header size: 1
		// Code size: 7 (0x7)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: ldfld class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> constructor.Customer::'<Orders>k__BackingField'
		IL_0006: ret
	} // end of method Customer::get_Orders

	.method public hidebysig specialname 
		instance void set_Orders (
			class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> 'value'
		) cil managed 
	{
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.CompilerGeneratedAttribute::.ctor() = (
			01 00 00 00
		)
		// Method begins at RVA 0x207a
		// Header size: 1
		// Code size: 8 (0x8)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: ldarg.1
		IL_0002: stfld class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> constructor.Customer::'<Orders>k__BackingField'
		IL_0007: ret
	} // end of method Customer::set_Orders

	.method public hidebysig specialname rtspecialname 
		instance void .ctor () cil managed 
	{
		// Method begins at RVA 0x2083
		// Header size: 1
		// Code size: 19 (0x13)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: newobj instance void class [System.Collections]System.Collections.Generic.List`1<class constructor.Order>::.ctor()
		IL_0006: stfld class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> constructor.Customer::'<Orders>k__BackingField'
		IL_000b: ldarg.0
		IL_000c: call instance void [System.Runtime]System.Object::.ctor()
		IL_0011: nop
		IL_0012: ret
	} // end of method Customer::.ctor

	// Properties
	.property instance int32 Id()
	{
		.get instance int32 constructor.Customer::get_Id()
		.set instance void constructor.Customer::set_Id(int32)
	}
	.property instance string Name()
	{
		.custom instance void [System.Runtime]System.Runtime.CompilerServices.NullableAttribute::.ctor(uint8) = (
			01 00 02 00 00
		)
		.get instance string constructor.Customer::get_Name()
		.set instance void constructor.Customer::set_Name(string)
	}
	.property instance class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> Orders()
	{
		.get instance class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> constructor.Customer::get_Orders()
		.set instance void constructor.Customer::set_Orders(class [System.Collections]System.Collections.Generic.List`1<class constructor.Order>)
	}

} // end of class constructor.Customer

.class public auto ansi beforefieldinit constructor.Order
	extends [System.Runtime]System.Object
{
	// Methods
	.method public hidebysig specialname rtspecialname 
		instance void .ctor () cil managed 
	{
		// Method begins at RVA 0x2097
		// Header size: 1
		// Code size: 8 (0x8)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: call instance void [System.Runtime]System.Object::.ctor()
		IL_0006: nop
		IL_0007: ret
	} // end of method Order::.ctor

} // end of class constructor.Order

.class public auto ansi beforefieldinit constructor.Program
	extends [System.Runtime]System.Object
{
	// Methods
	.method public hidebysig static 
		void Main () cil managed 
	{
		// Method begins at RVA 0x20a0
		// Header size: 12
		// Code size: 70 (0x46)
		.maxstack 3
		.entrypoint
		.locals init (
			[0] class constructor.Customer,
			[1] class constructor.Order
		)

		IL_0000: nop
		IL_0001: ldstr "Hello, World!"
		IL_0006: call void [System.Console]System.Console::WriteLine(string)
		IL_000b: nop
		IL_000c: newobj instance void constructor.Customer::.ctor()
		IL_0011: dup
		IL_0012: ldc.i4.1
		IL_0013: callvirt instance void constructor.Customer::set_Id(int32)
		IL_0018: nop
		IL_0019: stloc.0
		IL_001a: ldloc.0
		IL_001b: callvirt instance int32 constructor.Customer::get_Id()
		IL_0020: call void [System.Console]System.Console::WriteLine(int32)
		IL_0025: nop
		IL_0026: ldloc.0
		IL_0027: callvirt instance string constructor.Customer::get_Name()
		IL_002c: call void [System.Console]System.Console::WriteLine(string)
		IL_0031: nop
		IL_0032: newobj instance void constructor.Order::.ctor()
		IL_0037: stloc.1
		IL_0038: ldloc.0
		IL_0039: callvirt instance class [System.Collections]System.Collections.Generic.List`1<class constructor.Order> constructor.Customer::get_Orders()
		IL_003e: ldloc.1
		IL_003f: callvirt instance void class [System.Collections]System.Collections.Generic.List`1<class constructor.Order>::Add(!0)
		IL_0044: nop
		IL_0045: ret
	} // end of method Program::Main

	.method public hidebysig specialname rtspecialname 
		instance void .ctor () cil managed 
	{
		// Method begins at RVA 0x20f2
		// Header size: 1
		// Code size: 8 (0x8)
		.maxstack 8

		IL_0000: ldarg.0
		IL_0001: call instance void [System.Runtime]System.Object::.ctor()
		IL_0006: nop
		IL_0007: ret
	} // end of method Program::.ctor

} // end of class constructor.Program

