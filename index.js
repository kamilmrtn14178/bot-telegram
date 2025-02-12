// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("🚀 Mini App Telegram en cours de développement !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
