const palindromes = function (s) {
  const clean = s.toLowerCase().replaceAll(/[^a-z0-9]+/g, '');

  for (let i = 0; i < clean.length / 2; i++) {
    if (clean.charAt(i) !== clean.charAt(clean.length - 1 - i)) return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
