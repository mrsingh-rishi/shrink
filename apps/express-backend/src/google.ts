import passport from 'passport'
import  GoogleStrategy  from 'passport-google-oauth2';
GoogleStrategy.Strategy;

interface googleStrategyType{
    clientID:    string | undefined,
    clientSecret: string |undefined,
    callbackURL: string,
    passReqToCallback: boolean
}
passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback   : true
  },
  function(request:Request, accessToken:any , refreshToken:any, profile:any, done:any) {
    // User.findOrCreate({ googleId: profile.id }, function (err:Error, user:any) {
      return done(null, profile);
    // });
  }
));

passport.serializeUser((user:any,done)=>{
    done(null,user);
})
passport.deserializeUser((user:any,done)=>{
    done(null,user);
})