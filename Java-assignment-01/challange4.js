function challenge4(string, char){
  let charCount = 0;
  for(let letter of string){
      if(letter == char){
          charCount++;
      }
  }
  return charCount;
}

console.log(challenge4("hello world", 'o'));
console.log(challenge4("aaa bbb a", 'a'));
console.log(challenge4("abc", 'd'));