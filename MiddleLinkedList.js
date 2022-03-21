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


let sl1 = new SingleLinkedList();
//sl1.insert(6);
sl1.insert(5);
sl1.insert(4);
sl1.insert(3);
sl1.insert(2);
sl1.insert(1);

const middleNode = function(head) {


    let slow = head;
    while( head.next != null ){

        slow = slow.next;
        if( head.next.next !== null  ) head = head.next.next;
        else break;


    }


    return slow;

/*
    const mid = Math.floor(nums/2);
    while( temp != null && count < mid ){

        temp = temp.next;
        count++;

    }

    return temp;

    */

};


const output = middleNode(sl1.head);
console.log(output);









