# CharlesLippens_13_27042022

# 1. Project: installation steps

## 1.1.1 Prerequisites

- [NodeJS (**version 12**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## 1.1.2 Dependencies

- React Version 18.0.0

- React-router-dom 6.3.0

- axios

- redux, react redux, redux toolkit

## 1.2 Clone or download P13 repository

Clone the P13 repository CharlesLippens_12_08042022 (containing backend+frontend) : https://github.com/charleslippens/CharlesLippens_13_27042022.git or click on Code => download ZIP

## 1.3 Install - Backend API

Inside the root folder, install the packages/dependencies with command on terminal: `yarn install`

Run the server API, which will then listen on port 3001 by default with command on terminal: `yarn start` ( command which will allow you to run the micro API)


## 1.4 Install - Frontend React Application

Inside the frontend folder, install the packages/dependencies with command on terminal: `yarn install`

Run the Frontend App with command on terminal: `yarn start` and run it on port 3000



# Utilisez une API pour un compte utilisateur bancaire avec React
## Définition du plan d'action pour la mise en oeuvre du projet (liste des exigences réparties en phases)

- Transformation de l'ancien site HTML statique + CSS en application React (Create React App)
- Création et mise en page RESPONSIVE des différents pages (Home, login, profil)
- Utilisation de composants fonctionnels React, méthode map(), utilisation fichier data etc..
- Utilisation React Router

Identification des besoins et des sujets auxquels il faut consacrer plus de temps:

- Utilisation axios ou fetch pour l'API + documentation Swagger API
- Utilisaton de Redux pour gérer state de l'ensemble de l'application (state global, actions, reducers et)
- Utilisation des tokens JWT pour login, localstorage etc... 

## Création de l'application React

- Installation dépendances (redux, react-router-dom etc..)

En cours de construction : https://charles-lippens-13-27042022.vercel.app/

##  Créer une couche de service pour mettre en œuvre les appels à l'API

- Interactions CRUD avec l'API (POST, PUT, GET etc..)
- Gestion des appels API (fetch/axios)
- Documentation API

##  Etapes suivantes 4 et 5:

- Code qui authentifie et interroge l'API sécurisée 
- Utilisation de jetons JWT (différent de la fourniture de l'en-tete au porteur dans la demande)
- Localstorage pour rememberMe (enregistrement des identifiants)
- Mongodb community server, mettre en place le backend et la base de données etc
- Utiliser et Intégrer Redux dans l'application React pour gérer le state  de l'application (Fichiers de codes de state management Redux)
- Swagger :  spécifier les endpoints d’API (YAML/YML) pour la page transferts


##  Documentations: ancienne version

- HTML statique, CSS, wireframes, API documentation etc: https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API
- Github issues: https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE
- S'authentifier, Modéliser, Intéragir avec une API
- Implémenter un gestionnaire d'état dans une application React


##  Perspectives/évolutions :

- SASS, CSS in JS (styled components) etc..
- Typescript? autres?



