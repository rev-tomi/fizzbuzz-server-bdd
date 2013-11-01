function fizzbuzznum(num) {
  var isFizz = num % 3 == 0;
  var isBuzz = num % 5 == 0;
  if (isFizz && isBuzz) return 'FizzBuzz';
  if (isFizz) return 'Fizz';
  if (isBuzz) return 'Buzz';
  return String(num);
}

function fizzbuzz_general(numbers, printer) {
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    printer(fizzbuzznum(num));
  }
}

module.exports.fizzbuzznum = fizzbuzznum
module.exports.fizzbuzz_general = fizzbuzz_general

function fizzbuzz() {
  var numbers = [];
  for (var i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  printer = function(line) {console.log(line);};
  fizzbuzz_general(numbers, printer);
}

