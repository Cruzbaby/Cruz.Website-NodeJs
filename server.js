const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path')
const app = express();
const port = process.env.PORT;
const StoreRouter = require('./src/router/productsRouter')

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public")));

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index', { username: 'Cruz Developer' });
})


app.use("/products", StoreRouter)

app.listen(port, () => {
    console.log("App Running In Port", port);
})