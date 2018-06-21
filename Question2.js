// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

    // The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

    // For s = "4[ab]", the output should be decodeString(s) = "abababab" 
    // For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s) {
    let repeatedStr = '';

    // checking for multiple k values (i.e. "2[b3[a]]")
    if (s.match(/[0-9]/g).length > 1) {
        //takes off the front and end brackets 
        let splitFrontBracket = s.split("[").join("");
        let splitEndBracket = splitFrontBracket.split("]").join("");

        //split all numbers and letters --> ['2', 'b', '3', 'a']
        let splitArr = splitEndBracket.split("");

        for (let i = 0; i < splitArr[0]; i++) {
            repeatedStr += (splitArr[1] + splitArr[splitArr.length - 1].repeat(splitArr[splitArr.length - 2]));
        }

        //not single k values (i.e. "4[ab]")
    } else {
        let splitArr = s.split(/[[\]]/g);
        repeatedStr = splitArr[1].repeat(splitArr[0]);
    }
    return repeatedStr;
}

decodeString("4[ab]");
decodeString("2[b3[a]]");