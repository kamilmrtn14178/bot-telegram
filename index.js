const express = require("express");
const path = require("path");

const app = express();

// Servir des fichiers statiques (HTML, CSS, etc.)
app.use(express.static("public"));

// Route principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
