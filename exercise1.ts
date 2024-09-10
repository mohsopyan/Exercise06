// Soal1 -> Create a function to calculate array of student data

interface IStudent {
  name: string;
  email: string;
  age: Date;
  score: number;
}

const students: IStudent[] = [
  {
    name: "Adi",
    email: "adi7@gmail.com",
    age: new Date("1991-01-01"),
    score: 60,
  },
  {
    name: "dodi",
    email: "dodi8@gmail.com",
    age: new Date("1990-02-03"),
    score: 80,
  },
  {
    name: "rudi",
    email: "rudi9@gmail.com",
    age: new Date("1989-01-01"),
    score: 70,
  },
];

interface IScore {
  score: {
    highest: number;
    lowest: number;
    average: number;
  };
  age: {
    highest: number;
    lowest: number;
    average: number;
  };
}

function calculateAge(date: Date) {
  const today = new Date();
  const diff = today.getTime() - date.getTime();
  console.log(diff);
  const age = new Date(diff);
  console.log(age);

  return Math.abs(age.getUTCFullYear() - 1970);
}

function calculateArray(arr: IStudent[]): IScore {
  const result: IScore = {
    score: {
      highest: 0,
      lowest: 0,
      average: 0,
    },
    age: {
      highest: 0,
      lowest: 0,
      average: 0,
    },
  };

  const scores: number[] = [];
  const ages: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    scores.push(arr[i].score);

    ages.push(calculateAge(arr[i].age));
  }
  console.log(scores);
  console.log(ages);
  result.score.highest = Math.max(...scores);
  result.score.lowest = Math.min(...scores);
  result.score.average =
    scores.reduce((a: number, b: number) => a + b) / arr.length;

  result.age.highest = Math.max(...ages);
  result.age.lowest = Math.min(...ages);
  result.age.average =
    ages.reduce((a: number, b: number) => a + b) / arr.length;

  return result;
}

console.log(calculateArray(students));