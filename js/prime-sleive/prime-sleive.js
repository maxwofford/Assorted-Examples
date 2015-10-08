// Find primes between 1 and x using a prime sleive
function primesFromOneTo(num) {

  // Make a list of potential primes
  var primes = [];
  for (var a = 0; a < num; a++) {
    primes[a] = a + 1;
  }

  // Iterate through the array and check if higher numbers should be taken out
  for (var b = 0; true; b++) {
    // Stop if we've reached the end of the array
    if (b > primes.length) {
      break;
    }

    // Denominator is the current prime we are testing everything against
    denominator = primes[b];
    // Go through the array starting after the denominator and remove anything
    // that modulus denominator === 0
    for (var c = b + 1; c < primes.length; c++) {
      if (primes[c] % denominator === 0) {
        primes.splice(c, 1)
      }
    }
  }
  return primes;
}
