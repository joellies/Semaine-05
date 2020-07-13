# Javascript Semaine 5

## Introduction

Bonjour à tous et bienvenue en cette 5éme semaine!
Nous arrivons bientôt au bout de notre périple abordant les fondamentaux du langage, qui vous permettront d'aborder sereinement la matière du module avancé!
Alors bouclez vos ceintures, accrochez vous, et embarquons pour cette nouvelle semaine au cours de laquelle vous aurez l'occasion de générer du DOM dynamiquement et d'envoyer votre premier formulaire vers une API!

## Table des matières

1. Construire une requête: les Headers, les verbes, le corps
2. Construire une requête "POST" à l'aide de la méthode fetch()
3. Manipuler le DOM: créer de nouveaux éléments HTML de façon dynamique et y ajouter le contenu d'une réponse HTTP

## 1. Construire une requête: Les Headers

Pour construire une requête valide pour le protocole HTTP vous aurez besoin de plusieurs éléments:
- Le verbe de la requête (nous verrons précisément deux de ces verbes au chapitre suivant): GET, POST, PUT, DELETE;
- L'en-tête de la requête: qui permettent de préciser ce qu'attend le serveur (réponse) et ce qu'envoit la requête.
- Le corps de la requête: dans le cas d'un get ou d'un delete, le corps de la requête est envoyée en réponse, il contient l'information renvoyée par le serveur, sous la forme d'un JSON. Le corps (body) si il est envoyé avec la requête dans le cadre d'un POST ou d'un PUT peut être rédigé sous forme d'un objet, de chaînes de caractère, ou d'un JSON, il contient les données à envoyer au serveur

### Ligne du temps d'une requête:

1. Prenons l'exemple d'une requête qui va récupérer des données d'un serveur: 
- On envoit la requête avec l'URL du serveur à contacter et le verbe "GET".
- Le serveur répond avec un status: 200 si la requête est valide, 400 si elle encourt une erreur
- Dans le cadre d'une erreur 400, il peut s'agir d'une erreur du à la configuration des headers -> le serveur peut attendre une autorisation spécifique définie par le serveur qui doit être envoyée dans les headers de la requête pour donner l'accès aux informations: token d'identification, CORS
- Ensuite le corps de la réponse est envoyé: si il s'agit d'un status 200 vous obtiendrez les informations désirée, sinon le message correspondant à l'erreur rencontrée (par exemple: votre domaine n'a pas les accès requis par le serveur)

2. Dans le cadre d'une requête "POST" qui envoit de nouvelles données vers un serveur:
- On envoit la requête avec l'URL du serveur, la méthode "POST", les headers précisant l'origine du domaine, le type de données envoyées, et le corps de la requête: souvent sous format JSON
- La réponse renvoyée est un message accompagnant le status de la requête: 200, 400, 500. Configuré par le serveur. 

### Les headers

Ou "en-tête" HTTP: les headers précisent le type de données attendues / envoyés, le domaine d'origine, les token d'authentification, les cookies, les informations sur le corps du message, les proxies, une éventuelle redirection, le contexte de la requête, le contexte de la réponse, une éventuelle pagination, des guardes de sécurité,des WebSocket, le codage de transfert, les différents évenements envoyés par le serveur, la date, etc

Les headers sont optionnels. Ils sont configuré par le back-end et doivent être connu du développeur utilisant l'API afin de renvoyer les configurations attendues.

Cette semaine nous aurons besoin de définir le type de données envoyées par la requête à l'aide de la clé/valeur content-type:
```js 
let myHeaders = new Headers({"Content-Type": "application/json"})
```

Tout d'abord je défini une nouvelle variable (let myHeaders) destinée à contenir mes headers. Comme vous le voyez ils sont rédigés sous format JSON avec un objet contenant une pair clé/valeur dont la clé est toujours une chaîne de caractères.

On attribue ensuite cette variable à l'objet Headers grâce au mot clé new Headers.
Cette définition permet à la variable d'acquérir toutes les méthodes et les propriétés de l'objet global Headers.

Ensuite, à l'intérieur de mon nouvel objet, je défini la paire de clé/valeur à attribuer.
Dans ce cadre ci nous allons définir le type de données à envoyer par notre requête: sous format json.
Il est indispensable de le configurer, sinon les données envoyées seront traduites sous la forme d'un objet simple et le serveur les interprêtera comme un corps vide et renverra une erreur.

