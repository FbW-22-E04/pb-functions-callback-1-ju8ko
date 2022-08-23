//Create a function which will print greeting message

//const greetMessage = (name) => `Good morning ${name}`;
//console.log(greetMessage("John"));

const greetUsers = function (arr, message) {
  arr.forEach((user) => {
    console.log(`${message}, ${user}!`);
  });
};
greetUsers(["John", "Peter", "Tom"], "Good morning");
// Good morning, John!
// Good morning, Peter!
// Good morning, Tom!
