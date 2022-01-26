require("dotenv").config();
const axios = require("axios").default;

const txHash =
  "0x307c1b88fcf30322f40e735652e43ad443d2f027963a47b163857e21f2fc13e3";

axios({
  method: "get",
  url: `https://api.polygonscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=${txHash}&apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
}).then((response) => {
  if (response.data.message == "OK") {
    console.log(
      `The transaction receipt status of ${txHash} is ${
        response.data.result.status == 1 ? `✅Success` : `❌Failed`
      }`
    );
  }
});
