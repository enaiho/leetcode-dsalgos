

import SingleLinkedList from "./SLL";


let sl1 = new SingleLinkedList();

sl1.insert(1);
sl1.insert(0);
sl1.insert(1);
const getDecimalValue = (head) =>{

    let s = "";

    while( head != null ){
        s  = `${s}${head.val}`;
        head = head.next;
    }

    let i = s.length-1;
    let val = 0;


   while(i >= 0){
       val = val + s[i]*Math.pow(2,(s.length-1)-i);
       i--;
   }

   return val;

}


const output = getDecimalValue(sl1.head);
console.log(output);

