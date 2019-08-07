### Introduction
In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification [https://en.wikipedia.org/wiki/Data_structure].

### Installation
```javascript
npm install datastructure.js
```

### Hash table

In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

In many situations, hash tables turn out to be on average more efficient than search trees or any other table lookup structure. For this reason, they are widely used in many kinds of computer software, particularly for associative arrays, database indexing, caches, and sets [https://en.wikipedia.org/wiki/Hash_table].

#### Example
```javascript
import {hashtable} from 'datastructure.js'
let sizeArray=100;
let h= new hastable(sizeArray);

//add
h.add(100)
h.add(101)
h.add(200)

//find
h.find(100)
//return a node datastucture

//delete
h.delete(100)
```


### Linkedlist

In computer science, a Linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence[https://en.wikipedia.org/wiki/Linked_list].

#### Example should be tested
```javascript
import {linkedList} from 'datastructure.js'
let  lst= new linkedList(100);

//add at the end
 lst.addEnd(55)
 //100, 55
 
 //get last element
 lst.lastElement()
 //55
  
 //get elemeent at position k
 lst.kposition(1)
//66, 100, 55
//100

//get first element
 lst.firstElement()
//66

//delete first
lst.deleteFirst()
//100, 55

//delete info
lst.deleteInfo(55)
//100

//get size
lst.getSize()
//return 0 (100 )

//find
lst.find(100)

//add at position k
let k=1;
let value=10;
lst.addPosition(k, value)
//100, 10

//delete
lst.deleteInfo(100)
//10


//delete
lst.deletePosition(0)
// null
``` 	

### Heap
A heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the heap property: in a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C. In a min heap, the key of P is less than or equal to the key of C. [https://en.wikipedia.org/wiki/Heap_(data_structure)].

#### Example
```javascript
import {hashtable} from 'datastructure.js'
let sizeArray=100;
let h= new hastable(sizeArray);

//add
h.add(100)
h.add(101)
h.add(200)

//find
h.find(100).info

//delete
h.delete(100
```
### AVL
an AVL tree (named after inventors Adelson-Velsky and Landis) is a self-balancing binary search tree. It was the first such data structure to be invented. In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property. Lookup, insertion, and deletion all take O(log n) time in both the average and worst cases, where {\displaystyle n} n is the number of nodes in the tree prior to the operation. Insertions and deletions may require the tree to be rebalanced by one or more tree rotations[https://en.wikipedia.org/wiki/AVL_tree].
#### Example To verify and continue
```javascript
import {avl} from 'datastructure.js'
let avlds= new avl(100);
      
//add
avlds.add(avlds.root, 50)
avlds.add(avlds.root, 200)
avlds.add(avlds.root, 300)
avlds.add(avlds.root, 400)
//left roration

avlds.add(avlds.root, 199)
//double left roration

avlds.add(avlds.root, 20)
avlds.add(avlds.root, 10)
//right rotation

avlds.add(avlds.root, 400)
// left rotation
avlds.add(avlds.root, 199)
// double left roation
avlds.add(avlds.root, 20)
avlds.add(avlds.root, 10)
// right roation

avlds.add(avlds.root, 51)
// double right roation

```
### Binary search tree
Binary search trees (BST), sometimes called ordered or sorted binary trees, are a particular type of container: a data structure that stores "items" (such as numbers, names etc.) in memory. They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name)[https://en.wikipedia.org/wiki/Binary_search_tree].


```javascript
import {bts} from 'datastructure.js'
let binaryTree= new bts(100);

//add
binaryTree.add(44)
binaryTree.add(200)

//find
binaryTree.find(200)
//return a node datastucture

//delete
h.delete(100)
```

### Graph
A graph data structure consists of a finite (and possibly mutable) set of vertices (also called nodes or points), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges (also called links or lines), and for a directed graph are also known as arrows. The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.[https://en.wikipedia.org/wiki/Graph_(abstract_data_type)]

#### Example
Not yet implemented