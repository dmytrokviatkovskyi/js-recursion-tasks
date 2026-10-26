// Задача 1. Від 1 до n
function print1ToN(n) {
  // Base case: stop when n reaches 0
  if (n <= 0) return;
  
  // Recursively process smaller numbers first so they print in ascending order
  print1ToN(n - 1);
  
  // Print current number followed by space
  process.stdout.write(n + " ");
}

// Задача 2. Від A до B
function printAtoB(a, b) {
  // Print current value of A
  process.stdout.write(a + " ");
  
  // Base case: stop when A equals B
  if (a === b) return;
  
  // Step towards B depending on whether A < B or A > B
  if (a < b) {
    printAtoB(a + 1, b);
  } else {
    printAtoB(a - 1, b);
  }
}

// Задача 3. Точна степінь двійки
function isPowerOfTwo(n) {
  // 1 is 2^0, so it's a valid power of 2
  if (n === 1) return "YES";
  
  // If number is <= 0 or odd, it cannot be a power of 2
  if (n <= 0 || n % 2 !== 0) return "NO";
  
  // Divide by 2 recursively
  return isPowerOfTwo(n / 2);
}

// Задача 4. Сума цифр числа
function sumOfDigits(n) {
  // Base case: when no digits left
  if (n === 0) return 0;
  
  // Get last digit (n % 10) and add to sum of remaining digits
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// Задача 5. Цифри числа справа наліво
function printDigitsRightToLeft(n) {
  // Base case
  if (n === 0) return;
  
  // Print the last digit first
  process.stdout.write((n % 10) + " ");
  
  // Recursively process the rest of the number
  printDigitsRightToLeft(Math.floor(n / 10));
}

// Задача 6. Цифри числа зліва направо
function printDigitsLeftToRight(n) {
  // Base case
  if (n === 0) return;
  
  // Process higher digits first via recursion
  printDigitsLeftToRight(Math.floor(n / 10));
  
  // Print current digit after returning from recursion
  process.stdout.write((n % 10) + " ");
}

// Перевірка роботи програм

print1ToN(5);
console.log("");

printAtoB(5, 1);
console.log("");

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(3));

console.log(sumOfDigits(179));

printDigitsRightToLeft(179);
console.log("");

printDigitsLeftToRight(179);
console.log("");
