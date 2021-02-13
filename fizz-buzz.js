function calFizzBuzz(n){
    let ret = '';
    
    if(n % 3 == 0)
        ret += 'fizz';

    if(n % 5 == 0)
        ret += 'buzz';

    if(n % 3 != 0 && n % 5 != 0)
        ret += `${n}`;

    return ret;
}

module.exports = calFizzBuzz;