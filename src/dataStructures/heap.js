class heap{
    constructor(){
        this.vector=[]
        //limit of heap
        this.n=0;
    }

    get max(){
        if(this.n>0)return this.vector[1]
        else return null;
    }

    get v(){
        return this.vector;
    }


    add(k){

       let i=++this.n;

        while (i > 1 && this.vector[this.father(i)] < k){
            this.vector[i] = this.vector[this.father(i)]
            i = this.father(i)
        }

        this.vector[i] = k;
    }
    
    removeMax(k){
        if (this.vector.length>0)
        {
            let max = this.vector[1]
            this.vector[1] = this.vector[this.n]
            this.n=this.n-1;
            this.heapify(1)
            return max;
        }
            else
            return null;
    }
    
    father(i){
        return Math.floor(i/2)
    }
    
    heapify(i){
        let l= this.left(i)
        let r= this.right(i)


        let largest;
        if (l <= this.n && this.vector[l] > this.vector[i]) {
           largest = l;
        }
        else{
            largest = i
        }
        if (r <= this.n && this.vector[r] > this.vector[largest]){
             largest = r
        }
     
        if (i != largest) {
            this.exchange(i,largest)
            this.heapify(largest)

        }
    }

    exchange( src, target){
        let temp=this.vector[src];
        this.vector[src]= this.vector[target]
        this.vector[target]=temp;
    }
    left(i){
        return 2*i;
    }   
    right(i){
        return 2*i+1;
    }
}

module.exports=heap