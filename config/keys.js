//clientID = 867891670740-03kdgetggvthefbr06ep845r2q1jt6v8.apps.googleusercontent.com
// clientSecret = lcbfjK1cm57r9S3TYCz38NAu

if (process.env.NODE_ENV === "production") {
  module.exports = require("./herokuKeys");
} else {
  module.exports = require("./localKeys");
}
