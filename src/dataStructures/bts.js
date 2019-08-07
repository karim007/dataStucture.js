
const node= require("../dataStructures/node")
// import  "../model/node";

class bts{
    constructor(data){
        if(data==null) throw  Error("Y could not instatiate a bts without parameter")

        this.root=new node(data)
    }

    add(currentNode, data){

        if( currentNode === null){
            currentNode= new node(data)
        }
        
        else if(data<=currentNode.data){
            currentNode.leftChild = this.add(currentNode.leftChild, data) 
        }

        else {
            currentNode.rightChild = this.add(currentNode.rightChild, data)      
        }
        currentNode.setHeight(currentNode)
        return currentNode;
  
    }
    remove(currentNode, data)
    {
        if(currentNode===null) {
            return currentNode;
        }
        
       else if(nocurrentNodede.data===data)
        {
            if(currentNode.left!==null)
            currentNode=currentNode.left;
            else return currentNode= currentNode.right;
            
        }
        else if(data<=currentNode.data){
            currentNode.left=remove(currentNode.left, data) 

        }
        else {
            currentNode.right= remove(currentNode.right, data)

        }
        currentNode.setHeight()
        return currentNode;
  
    }
   
}

module.exports=bts;

