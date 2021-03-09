---
title: Linked List
order: 4
---

- A data structure where each node holds data and a pointer to the next node in the list
- Differs from array in that, it has a non contiguous memory allocation

```js
function node(data) {
  return {
    data,
    link: null,
  };
}
```
