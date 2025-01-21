function challenge6(votes){
  let message = "";
  let parties = ['A', 'B', 'C'];
  let scoring = [0, 0, 0]; // A/B/C
  
  for(let vote of votes){
      if(vote === 'A'){
          scoring[0]++;
      }
      else if(vote === 'B'){
          scoring[1]++;
      }
      else if(vote === 'C'){
          scoring[2]++;
      }
  }

  let winnerScore = Math.max(...scoring);
  let winner = [];

  for (let i = 0; i < scoring.length; i++) {
      if (scoring[i] === winnerScore) {
          winner.push(parties[i]);
      }
  }
  if(votes.length === 0){
      message = "There is not vote yet";
      return message;
  }
  else if(winner.length === 1){
      message = `${winner[0]} is the winner`;
      return message;
  }
  else if(winner.length === 2){
      message = `${winner[0]} and ${winner[1]} are both winners`;
      return message;
  }
  else{
      for(let i = 0; i < winner.length; i++){
          message += winner[i];
          if(i !== winner.length - 1){
              message += " and ";
          }
      }
      message += " are the winners";
  }
  return message;
}

console.log(challenge6(['A', 'B', 'A', 'C', 'A']));
console.log(challenge6(['A', 'B', 'B', 'C', 'A']));
console.log(challenge6([]));