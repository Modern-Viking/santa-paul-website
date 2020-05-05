const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/santa-paul-website");

const reviews = [
    {
        author: "Mary Wilcox",
        body: "Santa Paul is amazing!  He is great with the kids and knows just what to say to them.  He truly is Santa Claus."
    },
    {
        author: "Nancy Thomas",
        body: "We loved our visit from Santa today!  He was so friendly and looked so real!  My kids loved him and had no problem telling him everything they wanted for Christmas."
    },
    {
        author: "Tony Stank",
        body: "Santa visited me and my family here at my home in Malibu today and it was so perfect.  The option to have a personal visit in my home was amazing.  Santa Paul is truly the Embodiment of Santa Claus."
    },
    {
        author: "Tre Melan",
        body: "Santa Paul has visited our home for several years now.  He brings the wonder and magic of the season to my children and whole family.  He IS Santa!"
    },
    {
        author: "Jennie Loader",
        body : "As Santa Paul walked into our home our children's eyes grew wide with excitement!  They knew Santa was here and that he was real.  Santa Paul was the real deal.  He brought candy canes and stories for the kids to hear.  We'll have him back every year."
    },
    {
        author: "Missy Jones",
        body: "Santa Paul has a story for everything my kids asked, and boy did they ask!  From elves to the North Pole, there was no hesitation.  I began to believe he was the real thing."
    },
    {
        author: "Trent Rolling",
        body: "I was hesitant to have a Santa come to our house, but Santa Paul made this a real treat. He had stories to read, songs to sing and candy canes for all the kids.  We will do this as long as the kids believe."
    },
    {
        author: "WIlliam Robertson",
        body: "My youngest child could not go to the mall to see Santa because of some health issues.  Santa Paul was happy to come to our home and make Christmas a special experience this year.  He was gentle and understanding and stayed just he right amount of time.  This is a Christmas experience we will never forget."
    }
];

db.Reviews.deleteMany({})
  .then(() => db.Reviews.collection.insertMany(reviews))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
