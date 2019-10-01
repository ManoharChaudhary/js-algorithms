
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, 
// we generate the following sequence:
// 15 -> 46 -> 23 -> 79 -> 238 -> 119 -> 358 -> 179->538->269 
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence 
// (starting at 13 and finishing at 1) contains 10 terms.
//  Although it has not been proved yet (Collatz Problem), 
//  it is thought that all starting numbers finish at 1.

// Which starting number, under one million, 
// produces the longest chain?

// NOTE: Once the chain starts the terms are allowed 
// to go above one million.
function findLongestCollatzSequence(limit) {
    let maxSequenceTerms = 10; // intial max sequence terms
    let startSequence = 13; // start of sequence
    let map = new Map();
    map.set(startSequence, maxSequenceTerms);
    for (let i = 14; i < limit; i++) {
        let currentMax = countCollatzSequence(i);
        if (maxSequenceTerms < currentMax) {
            maxSequenceTerms = currentMax;
            startSequence = i;
            map.set(i, maxSequenceTerms);
        }
    }
    // console.log(countCollatzSequence(13));
    return { maxSequenceTerms, startSequence }


    function countCollatzSequence(num) {
        // count varible is length of collatz sequence
        let count = 1;
        // run loop while num is greater than 1
        while (num > 1) {
            // if num is even then divide num by 2 
            if (map.has(num)) {
               // console.log('countBefore', count);
                count += map.get(num);
                // console.log('num', num)
                // console.log('countAfter', count)
                break;
            }
            if (num % 2 == 0) {
                num = num / 2;
            }
            // if num is odd then multiply num by 3 + 1
            else {
                num = num * 3 + 1;
            }
            //   console.log(num);
            count++;
        }
        return count;
    }
}
//{ maxSequenceTerms: 118, startSequence: 97 }
console.log(findLongestCollatzSequence(1000000))