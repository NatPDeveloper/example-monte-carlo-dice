const diceRolls = [];

function generateDiceRolls(numRolls) {
  const generatedRolls = [];

  function rollDie(priorRoll) {
    if (!priorRoll) priorRoll = { meanRoll: 0, numRolls: 0 };
    const priorSum = priorRoll.meanRoll * priorRoll.numRolls;

    const minRoll = 1;
    const maxRoll = 6;
    const newRoll = Math.floor(
      Math.random() * (maxRoll - minRoll + 1) + minRoll
    );

    return {
      meanRoll: (priorSum + newRoll) / (priorRoll.numRolls + 1),
      numRolls: priorRoll.numRolls + 1
    };
  }

  for (let i = 0; i < numRolls; i++) {
    let priorRoll;
    if (i === 0) priorRoll = diceRolls[diceRolls.length - 1];
    else priorRoll = generatedRolls[generatedRolls.length - 1];
    generatedRolls.push(rollDie(priorRoll));
  }
  
  const obj = diceRolls.concat(generatedRolls)
  return obj[obj.length-1].meanRoll;
}

console.log(generateDiceRolls(1000));