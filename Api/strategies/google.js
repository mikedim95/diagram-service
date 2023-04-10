const passport = require("passport");
const Strategy = require("passport-google-oauth20");
/* const session = require("express-session"); */
const dotenv = require("dotenv");
dotenv.config();
/* const authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}; */

passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.REDIRECT_URL,
    },

    function (accessToken, refreshToken, profile, done) {
      // This function is called after successful authentication
      // You can save the user profile or do other things here
      console.log("passed from here!!!!!!!!!!!!");
      return done(null, profile);
    }
  )
);
/* passport.serializeUser(function (user, done) {
  done(null, user);
  // where is this user.id going? Are we supposed to access this anywhere?
});
passport.deserializeUser(function (id, done) {
  done(null, user);
});
 */
