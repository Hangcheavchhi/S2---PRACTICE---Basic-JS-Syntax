function challenge1(width, height) {
  let rectangleString = '';
  for(let h = 0; h < height; h++){
      for(let w = 0; w < width; w++){
          rectangleString += '*';
      }
      rectangleString += '\n';
  }
  return rectangleString;
}

console.log(challenge1(3, 4));
console.log(challenge1(5, 2));
console.log(challenge1(5, -2));