### Les verbes

Ils définissent la méthode de la requête. Ce qu'elle "fait" ou "demande".

**GET**: demande une représentation de la ressource spécifiée, en d'autres termes, il demande au serveur via l'URL donnée, de renvoyer les données spécifiques à cette URL (dans l'exercice de la semaine l'url se comporte comme suit: https://quotes-light-api.herokuapp.com/api/comments/ elle pointe vers la route "comments" pour récupérer la table commentaire de la base de donnée).

**POST**: Envois un corps de donnée dont les paires clés/valeurs sont définies par l'API. Ces pairs correspondent aux pairs présentent dans la base de donnée, il peut arriver que certaines soient obligatoire à mentionner avec une valeur valide afin de pouvoir performer la requête.

**PUT**: Met à  jour la totalité d'une entité que l'on pointe à l'aide de son ID unique. Toutes les pairs de clés/valeurs sont remplacées par le body renvoyé par l'utilisateur.

**PATCH**: Met à jour uniquement la pair de clé valeur demandée

**DELETE**: Demande la suppression d'une entité dans la base de donnée à l'aide de son ID unique

La semaine dernière vous avez implicitement fait appel à la méthode "GET" en contactant l'API quote grâce à la méthode fetch.

Cette semaine nous allons définir une méthode fetch pour le verbe GET et une méthode fetch pour le verbe POST. Vous allez donc créer votre premier formulaire HTML, récupérer les valeurs de ce formulaire, les attribuer au corps de votre requête, et pour finir envoyer le corps de votre requête dans la base de donnée à l'aide de la méthode POST et des headers requis.

### Le corps de la requête

Le corps de la requête ce sont les valeurs récupérées de votre formulaire, entrées par l'utilisateur de votre application. 
Ces valeurs sont destinées à être enregistrées dans la base de donnée ou comme données pour la réalisation de méthodes définies par le serveur (par exemple lorsque vous vous authentifiez sur FaceBook, vous ne modifiez pas la base de données, vous renvoyés des informations de connexion que le serveur compare avec votre profile utilisateur, si elles correspondent le serveur vous donne accès à votre profile, sinon il vous indique que vous avez fait une erreur).

Pour envoyer le corps de la requête, vous devez savoir à quoi correspond le schéma de clé-valeur attendu par le serveur, par exemple pour une authentification le serveur pourrait attendre une clé user_name et une clé user_password.
Il s'agit d'une information définie que vous ne pouvez pas deviner:

Pour ce faire, il faut se référer à la documentation de votre API, ou directement au développeur Back-End ayant programmé le serveur.
Je vous indiquerai donc ce que le serveur attend dans les consignes de votre exercice.

Le corps de la requête est le plus souvent attendu sous format JSON.
Pour cette semaine nous allons générer un corps en créant un objet sur base de la récupération de la valeur des input de votre formulaire et de la méthode JSON.stringify()

## 2. Construire une requête "POST" à l'aide de la méthode fetch()

D'abord nous définissons les headers nécessaires à notre requête.

Ensuite nous avons besoin de récupérer les valeurs des inputs du formulaire rempli par l'utilisateur:

Pour ce faire nous avons besoin d'un objet body:

Il va directement récupérer les valeurs introduites pour un formulaire donné (récupéré à l'aide de son ID).
Ces données seront ensuite utilisées pour créer le corps de votre requête, mais elles doivent d'abord être transformée sous format JSON, nous aurons donc besoin de la méthode "JSON.stringify()".

```js
let myHeaders = new Headers({"Content-Type": "application/json"})
let form = document.getElementById("my-form");
document.getElementById("submit-btn").addEventListener("click", () => {
  let formAuteur= document.getElementById("auteur").value;
  let formComment = document.getElementById("comment").value;
  let body = {
    "auteur": formAuteur,
    "comment":formComment
  };
  fetch("l'url-de-mon-api", {
    method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body)
  })
})
```

**Observons ce bout de code:**

1. Ensuite, au click sur un bouton dont l'id vaut "submit-btn" (c'est à dire le bouton destiné à envoyer le formulaire vers le serveur). On défini deux nouvelles variables formAuteur et formComment qui vont récupérer les valeurs des input auteur et comment;

2. On crée un nouvel objet "body" qui va récupérer les pairs de clés/valeurs pointées par les variables formAuteur et formComment

3. Ensuite on crée une méthode fetch qui prend comme argument l'url de mon api, et comme second argument un objet dont les clés sont "method", "headers", "body".

4. La valeur de method se rapporte au verbe HTTP dont vous avez besoin pour votre requête, dans ce cas ci il s'agit du verbe "POST".

5. Ensuite, la clé headers reçoit comme valeur ma variable créée plus haut nommée myHeaders

6. Pour finir la clé body est attribuée à une méthode, JSON.stringify qui reçoit en argument la variable body, elle va transformer les paires de clés/valeurs de votre formulaire en format JSON, qui est le format attendu par le serveur.

## 3. Manipuler le DOM: créer de nouveaux éléments HTML de façon dynamique et y ajouter le contenu d'une réponse HTTP

Nous l'avons vus la semaine passée, la méthode fetch nous renvois souvent un tableau d'objets, sous format JSON.
La semaine dernière je vous demandais d'afficher un ojet de manière aléatoire dans ce tableau, cette semaine je vais vous demander de générer des éléments HTML pour chaque élément du tableau renvoyé par l'API.

Pour ce faire nous aurons besoin:

1. De récupérer le tableau d'objets (via la **méthode fetch**)
2. Une fois le tableau récupéré je dois tourner dessus à l'aide d'une boucle: **la boucle forEach**
3. Grâce à cette boucle, pour chaque élément du tableau, je vais générer une div pour l'auteur, et une div pour le commentaire, pour ce faire j'ai besoin de la méthode **createElement()** qui va créer mon élément HTML div, de la méthode **createTextNode()** et **appendChild()** qui va remplir ma div avec les valeurs de l'élément sur lequel je suis en train de tourner et enfin de la méthode **insertBefore()** qui va indiquer l'endroit où insérer ces div dans mon index.html

```js
fetch("l-url-de-mon-api", {method: "GET"})
.then(response => {
  return response.json();
})
.then(response => {
  let data = response;
  data.forEach(element => {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(element.auteur)
    newDiv.appendChild(newContent);
    let currentDiv = document.getElementById("insert");
    document.body.insertBefore(newDiv, currentDiv.nextElementSibling)
  })
})
```

**Observons ce bout de code**:

1. La méthode fetch reçoit deux paramètres, l'url et l'objet contenant une clé "method" dont la valeur est la méthode à appliquer, dans ce cas précis je veux aller chercher un tableau d'objet dans mon API, donc j'utilise le verbe HTTP GET

2. Je transforme ma réponse en format json qui le rend lisible pour nous et pour la machine
3. Ensuite, je stock la réponse dans une nouvelle variable "data"
4. Comme il s'agit d'un tableau d'objet je peux utiliser la méthode forEach pour utiliser chaque élément comme générateur de contenu HTML
5. Pour chaque élément je crée une nouvelle div à l'aide de la méthode **createElement("div")** qui attend un paramètre: le nom de l'élément à créer
6. Ensuite pour l'élément en cours je vais créer du texte contenant la valeur de l'élément courant avec la méthode **createTextNode** qui attend une valeur en paramètre, dans ce cas je pointe sur mon objet data et je récupère la valeur de la clé "auteur"
7. Ensuite j'utilise la méthode **appendChild** pour greffer mon nouveau contenu texte à ma nouvelle div générée par l'élément, pour ce faire je pointe sur ma variable newDiv, je lui attribue la méthode appendChild qui va greffer un élément enfant à l'élément parent div, l'élément enfant à greffer est dans ce cas ci la variable newContent contenant la valeur de l'auteur.
8. Pour finir je crée une variable récupérant la div avant laquelle je dois insérer mon contenu. Je pointe vers le body de mon document, je lui attribue la méthode **insertBefore** qui reçoit comme paramètre la variable contenant ma nouvelle div et la variable récupérant la div point de repère.

## Conclusion

Nous en avons fini pour cette introduction aux fondamentaux de Javascript, la semaine prochaine nous réaliserons une synthèse de tout ce qui a été vu, et j'apporterai quelques nouveaux éléments de théorie, mais sachez que le plus gros est derrière vous!


Bon travail!

