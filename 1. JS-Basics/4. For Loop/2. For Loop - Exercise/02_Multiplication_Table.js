function multiplicationTable(input) {

    let num = Number(input[0]);
    
    for (let factor = 1; factor <= 10; factor++) {
        let result = factor * num;
        console.log(`${factor} * ${num} = ${result}`);

    }

}
multiplicationTable(["5"]);