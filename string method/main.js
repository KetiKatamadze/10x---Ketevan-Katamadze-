// 1. Make It Loud
console.log("1. Make It Loud");

const string = "javascript is fun";

const upperString = string.toUpperCase();
console.log(upperString);

// 2. Make It Quiet

console.log("2. Make It Quiet");

const string1 = "HELLO WORLD";

const lowerString1 = string1.toLowerCase();
console.log(lowerString1);

// 3. First Letter Uppercase

console.log("3. First Letter Uppercase");

const string2 = "coding is fun";
const letterUp = string2.at(0).toUpperCase() + string2.slice(1);

console.log(letterUp);

// იმ შემთხვევაში თუ 1ზე მეტი სიტყვაა და მასივი არა.
// const sentence = "coding is fun";

// const capitalized = sentence
//   .split(' ') // split into words
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
//   .join(' '); // join back into a sentence

// console.log(capitalized); // Output: Coding Is Fun

// 4. Find the Word

console.log("4. Find the Word");

const string4 = "Find the hidden message";
const findHidden = string4.indexOf("hidden");
console.log(findHidden);

// 5. Swap Words
console.log("5. Swap Words");

const string5 = "I like cats";
const replaceWord = string5.replace("cats", "dogs");
console.log(replaceWord);

// 6. Split the Fruits
console.log("6. Split the Fruits");

const fruits = "apple,banana,orange";
const splitFruits = fruits.split(",");
console.log(splitFruits);

// 7. Join the Squad
console.log("7. Join the Squad");

const string3 = ["We", "love", "JS"];
const joinString3 = string3.join(" ");
console.log(joinString3);

// 8. Trim the Space

const string6 = "     hello      ";
const trimSpace = string6.trim();
console.log(trimSpace);

// 9. Does It Include?
console.log("9. Does It Include?");

const string7 = "JavaScript is great";
const stringInc = string7.includes("great");
console.log(stringInc);

// 10. Ends With?
console.log("10. Ends With?");

const string8 = "index.html";
const stringEnd = string8.endsWith(".html");
console.log(stringEnd);

// 11. String Reversal
console.log("11. String Reversal");

const str1 = "paskunji";
const reverseStr1 = str1.split("").reverse().join("");
console.log(reverseStr1);

// 12. Palindrome Check
console.log("12. Palindrome Check");

function checkPalindrome(str) {
  const strReverse = str.split("").reverse().join("");
  if (str == strReverse) {
    console.log("This word is Palindrome");
  } else {
    console.log("This word isn't palindrome");
  }
}

checkPalindrome("ara");
checkPalindrome("ki");

// 13. Count Vowels in a String
console.log("13. Count Vowels in a String ");

function countVowels(str) {
  const vowels = str
    .split("")
    .filter((vowel) => {
      return (
        vowel === "a" ||
        vowel === "e" ||
        vowel === "i" ||
        vowel === "o" ||
        vowel === "u"
      );
    })
    .join("");

  const vowelsLength = vowels.length;
  return `String was: ${str}, Vowels: ${vowelsLength}`;
}

console.log(countVowels("paskunji"));

// 14. Title Case
console.log("14. Title Case");

function titleName(str) {
  const letterCapit = str.at(0).toUpperCase() + str.slice(1);
  return letterCapit;
}

console.log(titleName("paskunji"));

// ---

const str9 = "keti%liza%margo";

const newStr9 = str9.replaceAll("%", " ");
console.log(newStr9);

// 15. First and Last Letter
console.log("15. First and Last Letter");

const str10 = "banana";
const newStr10 = [str10[0], str10[str10.length - 1]];

// const newStr10 = str10.split(",")
// .map(letter => str10[0] + "," + str10[str10.length-1])

console.log(newStr10);

// 16. String to Words Array

console.log("String to Words Array");

const sentence1 = "i love coding";
const newSentence1 = sentence1.split(" ");

console.log(newSentence1);

// 17. Count Words
console.log("17. Count Words");

const str11 = "Hello world this is JS";
const countWords = str11.split(" ");

console.log(countWords.length);

// 18. Uppercase All Words
console.log("18. Uppercase All Words");

const str12 = "hello world";
const upperStr12 = str12.toUpperCase();

console.log(upperStr12);

// 19.  Extract Every Second Character
const str13 = "abcdef";
const extractStr13 = str13.split("").filter((letter, index) => index % 2 === 1);

console.log(extractStr13);

// 20. Join Letters with Dash
console.log("Join Letters with Dash");
const str14 = "hello";
const joinStr14 = str14.split("").join("-");

console.log(joinStr14);

// 21. Reverse Each Word
console.log("Reverse Each Word");

const str21 = "dog cat";
const reverseStr21 = str21
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(reverseStr21);

// 22. Find Word Starting with a Letter
console.log("22. Find Word Starting with a Letter");

