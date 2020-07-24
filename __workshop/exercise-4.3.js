const request = require("request-promise");

let options = {
  url: "https://geek-jokes.sameerkumar.website/api?format=json",
  method: "GET",
};

const getGeekJoke = async () => {
  try {
    const geekJokes = await request(options);
    const newGeek = JSON.parse(geekJokes);
    return newGeek.joke;
  } catch (err) {
    console.log("Error", err);
  }
};

// getGeekJoke().then((data) => {
//   console.log(data);
// });
module.exports = { getGeekJoke };
