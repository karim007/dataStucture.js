const linkedList= require("../dataStructures/linkedList")

class graph 
{ 
    constructor(v, adj) 
    { 
        this.value = v; 
        this.adjListArray=[adj];
    }
    
    addEdge( src, dest) 
    { 
        this.adjListArray[src].add(dest); 
        this.adjListArray[dest].add(src); 

        if(this.contains(src) && graph.contains(dest)){
            this.adjListArray[src].edges[dest] = true;
            this.adjListArray[dest].edges[src] = true;
      }
    } 

    addVertex(node){
        this.adjListArray[node] = {edges:{}};
    }

    contains (node)  {
        return !!this.adjListArray[node];
    }


}

module.exports= graph;


// https://www.youtube.com/watch?v=piBq7VD0ZSo&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=4

// https://www.youtube.com/watch?v=goUlyp4rwiU&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=14