# Utilisation de l'image Node.js officielle comme base
FROM node:22

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie de tous les fichiers du projet
COPY . .

# Exposition du port sur lequel l'application va écouter
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]
