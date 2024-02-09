// Write a JavaScript program that takes an array of Movie Titles (e.g. "Jurassic Park", "Up",
// "The Truman Show") and combines them into a single string called Watchlist. Each of the titles should have
// "[WATCHED]" added after it, except for the last movie. Log the final string to the console.
// Example Output
// I want to watch these movies: Jurassic Park [WATCHED], UP [WATCHED], The Truman Show

var movieArray = [
  "LOTR:FOTR",
  "LOTR:TTT",
  "LOTR:ROTK",
  "The Hobbit",
  "Ring of Power",
];

watchList = "I want to watch these movies: ";

for (var i = 0; i < movieArray.length; i++) {
  watchList = watchList + movieArray[i];
  if (i < movieArray.length - 1) {
    watchList = watchList + "[WATCHED] ";
  }
}

console.log(watchList);
