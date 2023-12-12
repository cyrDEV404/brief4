const apiUrl = 'https://portfolios.ern-mende.fr/';
const dataContainer = document.getElementById('dataContainer');

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
    console.log(response)
  }
  return response.json();
})

.then(data => {
  // Traitement des données récupérées
  console.log(data)
  dataContainer.src = data.image;
})

.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

