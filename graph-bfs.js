// Breadth first search
//const LinkedList = require("./singlely-linked-list");
class Graph {
  constructor(vertex) {
    this.vertex = vertex;
    this.adj = [];
    this.createGraph();
  }
  createGraph() {
    for (let col = 0; col < this.vertex; col++) {
      let newRow = [];
      for (let row = 0; row < this.vertex; row++) {
        newRow.push(0);
      }
      this.adj.push(newRow);
    }
  }
  addEdge(v, w) {
    this.adj[v][w] = 1;
  }
  bfs(start) {
    // Create a queue for BFS
    let queue = [];
    // Mark all the vertices as not visited(By default
    // set as false)
    let visited = new Array(this.vertex).fill(0);
    // Mark the current node as visited and enqueue it
    visited[start] = 1;
    queue.push(start);
    while (queue.length) {
      // Dequeue a vertex from queue and print it
      const visitedVertex = queue.shift(start);
      console.log(visitedVertex + " ");
      // Get all adjacent vertices of the dequeued vertex s
      // If a adjacent has not been visited, then mark it
      // visited and enqueue it
      let adjArray = Object.keys(this.adj[visitedVertex]);
      let n = 0;
      while (n < adjArray.length) {
        const next = Number(adjArray[n]);
        if (!visited[next]) {
          visited[next] = 1;
          queue.push(next);
        }
        n++;
      }
    }
  }
}
const g = new Graph(4);
// 0, 1, 2, 3

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
g.bfs(2);
//
//console.log(g.bfs(2));



