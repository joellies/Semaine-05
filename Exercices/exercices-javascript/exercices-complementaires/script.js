//Exercices intermédiaires

//1. Créez un objet body avec deux clés: auteur et comment. Donnez leur des valeurs sous forme de chaîne de caractère

//2. Vous devez convertir cet objet en format JSON: Créez une nouvelle variable bodyToJson attribuez lui la méthode JSON.stringify(); passez la variable body en paramètre de cette méthode

//3. Dans votre index.html : créez un bouton, passez lui comme id "submit-btn". Pointez dans votre script.js à l'aide de la méthode getElementById, ensuite, ajoutez lui un eventListener. Au click sur ce bouton, affichez dans la console la valeur de la variable bodyToJson

//4. Dans votre index.html, à l'aide des balises form, label, input, créez un formulaire. Il vous faut 2 inputs: un input basic avec comme id "auteur" et un textarea avec comme id "comment"

//5. Dans votre index.html, créez une balise "div" référente qui servira de repère à l'endroit de votre code où vous souhaitez intégrer du nouveau contenu, passez lui l'attribut id avec comme valeur "balise"

//6. Dans votre fichier script.js créez une nouvelle balise à l'aide de la méthode createElement et attribuez lui le texte de votre choix à l'aide de la méthode createNodeText, ensuite greffez le texte à la div en utilisant la méthode appendChild

// 7. Créez une variable myHeaders et passez lui la paire de clé/valeur suivante: "Content-Type": "application/json"

// 8. Créez une requête fetch à l'aide de la méthode post et passez lui la variable bodyToJson en valeur de la clé body


// Consignes exercices globaux:

// naviguez jusqu'à votre dossier: exercices landing page, lisez les consignes relatives à l'intégration de votre maquette. Ensuite dans le fichier script.js réalisez les consignes suivantes:

// 1. Définissez une nouvelle variable "myHeaders", contenant un objet global Headers, configuré avec la paire de clé/valeur suivante: "Content-Type": "application/json"

<<<<<<< HEAD
let myHeaders = new Headers({ 'content-type': 'application/json' });

// 2. Créez un formulaire dans votre index.html. Utilisez les balises "form", "label", "input", "button", passez comme ID "my-form" à votre balise form, ensuite les attributs pour les attributs "name" de vos input il est OBLIGATOIRE d'utiliser les clés attendues par l'API. C'est à dire une clé "auteur" et une clé "comment". Un de vos deux input aura donc comme valeur à l'attribut "name": "auteur", et le second "name":"comment". Pour finir, donnez comme ID "submit-btn" à votre bouton.
=======
// 2. Créez un formulaire dans votre index.html. Utilisez les balises "form", "label", "input", "button", passez comme ID "my-form" à votre balise form, ensuite pour les attributs "id" de vos input il est OBLIGATOIRE d'utiliser les clés attendues par l'API. C'est à dire une clé "auteur" et une clé "comment". Un de vos deux input aura donc comme valeur à l'attribut "id": "auteur", et le second "id":"comment". Pour finir, donnez comme ID "submit-btn" à votre bouton. Attention pour le bouton, il faut le sortir du formulaire sinon il rafraichit automatiquement la page. 
>>>>>>> upstream/master

//3. Vous disposez de vos headers, et de votre formulaire. Maintenant vous allez créer une écoute d'évenement sur le bouton ayant pour id "submit-btn". 

<<<<<<< HEAD
let form = document.getElementById('my-form');

//4. Vous disposez de vos headers, et d'une variable pointant vers votre formulaire. Maintenant vous allez créer une écoute d'évenement sur le bouton ayant pour id "submit-btn".

/*document.getElementById('submit-btn').addEventListener('click', () => {});*/
=======
//4. A l'intérieur de cette écoute, vous allez créer une variable "formAuteurValue", une variable formCommentValue et aller pointer vers les inputs qui ont comme id auteur et comment, ensuite récupérer la valeur de ces input et stockez là dans les variables que vous venez de créer
>>>>>>> upstream/master

//5. Créez une variable "body" de type objet. Dans cette variable passé comme clé: auteur et comment, ensuite attribuez les valeurs de formAuteurValue et formCommentValue aux clés correspondantes

/*document.getElementById('submit-btn').addEventListener('click', () => {
  let myForm = FormData(form);
})*/

//6. Maintenant que nous possédons tout le nécessaire à la rédaction de la méthode fetch(), lançons nous! Créez une méthode fetch qui utilise cette url : https://quotes-light-api.herokuapp.com/api/comments/

document.getElementById('submit-btn').addEventListener('click', () => {
  let auteurForm = document.getElementById('auteur').value;
  let commentForm = document.getElementById('comment').value;
  let myForm = {
    auteur: auteurForm,
    comment: commentForm,
  };
  console.log(JSON.stringify(myForm));
  fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(myForm),
  });
});

//7. Passez en deuxième argument un objet contenant la méthode, les headers et le body

//8. Pour construire le body: utilisez la méthode JSON.stringify, passez lui la variable "myform" qui récupère les valeurs de votre formulaire

//9. Testez votre code, ouvrez votre index.html dans votre navigateur, ouvrez l'inspecteur d'élément, allez dans l'onglet "console". Maintenant, remplissez votre formulaire avec les valeurs demandées (l'auteur, et le commentaire). Clickez sur le bouton submit, une erreur est elle renvoyée? Si non allez dans l'onglet network et vérifier le statut de votre requête, si il est défini sur 200 c'est que votre requête a fonctionné!

<<<<<<< HEAD
//10. Maintenant, créez une méthode fetch qui va aller récupérer toutes les données de l'API, comme la semaine dernière. Elle va vous retourner un tableau d'objets. Pour chaque élément de ce tableau, créez dynamiquement une div pour afficher le commentaire dans votre index.html */

let getComment = () => {
  fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      let data = response;
      data.forEach(element => {
        let currentDiv = document.getElementById('balise');
        let newDivAuteur = document.createElement('div');
        let newDivComment = document.createElement('div');
        let newContentAuteur = document.createTextNode(element.auteur);
        let newContentComment = document.createTextNode(element.comment);
        newDivAuteur.appendChild(newContentAuteur);
        newDivComment.appendChild(newContentComment);
        currentDiv.insertBefore(newDivAuteur, currentDiv.nextElementSibling);
        currentDiv.insertBefore(newDivComment, currentDiv.nextElementSibling);
      });
    });
};

getComment();
=======
//10. Maintenant, créez une méthode fetch qui va aller récupérer toutes les données de l'API, comme la semaine dernière. Elle va vous retourner un tableau d'objets. Pour chaque élément de ce tableau, créez dynamiquement une div pour afficher le commentaire dans votre index.html
>>>>>>> upstream/master
