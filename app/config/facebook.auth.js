var FacebookStrategy = require("passport-facebook").Strategy;
const session = require("express-session");
const mongo = require("mongodb").MongoClient;
const passport = require("passport");

module.exports = function(app, db) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.collection("users").findOne({ id: id }, (err, doc) => {
      done(null, doc);
    });
  });

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8080/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        db.collection("users").findAndModify(
          { id: profile.id },
          {},
          {
            $setOnInsert: {
              id: profile.id,
              name: profile.displayName || "Anonymous",
              email: profile.email || "No public email",
              created_on: new Date(),
              provider: profile.provider || ""
            },
            $set: {
              last_login: new Date()
            },
            $inc: {
              login_count: 1
            }
          },
          { upsert: true, new: true }, //Insert object if not found, Return new object after modify
          (err, doc) => {
            console.log(err);
            return cb(null, doc.value);
          }
        );
      }
    )
  );
};
