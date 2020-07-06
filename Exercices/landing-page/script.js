document.getElementById('submit-btn').addEventListener('click', () => {
  let authorValue = document.getElementById('auteur').value;
  let commentValue = document.getElementById('comment').value;
  let body = {
    auteur: authorValue,
    comment: commentValue,
  };
  console.log(JSON.stringify(body));
  fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
  });
});

let getComment = () => {
  fetch ('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: "GET",
})
.then(response => {
  return response.json()
})
.then (response => {
  console.log(response)
  let data = response;
  data.forEach(element => {
    console.log(element);
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(data.comment);
    newDiv.appendChild(newContent);
  })

})