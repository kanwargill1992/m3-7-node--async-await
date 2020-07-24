// Exercise 3
// ----------

const doublesLater = (num) => {
  let promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(num * 2);
    }, 2000)
  );

  return promise;
};

const handleSum = async (num) => {
  try {
    const num1 = await doublesLater(num);

    const num2 = await doublesLater(num1);

    const num3 = await doublesLater(num2);

    return num3;
  } catch (err) {
    console.log("Error", err);
  }
};

handleSum(10).then((ans) => console.log(ans));
