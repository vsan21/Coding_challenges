// Question 3 -- changePossibilities(target ,numbers): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

    // Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

    // Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

    // 1¢, 1¢, 1¢, 1¢
    // 1¢, 1¢, 2¢
    // 1¢, 3¢
    // 2¢, 2¢

function changePossibilities(target, numbers) {
    let numberOfWays = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length + 1; j++) {
            //first getting the most simplest combinations 
            if ((numbers[i] + numbers[j]) === target && numbers[j] !== 1) {
                numberOfWays++;
                console.log(`${numbers[i]} + ${numbers[j]}`);

                //then further breaking down the numbers
                if (numbers[j] % 2 === 0) {
                    let sum = `${numbers[i]}`;
                    for (let k = 0; k < numbers[j]; k++) {
                        sum += ` + ${(numbers[j] / 2)}`;
                    }
                    console.log(`split 2+2: ${sum}`)
                    numberOfWays++;

                } else {
                    let sum = `${numbers[i]}`;
                    for (let k = 0; k < numbers[j]; k++) {
                        sum += ` + ${(numbers[j] - 1) / 2}`
                    }
                    console.log(`split 1+3: ${sum}`);
                    numberOfWays++;
                }
            }
        }
    }
    return numberOfWays;
}

changePossibilities(4, [1, 2, 3]);