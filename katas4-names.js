const instructorWithLongestName = function(instructors) {
  let longestInstructor = instructors[0];

  for (const instructor of instructors) {
    if (instructor.name.length > longestInstructor.name.length) {
      longestInstructor = instructor;
    }
  }

  return longestInstructor;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
