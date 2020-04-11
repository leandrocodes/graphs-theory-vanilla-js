class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjMatrix = [];
        for (var i = 0;i < noOfVertices;i++) {
            this.AdjMatrix[i] = [];
            for (var j = 0;j < noOfVertices;j++) {
                this.AdjMatrix[i][j] = 0;
            }
        }
    }

    addEdge(u, v, w) {
        this.AdjMatrix[u][v] = w;
        this.AdjMatrix[v][u] = w;
    }

    getVertices() {
        var nodes = [];

        for (var i in this.AdjMatrix) {
            var max = 0;
            for (var v of this.AdjMatrix[i]) {
                if (v > max) max = v;
            }
            if (max > 0) {
                nodes.push({
                    id: i,
                    label: String(i)
                });
            }
        }

        return nodes;
    }

    getEdges() {
        var edges = [];

        var clone = [];

        for (var i = 0;i < this.AdjMatrix.length;i++) {
            clone[i] = this.AdjMatrix[i].slice();
        }

        for (var v = 0;v < this.noOfVertices;v++) {
            for (var w = 0;w < this.noOfVertices;w++) {
                if (clone[v][w] != 0) {
                    edges.push({
                        from: v,
                        to: w,
                        label: String(clone[v][w])
                    });
                    clone[w][v] = 0;
                }
            }
        }

        return edges;
    }

    getMSTEdges(parent) {
        var edges = [];

        for (var i = 0;i < this.noOfVertices;i++) if (parent[i] != -1) {
            edges.push({
                from: parent[i],
                to: i,
                label: String(this.AdjMatrix[i][parent[i]])
            });
        }

        return edges;
    }

    minKey(key, mstSet) {
        var min = Number.MAX_SAFE_INTEGER,
            min_index = -1;

        for (var v = 0;v < this.noOfVertices;v++) if (mstSet[v] == false && key[v] < min) {
            min = key[v];
            min_index = v;
        }

        return min_index;
    }

    primMST(graph, startVertex) {
        var parent = [];

        for (var p in parent) parent[p] = -1;

        var key = [];

        var mstSet = [];

        for (var i = 0;i < this.noOfVertices;i++) {
            key[i] = Number.MAX_SAFE_INTEGER;
            mstSet[i] = false;
        }

        key[startVertex] = 0;
        parent[startVertex] = -1;

        for (var count = 0;count < this.noOfVertices - 1;count++) {
            var u = this.minKey(key, mstSet);

            if (u == -1) {
                break;
            }

            mstSet[u] = true;

            for (var v = 0;v < this.noOfVertices;v++) if (graph[u][v] != 0 && mstSet[v] == false && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }

        return parent;
    }
}