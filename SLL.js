class Node{


    constructor(val){
        this.val = val;
        this.next = null;
    }


}
class SingleLinkedList{

    constructor(){

        this.head = null;
        this.size = 0;

    }

    insert(value){


        if( this.head === null ){
            this.head = new Node(value);
        }
        else{

            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;

        }

        this.size++;
    }

}



module.exports.SLL = SingleLinkedList;


