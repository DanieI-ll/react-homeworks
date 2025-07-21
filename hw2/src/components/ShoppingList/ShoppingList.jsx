function ShoppingList({ items }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>Список покупок пуст</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;
