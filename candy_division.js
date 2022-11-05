const candy_division = (n) =>{
    let numOfFriends = []
    for(let x=0;x<=n;x++){        
        if((n / (x+1)) % 1 === 0){
            numOfFriends.push(x);
        }
    }
return numOfFriends;
}

console.log(candy_division(30))
console.log(candy_division(25))