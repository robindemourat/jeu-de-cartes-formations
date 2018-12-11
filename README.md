# Installation

Prérequis :

* avoir installé git
* avoir installé node
* avoir accès au terminal de votre ordinateur

Puis dans le terminal de votre ordinateur :

```
git clone https://github.com/robindemourat/jeu-de-cartes-formations
cd jeu-de-cartes-formations
npm install
```


# test et développement

```
npm run start
```

# déploiement

```
npm run deploy
```

# Comment pointer vers un autre tableau google drive.

1. Créer un tableau google spreadsheet
2. Cliquer sur fichier > publier sur le web > publier
3. Copier **dans la barre d'adresse** le lien du google spreadsheet

Puis copier le fichier src/config.sample.json sous le nom src/config.json et le remplir avec l'URL.