

const firstUniqueChar = (s) => {


    let non_char = "";
    const set = {};
    for( const char of s ){

        if( char in set )set[char] = Number.parseInt(set[char])+1
        else set[char] = 1;
    }

    for(const key in set){
        if( set[key] === 1 ) {non_char = key; break;}
    }

    for(let i=0; i<s.length; i++){

        if( s[i] === non_char ) return i;

    }

    return -1;

}

const output = firstUniqueChar("leetcode");
console.log(output);
