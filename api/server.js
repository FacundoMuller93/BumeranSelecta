const express = require("express");
const morgan = require("morgan");

const db = require("./config/db");
const { Users } = require("./models");


//const routes = require("./routes");

const app = express();



app.use(morgan("tiny"));
app.use(express.json());


///Authentification Strategies


///Serialize and de-serialize auth user


//// APProutes and DB.SYNC
//app.use("/", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening ON ${PORT}`));
});