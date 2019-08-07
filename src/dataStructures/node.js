const utils= require("../tools/utils")
let _utils= new utils();
class node {

    constructor(d, left=null, right=null){
        this.value=d;
        this.left=left;
        this.right=right;
        this.height=0;
        this.balance=0;
    }


    get leftChild() {
        return this.left
    }
    
    set leftChild (node) {
        this.left=node;
    } 

    get bal() {
        let val= this.value;
        if(this.isLeaf()) return 0;
        else {
            if(this.left==null) return this.right.height;
           else if(this.right==null) return -this.left.height;
            else{
                return this.right.height- this.left.height;
            }
        }
        return this.balance
    }

    set bal (b) {
        this.balance=b;
    }

    get rightChild() {
        return this.right

    }
    set rightChild (node) {
        this.right=node;
    }

    get heightNode() {
        return this.height

    }
    set heightNode (h) {
        this.height=h;
    }

    get data() {
        return this.value

    }
    set data (d) {
        this.value=d;
    }

    isLeaf(){
         let bool= this.right==null && this.left==null;
         return bool;
    }

     setHeight(){
        if(this.isLeaf()) this.heightNode=1;
        else{
            if(this.leftChild==null){
                this.heightNode=1+this.rightChild.heightNode
            }
            else  if(this.rightChild==null){
                this.heightNode=1+this.leftChild.heightNode
         }
            else{
                this.heightNode= _utils.max(this.leftChild.heightNode, this.rightChild.heightNode)+1;
            }
        } 
     }

}



//es5
module.exports=node;

// //es6
// export default node ;