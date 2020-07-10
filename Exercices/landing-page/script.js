document.getElementById('submit-btn').addEventListener('click', () => {
  let authorValue = document.getElementById('auteur').value;
  let commentValue = document.getElementById('comment').value;
  let body = {
    auteur: authorValue,
    comment: commentValue,
  };
  console.log(JSON.stringify(body));
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
      let data = response;
      data.forEach(element => {
        //les données arrivent sous forme de tableau, donc pour chaque élément on applique la méthode
        let currentDiv = document.getElementById('balise'); //balise fantôme avant laquelle on viendra greffer les nouveaux contenus
        let newDivAuteur = document.createElement('div'); //nouvelle div où on injectera auteur
        let newDivComment = document.createElement('div'); //nouvelle div où on injectera comment
        let newContentAuteur = document.createTextNode(element.auteur); //texte auteur
        let newContentComment = document.createTextNode(element.comment); //texte commment
        newDivAuteur.appendChild(newContentAuteur); //on greffe le nouveau contenu auteur dans la nouvelle div auteur
        newDivComment.appendChild(newContentComment); // on greffe le nouveau contenu comment dans la nouvelle div comment
        currentDiv.insertBefore(newDivAuteur, currentDiv.nextElementSibling); //on insère dans le code html (avant la current div fantôme qu'on a créé plus tôt) la nouvelle div auteur, , le première param est la nouvelle div, le 2e est la div point de repère
        currentDiv.insertBefore(newDivComment, currentDiv.nextElementSibling); //on insère dans le code html (avant la current div fantôme qu'on a créé plus tôt) la nouvelle div comment, le première param est la nouvelle div, le 2e est la div point de repère
      });
    });
};
getComment();
