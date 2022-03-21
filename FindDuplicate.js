

const findDuplicate = (nums) => {


    const length = nums.length;
    let temp = Number.POSITIVE_INFINITY;


    for(let i=0; i<length; i++){

        if( length-nums[i] === temp ) return nums[i];
        temp = length-nums[i]


    }



}



const output = findDuplicate([3,1,3,4,2]);
console.log(output);
