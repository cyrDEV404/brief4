const apiUrl = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants/';
const dataImage = document.getElementById('dataImage');
const dataContenuCard = document.getElementById('dataContenuCard');

fetch(apiUrl)

.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})

.then(data => {  
  if(data[0].image == "") {
    dataImage.src = "https://cdn.shopify.com/s/files/1/0490/8384/2713/files/2.-Le-chat-Bengal-le-leopard_600x600.jpg?v=1672839840"
  }else{
    console.log(data)
    dataImage.src = data[0].image;

  }data.forEach(afficheData); 
    
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

function afficheData(data){
  var  dataPromo = document.getElementById('dataPromo');
  dataImage.src = data.image

  var elementDiv = document.createElement("div");
  var p = document.createElement("p");
  document.body.appendChild(p);

  
  

  


};