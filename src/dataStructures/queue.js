class queue{

    constructor(){
    this.datas=[];
    }
    print(){
        console.log(this.datas)
    }
    enqueue(e){
        this.datas.push(e);
    }
    dequeue(){
        return this.datas.shift();
    }
    front()  {return this.datas[0];}
    size() {return this.datas.length}
    isEmpty(){return this.datas.length===0}
}

module.exports=queue;