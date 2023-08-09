function judgeVegetable(vegetables, metric) {
  let bestScore = -1;
  let bestSubmitter = '';

  for (const veggie of vegetables) {
    if (veggie[metric] > bestScore) {
      bestScore = veggie[metric];
      bestSubmitter = veggie.submitter;
    }
  }

  return bestSubmitter;
}

// Test case
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
