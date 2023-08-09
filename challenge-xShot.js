function finalPosition(moves) {
  let position = [0, 0]; // Starting position [X, Y]

  for (const move of moves) {
    if (move === 'north') {
      position[1]++; // Move north (increase Y)
    } else if (move === 'south') {
      position[1]--; // Move south (decrease Y)
    } else if (move === 'east') {
      position[0]++; // Move east (increase X)
    } else if (move === 'west') {
      position[0]--; // Move west (decrease X)
    }
  }

  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
console.log(finalPosition(moves));
