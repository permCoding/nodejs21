// второй синтаксис lodash - split map filter reduce parseInt

const _ = require('lodash');


function _split() {
    let line = '2,    3, 8,9,10, 1, 4,2, 12, 1';
    console.log(
        _(line)
            .split(/,\s*/, 7)
            .map(_.parseInt)
            .filter(x => x%2 == 0)
            .join(', ')
    );
    let acc = _(line)
        .split(/,\s*/, 7)
        .map(_.parseInt)
        .filter(x => x%2 == 0)
        .reduce((a,b) => a+b);
    console.log(acc);
}

let print = x => process.stdout.write(`${x} `); // выводит без переноса

function _map() {
    let arr_lines = ['12', '8', '8.2', '8.3', '10'];
    _(arr_lines)
        .map(_.toNumber)
        .sortBy()
        .reverse()
        .forEach(print);
}


function _filter() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check_odd = x => x%2 != 0;
    
    let res1 = _(arr)
        .filter(check_odd); // это генератор
    console.log(res1);

    let res2 = _(arr)
        .filter(check_odd)
        .toString(); // приведём к строке
    console.log(res2);
}


function _reduce() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let add_odd = (acc, next) => next%2 != 0? acc + next: acc;
    let acc_odd = _.reduce(arr, add_odd, 0);
    console.log(acc_odd);

    function reduce(array, func, acc) {
        let i = -1;
        if (!acc && array.length>0) {
            acc = array[++i];
        }
        while (++i < array.length) {
            acc = func(acc, array[i])
        }
        return acc;
    }    
    console.log(reduce(arr, (a, b) => b%2? a+b: a, 0)); // свой метод reduce
}


// _split();

// _map();

_filter();

// _reduce();
