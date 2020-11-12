module.exports = async () => {
  //Require models
  const Tweet = require("./models/Tweet");
  const User = require("./models/User");

  //Generic Error Handler
  const errHandler = (err) => {
    console.error("Error: ", err);
  };

  //Create Relations
  User.hasMany(Tweet, { as: "Tweets", foreignKey: "userId" });
  Tweet.belongsTo(User, { as: "User", foreignKey: "userId" });

  //create returns a promise which gets resolved to the user instance

  const user = await User.create({
    username: "alexdmc",
    passwd: "1234567890",
  }).catch(errHandler);

  //You must provide the userId to get each tweet linked to a single user.
  const tweet = await Tweet.create({
    content: "This is actually the tweet content Tweeted from Iphone",
    userId: user.id,
  }).catch(errHandler);

//   fetching from database --Find All Users with Thier Tweets
const users = await User.findAll({
    where: { username: "alexdmc" },
    include: [{ model: Tweet, as: "Tweets" }]  //populating from the db
    ///< include used to eager-load associated model 
  }).catch(errHandler);

  //log users & tweets
  console.log("AlexDMC Tweets: ", JSON.stringify(users));
};
