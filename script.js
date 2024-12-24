//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);

  return uniqueSorted.length < 2 ? -Infinity : uniqueSorted[1];
}