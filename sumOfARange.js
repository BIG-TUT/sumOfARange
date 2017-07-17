var range = function range (start, end, step) {
        var isDecrementing = step < 0,    //make sure isDecrementing is calculated before the value of step is changed
            step = Math.abs(step || 1),
            resultSequence = [],
            currentTerm;
        if (isDecrementing) {
            for (currentTerm = start; currentTerm >= end; currentTerm -= step) {
                resultSequence.push(currentTerm);
            };
        } else {
            for (currentTerm = start; currentTerm <= end; currentTerm += step) {
                resultSequence.push(currentTerm);
            };

        };
        return resultSequence;
    },
    sum = function sum (sequence) {
        return sequence.reduce(function (currentTerm, nextTerm) {
            return currentTerm + nextTerm;
        });
    };
console.log("The result of console.log(sum(range(1, 10))) is: " + sum(range(1, 10)));
console.log("The result of console.log(range(5, 2, -1)) is: " + range(5, 2, -1));
console.log("The result of console.log(range(1, 10, 2)) is: " + range(1, 10, 2));

