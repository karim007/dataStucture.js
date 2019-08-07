class linkedList {
    constructor(data, nextElem=null){
        if(data==null) {
             throw  ReferenceError()
             
        }
        
     this.info = data;
     this.next=nextElem ;
    }

  
    getSize(size=1){
         if(this.next==null){
            return size;
        } 
        else{
            return this.next.getSize(++size);
        } 
    }

    emptyList()
    {
     return new linkedList() ;
    }

    isEmpty(l){
     return l===null?true:false;
    }

    firstElement(){
    return this ;
    }

    lastElement(){
    
    let p=this;
    if (this.isEmpty(p))return null;
    else {
        while(p.next!==null){
         p = p.next ;
        }
     }
     return p ;
    }

    addTop(i){  
        let p = new linkedList(i, this) ;
        return p;
    }
    addEnd( i){
        if(this.isEmpty()) {
            return this.addTop( i)
        }
        
        else{
            //issue
            let l = this.lastElement();
            l.next = new linkedList(i);
            return  l;
        }
        
    }

    kposition( k)
    {
        if(k>this.getSize()) {            
            throw new ReferenceError("")
        }
        let i = 0 ;
        let p= this;
        while(p!== null && i < k){
            i++;
            p = p.next ;
        }
            return p;

    }

    addPosition(k,  i){
        let  p, q;
        if(k === 0) return this.addTop(i) ;
        else {
            p = this.next.addPosition(k-1, i) ;
            if(p !== null) {
                q = new linkedList(i) ;
                q.info = i ;
                q.next = p.next ;
                p.next = q ;
                return p;
            }
            else {
                console.log("error there is not "+k+" elements") ;
            
            }
        

        }
    }

    deleteFirst(){

    if(this.isEmpty()) {
        console.log("error: the list is empty")
    }
    else{

        let l = this.next ;

        return l ;
    }
    }

    deletePosition( k){
        let  p, q ;
        if( k === 0) {
            return this.deleteFirst() ;
        }
        else {
            p =this.kposition(this,k-1) ;
            if(p!= null) {
                q = p.next ;
                if(q != null){
                    p.next = q.next ;
                    //  delete q ;
                    return p;
                }
                else {
                    console.log("error: ") ;
                    }
            }
            
            else{
            console.log("error:")                
                }
            }
        }

    find(i){

        let p= this;
        while(p!= null && p.info!==i){
            p = p.next ;
        }
        return p ;
    }

    deleteInfo(i){
    let q, p =this;
    while(p != null &&  p.info!= i){
        q = p ;
        p = p.next ;
    }
        if(p != null) {
            if(p === this){
                return this.deleteFirst() ;
            }
            else {
                q.next = p.next ;
                return q;
                // delete p ;
            }
        }
        else {
            console.log("error:")
        }

    }
    }




module.exports=linkedList