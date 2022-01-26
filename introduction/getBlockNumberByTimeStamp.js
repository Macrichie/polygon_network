require("dotenv").config();
const axios = require("axios").default;

// const timestamp = new Date().getTime().toString();
const timestamp = 1601510400;

axios({
  method: "get",
  url: `https://api.polygonscan.com/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
}).then((response) => {
  //   console.log(response.data.message);
  if (response.data.message == "OK") {
    console.log(
      `The block number at timestamp ${timestamp} is ${response.data.result}`
    );
  }
});
