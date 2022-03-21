


const compareSet = (set1,set2) => {

    const [l1,l2] = [Object.keys(set1).length,Object.keys(set2).length];
    if( l1 != l2 ) return false;

    for( const char in set1  ){
        if( !(char in set2) || set1[char] !== set2[char] ) return  false;
    }

    return true;

}

const generateSet = (s,left,right) => {

    const set = {};
    for( let i=left; i<=right; i++ ){

        if( s[i] in set ) set[s[i]] = Number.parseInt(set[s[i]])+1
        else set[s[i]] = 1;
    }

    return set;

}



const checkInclusion = (s1,s2) => {


    if( s1.length > s2.length ) return false;


    let [left,right] = [0,s1.length-1];
    const set1 = generateSet(s1,0,right);
    let set2 = {};


    while(right < s2.length){

        set2 = generateSet(s2,left,right);
        let compare = compareSet( set1,set2 );
        if( compare === true ) return true;

        left++;
        right++;

    }

    return false;

}


const output = checkInclusion("ab","eidboaoo");
console.log(output);
