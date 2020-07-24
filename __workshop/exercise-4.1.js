const request = require("request-promise");

// getDadJoke
const options = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
  json: true,
};
getDadJoke = async () => {
  try {
    const newJoke = await request(options);
    return newJoke.joke;
  } catch (err) {
    console.log("error", err);
  }
};

// 4.1
// getDadJoke().then((data) => console.log(data));
module.exports = { getDadJoke };
