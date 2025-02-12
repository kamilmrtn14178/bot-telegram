const express = require("express");
const path = require("path");

const app = express();

// Servir les fichiers statiques depuis le dossier "public"
app.use(express.static("public"));

// Route principale qui envoie le fichier HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
