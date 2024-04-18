// See https://aka.ms/new-console-template for more information
public class Stack
{
    private Object items { get; set; } = new Object();

    public void Push(object obj)
    {
        if (obj == null)
        {
            throw new InvalidOperationException("Object must not be null");
        }
        object value = items.Push(obj);
    }

    public void Pop()
    {
        if (items.Count == 0)
        {
            throw new InvalidOperationException("Stack is empty");
        }
        items.RemoveAt(items.Count - 1);
    }

    public void Clear()
    {
        items.Clear();
    }
}
