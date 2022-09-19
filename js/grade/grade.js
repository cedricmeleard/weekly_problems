const GRADES = {
  A: 4,
  "A-": 3.7,
  "B+": 3.3,
  B: 3,
  "B-": 2.7,
  "C+": 2.3,
  C: 2,
  "C-": 1.7,
  "D+": 1.3,
  D: 1,
  "D-": 0.7,
  F: 0
};

const calculateGPA = function(studentGrades) {
  let fixedValue = (studentGrades.reduce((acc, value) => parseFloat(GRADES[value]) + acc, 0) /
    studentGrades.length).toFixed(1);

  return parseFloat(fixedValue);
};

export { calculateGPA };
