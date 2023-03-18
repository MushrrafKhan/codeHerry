console.log("This is Module");

function average(array){
    let sum = 0;
    console.log('---' + array);
    array.forEach((element,ind, array) => {
        sum += element;
        console.log(('For Testing Purpose indexNo = ' +ind +", ArrayValues = " + array));
    });
    return sum
}
    

module.exports = {
    avg: average,
    name: "Mushrraf",
    repo: "GitHub"
}

