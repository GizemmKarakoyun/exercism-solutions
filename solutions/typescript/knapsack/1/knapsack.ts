type Item = {
  weight: number;
  value: number;
};

export function maximumValue({
  maximumWeight,
  items,
}: {
  maximumWeight: number;
  items: Item[];
}): number {
  return calcMax(0, 0, maximumWeight, items);
}

const calcMax = (
  value: number,
  weight: number,
  max: number,
  items: Item[]
): number => {
  if (items.length === 0) return value;

  const [nextItem, ...remainingItems] = items;
  const canTake = weight + nextItem.weight <= max;
  if (!canTake) return calcMax(value, weight, max, remainingItems);

  return Math.max(
    calcMax(value, weight, max, remainingItems),
    calcMax(
      value + nextItem.value,
      weight + nextItem.weight,
      max,
      remainingItems
    )
  );
};