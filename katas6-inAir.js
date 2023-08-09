const checkAir = function(samples, threshold) {
    let dirtyCount = 0;
    
    for (const sample of samples) {
        if (sample === 'dirty') {
            dirtyCount++;
        }
    }
    
    const dirtyProportion = dirtyCount / samples.length;
    
    if (dirtyProportion > threshold) {
        return 'Polluted';
    } else {
        return 'Clean';
    }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // Output: Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // Output: Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)); // Output: Clean