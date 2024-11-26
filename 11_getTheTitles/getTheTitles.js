const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
];

const getTheTitles = function (array) {
  let newArr = array.map((obj) => obj.title);
  return newArr;
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
