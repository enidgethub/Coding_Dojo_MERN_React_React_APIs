

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        // console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );



function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        //tossCoin
        

        while(attempts < 100 && headsCount < 5){
            let result = tossCoin();
            if(result === "heads"){
                headsCount++;
                attempts++;
            }
            else{
                headsCount = 0;
                attempts++;
            }
            if(headsCount >= 5){
                resolve(`Promise Completed after ${attempts} tries`)
            }
            else if(attempts > 99){
                reject(`Promise failed after ${attempts} tries`)
            }
        }


        

        //if condition then resolve

        



    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );

