let myHeaders = new Headers({ 'content-type': 'application/json' });

document.getElementById('submit-btn').addEventListener('click', () => {
  let authorValue = document.getElementById('auteur').value; //on récupère les valeurs entrées dans les champs du formulaire
  let commentValue = document.getElementById('comment').value;
  //je récupère les valeurs de mes champs
  let body = {
    auteur: authorValue,
    comment: commentValue,
  }; // variable utile pour le body du post
  console.log(JSON.stringify(body)); //pour garder chaine de caractères en tant que clés
  fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  });
});

let getComment = () => {
  fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      let data = response; // on stocke la réponse dans une data, c'est un objet
      data.forEach(element => {
        //les données arrivent sous forme de tableau, donc pour chaque élément du tableau on applique la méthode
        let currentDiv = document.getElementById('balise'); //balise fantôme avant laquelle on viendra greffer les nouveaux contenus
        let newDivAuteur = document.createElement('div'); //nouvelle div où on injectera auteur
        let newDivComment = document.createElement('div'); //nouvelle div où on injectera comment
        let newContentAuteur = document.createTextNode(element.auteur); //créer nouveau noeud texte auteur, même chose que text-content
        let newContentComment = document.createTextNode(element.comment); //texte commment
        newDivAuteur.appendChild(newContentAuteur); //s'utilise sur l'élément parent et prend comme param l'élément enfant, on greffe le nouveau contenu auteur dans la nouvelle div auteur
        newDivComment.appendChild(newContentComment); // on greffe le nouveau contenu comment dans la nouvelle div comment
        currentDiv.insertBefore(newDivAuteur, currentDiv.nextElementSibling); //on insère dans le code html (avant la current div fantôme qu'on a créé plus tôt) la nouvelle div auteur, , le première param est la nouvelle div, le 2 c'est le prochain frère de la current div qui est le point de repère
        currentDiv.insertBefore(newDivComment, currentDiv.nextElementSibling); //on insère dans le code html (avant la current div fantôme qu'on a créé plus tôt) la nouvelle div comment, le première param est la nouvelle div, le 2e c'est le prochain frère de la div point de repère
      });
    });
};
getComment();
