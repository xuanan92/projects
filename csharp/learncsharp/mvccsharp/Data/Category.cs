using System;
using System.Collections.Generic;

namespace mvccsharp.Data;

public partial class Category
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int? DisplayOrder { get; set; }

    public DateTime CreatedDateTime { get; set; }
}
