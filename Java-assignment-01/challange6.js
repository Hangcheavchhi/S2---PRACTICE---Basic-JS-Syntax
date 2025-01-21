function challenge6(votes) {
  let message = "";

  const parties = ['A', 'B', 'C'];
  const scoring = [0, 0, 0]; 

  for (let vote of votes) {
    if (vote === 'A') {
      scoring[0]++;
    } else if (vote === 'B') {
      scoring[1]++;
    } else if (vote === 'C') {
      scoring[2]++;
    }
  }

  const winnerScore = Math.max(...scoring);
  const winner = [];
  for (let i = 0; i < scoring.length; i++) {
    if (scoring[i] === winnerScore) {
      winner.push(parties[i]);
    }
  }

  if (winner.length === 0) {
    message = "There is not a vote yet";
  } else if (winner.length === 1) {
    message = `${winner[0]} is the winner`;
  } else if (winner.length === 2) {
    message = `${winner[0]} and ${winner[1]} are both winners`;
  } else {
    message = winner.join(' and ') + " are the winners";
  }

  return message;
}