const str22 = "The cat sat";
const findWord = str22
  .split(" ")
  .map((word) => {
    if (word[0] === "c") {
      return word;
    }
  })
  .join("");

console.log(findWord);

// 23. Capitalize Each Word
console.log("23. Capitalize Each Word");
const str23 = "i love javascript";
const newStr23 = str23
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(newStr23);

// 24. Words Longer Than N Letters
console.log("24. Words Longer Than N Letters");
const str24 = "I love frontend development";
const newStr24 = str24.split(" ").filter((word) => word.length > 5);
// .join(" ")
console.log(newStr24);

// 25. Find Most Frequent Word
console.log("25. Find Most Frequent Word");
const str25 = "hello hello world";
const newStr25 = str25
  .split(" ")
  .filter((a, b, c) => {
    return c.indexOf(a) === b;
  })
  .join(" ");

console.log(newStr25);

// 26. Sort Words Alphabetically
console.log("26. Sort Words Alphabetically");

const str26 = "Banana apple Dog";
const newStr26 = str26
  .split(" ")
  // .map(word => word.toLowerCase())
  // .sort()
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLocaleLowerCase()));
console.log(newStr26);

// 27. Longest Word Length
console.log("27. Longest Word Length");
const str27 = "I love programming";
const newStr27 = str27
  .split(" ")
  .sort((a, b) => b.length - a.length)
  .at(0);

console.log(newStr27.length);

// 28. Swap Case
console.log("28. Swap Case");
const str28 = "HeLLo";
const newStr28 = str28
  .split("")
  .map((letter) =>
    letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase()
  )
  .join("");

console.log(newStr28);

// 29. Words That Start With Vowel
console.log("29. Words That Start With Vowel")

const str29 = "An old umbrella is outside";
const vowels = ['a', 'e', 'i', 'o', 'u'];

const newStr29 = str29
  .split(" ")
  .filter(word => vowels.includes(word[0].toLowerCase()))
//   .join(" ");

console.log(newStr29);

// 30. Make Hashtag Sentence
console.log("30. Make Hashtag Sentence")

const str30 = "hello world today"
const newStr30 = str30.split(" ")
.map(word => word[0].toUpperCase() + word.slice(1))

newStr30.unshift("#")
const newNewStr30 = newStr30.join("")


console.log(newNewStr30)

// 31. Sum of Even Numbers
console.log("31. Sum of Even Numbers")
let sum = 0
for(i = 1; i <= 10; i++){
    if(i % 2 === 1){
        console.log(i)
        sum += i
    }
}

// console.log(sum)

// 32. Reverse an Array Manually
console.log("32. Reverse an Array Manually")

let newStr31 = []
const str31 = [1,2,3]
for(i = str31.length-1; i >= 0; i--){
    newStr31.push(str31[i])
}
console.log(newStr31)

// 33. Find Second Largest Number
console.log("33. Find Second Largest Number"); 

const str32 = [5, 1, 7, 3, 9];

const newStr32 = str32.sort((a,b) => b-a)
console.log(newStr32);
console.log(newStr32[1])

// 34. Count Occurrences
console.log("34. Count Occurrences")

const str33 = ["apple", "banana", "apple", "orange"];
console.log(str33)

let count = 0;

for(fruit of str33){
    if(fruit === "apple"){
        count++
    }

}
console.log(`"apple": ${count}`)

// 35. Filter Without Using filter() 
console.log("35. Filter Without Using filter() ");

const str34 = [2, -1, 5, -3, 0]; 
const newStr34 = [];

for(number of str34){
    if(number >= 0){
        newStr34.push(number);
    }
}
console.log(newStr34);

// 36.  Find Duplicates
console.log("36. Find Duplicates")
const str35 = [1, 2, 2, 3, 4, 4, 5];
const newStr35 = str35.filter((a,b) => str35.indexOf(a) !== b)

console.log(newStr35)

// 37. Remove Falsy Values
console.log("37. Remove Falsy Values")

const str36 = [0, 1, "", 2, false, 3];
const newStr36 = [];

for(numb of str36){
    if(numb){
        newStr36.push(numb);
    }
}

console.log(newStr36)

// 38.Flatten a 2D Array
console.log("38.Flatten a 2D Array");

const str37 = [[1, 2], [3, 4], [5]];
const newStr37 = str37.flat(Infinity)

console.log(newStr37)

// 39. Check if Array is Sorted
console.log("39. Check if Array is Sorted");

// const str39 = [1, 2, 3, 4]; 
// const newStr39 = str39

function checkSorting(n){

    const newStr39 =  [...n].sort((a,b) => a-b)
    return n.every((numb, index) => numb === newStr39[index]);
}

console.log(checkSorting([1, 2, 3, 4]))
console.log(checkSorting([1, 3, 2]))

// 40. Custom Join
console.log("40. Custom Join")

const str40 = ["a", "b", "c"]
const newStr40 = str40.join("-");

console.log(newStr40)

