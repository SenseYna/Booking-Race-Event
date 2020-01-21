module.exports = {
    PORT: "1409",
    SECRET: "Timelapse_music_festival_secret",
    DATA_COLLECTION: "Timelapse_music_festival",
    SESSION: {
        name: 'session_Timelapse_music_festival',
        proxy: true,
        resave: true,
        secret: "session_Timelapse_music_festival.secrect", // session secret
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false /*Use 'true' without setting up HTTPS will result in redirect errors*/,
        }
    },
    DEBUG: {
        server: "Timelapse_music_festival"
    },
   // domain: "https://timelapse.webdevstudios.org",
    domain: "https://localhost:1409",
}
