# DSA Complexity Cheatsheet (JavaScript)

## Arrays
- Scan / loop: O(n)
- Index access `arr[i]`: O(1)
- Push / pop (end): O(1) amortized
- Shift / unshift (front): O(n)
- `includes`, `indexOf`: O(n)
- Sort: O(n log n)

## Map / Set
- `set`, `get`, `has`, `delete`: expected O(1)
- Worst case can degrade (ignore unless asked)

## Objects (`{}`)
- Property read/write: expected O(1)

## Quick picks
- “Seen before?” -> Set
- “Count frequency” -> Map
- “Need order / index” -> Array