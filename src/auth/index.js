import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import passport from "passport";
import {Router} from "express";
import UserModel from "../database/user.model.js";

const router = new Router()

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: "229938837924-g2skmthr73hj18n0hkkjv15ovirgqbhh.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:4000/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, cb) => {
        const user = await UserModel.findOne({providerId: profile.id})
        if (!user) {
            await UserModel.create({
                providerId: profile.id,
                displayName: profile.displayName,
                provider: profile.provider,
                picture: profile._json.picture,
                locale: profile._json.locale,
                accessToken: accessToken,
                refreshToken: refreshToken
            })

        }
        console.log(JSON.stringify(profile))
        cb(null, profile)
    }
));

router.get('/auth/google',
    passport.authenticate('google', {scope: ['profile']})
);

router.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


export default router;