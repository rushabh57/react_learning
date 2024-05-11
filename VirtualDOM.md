==========================
Method

- createRoot
  : Create DOM

- VDOM
  : Create DOM

- FIBER
  : key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

- reconciliation
  : The algorithm React uses to diff one tree with another to determine which parts need to be changed.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

- why key's use
  : Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

- FIBER ?
  : We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about.
