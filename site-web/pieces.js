// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();// Une fois la réponse reçue, cette ligne convertit la réponse en un objet JavaScript.


const article = pieces[0];

const imageElement = document.createElement("img");//Crée un élément <img>.
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

//Création des éléments pour l'exercice
const descriptionElement = document.createElement('p');
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";

const stockElement = document.createElement('p');
stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";



//Rattachement de nos balises au DOM
const sectionFiches = document.querySelector(".fiches");//Sélectionne l’élément avec la classe fiches

sectionFiches.appendChild(imageElement);// Ajoute chaque élément créé (imageElement, nomElement, prixElement, categorieElement) comme enfant de l’élément sectionFiches
sectionFiches.appendChild(nomElement);

//document.body.appendChild(prixElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);

