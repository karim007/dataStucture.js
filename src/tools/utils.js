class utils{
    max(a, b){
        return a>b?a:b;
    }
    clone(src,target) {
      if(!target)  target = {};
      if(src==null)
        {
          target=null;
        }
        else {
        for (let prop in src) {
          if (src.hasOwnProperty(prop)) {
            target[prop] = src[prop];
          }
        }
      }
        return target;    
      
      }


    cloneNode( target,src, parent, child){
      // the goal of this method is to fake the concept of copying by reference
      // it need to be improved
      if(src==null)
        {
          //how to set null !!
          if(child==='right')
          parent.rightChild=null;
          else if(child==='left')
          parent.leftChild=null;

        }
        else if(target==null)
        {
          if(child==='right')
          parent.rightChild=src;
          else if(child==='left')
          parent.leftChild=src;
        }
        else {
    
          target.rightChild=src.rightChild;
          target.leftChild=src.leftChild;
          target.data=src.data;
          target.heightNode=src.heightNode;
      }
        return target;    
      
      }
      setNoodeToNull(t){
        t.rightChild=null; 
        t.leftChild=null;
        t.data=null;
        t.heightNode=null;
      }
    

}

module.exports=utils