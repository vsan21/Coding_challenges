// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. 

    //For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

//Input: two strings
    // s = 'good', t = 'odg'
//Output: string of s (sorted by the order in which they appear in string t)
    //  'oodg'

//need to know the order of t (index)
  //from each given index is a specific letter 
  //for each letter of t, check s entirely 
  //each time it exists, add to new string
  //repeat for each letter of t  

function sortByStrings(s, t) {
    let newlyOrderedString = '';

    for (let letterOfT of t) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === letterOfT) {
                newlyOrderedString += s[i];
            }
        }
    }
    return newlyOrderedString;
}

sortByStrings('good', 'odg');
sortByStrings('weather', 'therapyw');