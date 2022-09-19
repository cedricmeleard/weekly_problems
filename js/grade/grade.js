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
  let fixedValue = truncateTo(1)(averageOf(studentGrades));
  return Number(fixedValue);
};

const truncateTo = decimalCount => value => value.toFixed(decimalCount ?? 1);

const averageOf = grades => grades.reduce(sumReducer, 0) / grades.length;

const sumReducer = (acc, value) => getGradeValue(value) + acc;

const getGradeValue = value => (GRADES[value] ? Number(GRADES[value]) : 0);

export { calculateGPA };
