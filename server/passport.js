const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"}) 

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  // User.findOrCreate({ githubId: profile.id }, function (err, user) {
  //   return done(err, user);
    
  // });
  done(null,profile)
}
));

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // }); just in case using mongodb later on
    done(null,profile)
  }
));

passport.serializeUser((user,done)=>{
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user)
})