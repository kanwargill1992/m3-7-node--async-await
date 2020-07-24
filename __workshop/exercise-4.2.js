const request = require("request-promise");

const options = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    Accept: "application/json",
  },
  json: true,
};

const getTronaldDumpQuote = async () => {
  try {
    const newQuote = await request(options);
    // console.log(newQuote.value);
    return newQuote.value;
  } catch (err) {
    console.log("Error", err);
  }
};

// getTronaldDumpQuote().then((data) => {
//   console.log(data);
// });
module.exports = { getTronaldDumpQuote };
