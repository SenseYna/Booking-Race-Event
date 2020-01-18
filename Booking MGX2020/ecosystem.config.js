module.exports = {
    apps : [
        {
          name: "timelapse",
          script: "./bin/www",
          watch: true,
          env: {
            "NODE_PATH": "./src"
          }
        }
    ]
  }