
const node= require("../dataStructures/node")
const utils= require("../tools/utils")
// import  "../model/node";
let _utils= new utils();

class avl {
    constructor(data){
        if(data==null) throw  Error("Y could not instatiate an avl without parameter")

        this.root=new node(data)
    }

    //t is the current root node
    add(t, data){

        //base case
        if( t === null){
            t= new node(data)
        }
        
        //recursive cases
        else if(data<=t.data){
            t.leftChild = this.add(t.leftChild, data) 
        }

        else {
            t.rightChild = this.add(t.rightChild, data)      
        }
        this.equilibrate(t)
        return t;
  
    }

    equilibrate(t){
        if(t.bal==2){
            if(t.rightChild.bal>=0){
                this.leftRotation(t);
            }
            else {
                this.rightRotation(t.rightChild)
                this.leftRotation(t)
            }
        }
        else  if(t.bal==-2){
                if(t.leftChild.bal<=0){
                    this.rightRotation(t);
                }
                else {
                    this.leftRotation(t.leftChild)
                    this.rightRotation(t)
                }
            
        }
        else {
            t.setHeight()
        }
    }
  
    remove(t, data)
    {
       if(t!==null)
       {

            //recusive case
            if(data<t.data)
            {
                t.leftChild= this.remove(t.leftChild, data)
                this.equilibrate(t)
                return t;
            }
            else if( data>t.data) {
                t.rightChild=  this.remove(t.rightChild, data)
                this.equilibrate(t)
                return t;
            }
            //base case
            else{
                if(t.isLeaf()){
                return  null;
                }
                else if(t.leftChild===null)
                {
                 return  _utils.cloneNode(t, t.rightChild)
                }
                else if(t.rightChild===null)
                {
                  return  _utils.cloneNode(t, t.leftChild)
                }
                else{
                    t.data= this.deleteMinAvl(t.rightChild)
                    this.equilibrate(t)
                    return t;
                }
            }

       }
       else return null;
  
    }
    
    deleteMinAvl(t)
    {
        let min;
        if(t.isLeaf()){
             min =t.data;
            _utils.setNoodeToNull(t);

        }
       else if(t.leftChild===null){
            
             min= t.data;
            _utils.cloneNode(t, t.rightChild)
        }
        else {
             min= this.deleteMinAvl(t.leftChild);
            this.equilibrate(t)
        }
        return min;

    }

    rightRotation(t){

        let temp=  new node()
        _utils.cloneNode( temp, t);

       _utils.cloneNode(t, t.leftChild);

       _utils.cloneNode(temp.leftChild,t.rightChild,  temp,'left');

       _utils.cloneNode(t.rightChild, temp, t, 'right');
       
        t.rightChild.setHeight()
        t.setHeight()



    }

    leftRotation(t){
        let temp= new node()
        _utils.cloneNode( temp, t);

       _utils.cloneNode(t, t.rightChild, );
       _utils.cloneNode(temp.rightChild,t.leftChild,  temp,'right');
       _utils.cloneNode(t.leftChild, temp, t, 'left');

       t.leftChild.setHeight()
        t.setHeight()
        
    }
    
}

module.exports=avl;

//test case
//test balance
//test different rotations