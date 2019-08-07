let list = require("../dataStructures/linkedList")

class hashtable {
    constructor(sizeVector=100){
        this.vector=[]
        this.sizeVector=sizeVector;
        this.a= (Math.sqrt(2)-1)/2
    }


    add(i){
        let k= this.h(i);
      
        let lst;
        if(  this.vector[k]==null){
            lst= new list(i)
        } 
        else{
            lst= this.vector[k];
            lst.addEnd(i);
        }
        this.vector[k]=lst;
    
    }
    delete(i){
        let k= this.h(i);
        if(this.vector[k]==null)return null;
        else 
            {
                let lst= this.vector[k];                
                if(lst.find(i)) {                
                    lst=lst.deleteInfo(i);
                    this.vector[k]=lst;
                    return i;
                }
               else return null;
            
            }

    }
    find(i){
        return this.vector[this.h(i)].find(100);
    }

    h(k){
        return Math.round(this.a * k) % this.sizeVector;
    }

    v(i){
        return this.vector[this.h(i)];
    }

}

module.exports=hashtable;