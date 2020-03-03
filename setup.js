require("./src/model/connect");
require("./src/model/schema");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

async function setup() {

  
  await mongoose.model("tickets").remove({})
  await mongoose.model("ticketCategories").remove({})
  await mongoose.model("users").remove({})

    let insert = {
      username: "admin@timelapse",
      password: "timelapseMusicFestival123@",
      roles: ["*"],
      fullname: "Quản trị viên"
    };
  const saltRounds = 10;
  bcrypt.hash(insert.password, saltRounds, async (err, hash) => {
    insert.password = hash;
    let usersInfo = await mongoose.model("users").create(insert);
  });
  await mongoose.model("ticketCategories").create({
    name: "Vé Free",
    prices: "0",
    time: 1
  })
  await mongoose.model("ticketCategories").create({
    name: "Vé Vip",
    prices: "100",
    time: 1
  })
  await mongoose.model("ticketCategories").create({
    name: "Vé VVip",
    prices: "200",
    time: 1
  })

  console.log("Done!!");
  process.exit();
};

setup();

console.log("Loading...");
