
// still work in progress



const combinationSum = (candidates,target) => {

    let idx = 0;
    let [left] = [0];
    const set = new Set();
    let current_running_sum = 0;
    let arr = [];
    const output = [];
    let complement = 0;

    for(const candidate of candidates) set.add(candidate);

    for(let i=0; i<candidates.length; i++){

        if( candidates[i] > target ) continue;

        current_running_sum = current_running_sum + candidates[i];
        let temp = target;

        if(temp%candidates[i] === 0 &&  temp-candidates[i] > 1 ){

            arr = new Array(temp/candidates[i]);
            arr.fill(candidates[i]);
        }


        if( arr.length > 0 ) {output.push(arr); arr = [];  }

        while( current_running_sum > target ){

            current_running_sum = current_running_sum - candidates[left];
            left++;
        }

        complement = target - current_running_sum;

        if( set.has(complement) || complement === 0  ){

            arr = [];
            idx = left;
            if( complement > 0 ) arr.push(complement);
            while(idx<=i){

                arr.push(candidates[idx]);
                idx++;
            }

            output.push(arr); arr = [];
        }

    }

    return output;
}


const output = combinationSum([1,2],3);
console.log(output);
