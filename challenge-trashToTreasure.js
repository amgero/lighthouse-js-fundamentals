function smartGarbage(trash, bins) {
  if (trash === 'waste' || trash === 'recycling' || trash === 'compost') {
    bins[trash] += 1;
  }
  return bins;
}

// Test cases
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
