// const apiUrl = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants/';
// // const dataImage = document.getElementById('dataImage');
// // const dataContenuCard = document.getElementById('dataContenuCard');
// // const dataCompetences = document.getElementById('dataCompetences');
// // const dataPromo = document.getElementById('dataPromo')

// fetch(apiUrl)

// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })

// .then(data => {  
//   if(data[0].image == "") {
//     dataImage.src = "https://cdn.shopify.com/s/files/1/0490/8384/2713/files/2.-Le-chat-Bengal-le-leopard_600x600.jpg?v=1672839840"
//   }else{
//     console.log(data)
//     dataImage.src = data[0].image;

//   }data.forEach(afficheData); 
// })
// .catch(error => {
//   console.error('There was a problem with the fetch operation:', error);
// });

// fetch('https:portfolios.ern-mende.fr/wp-json/wp/v2/competences')

// .then(data => {  
//   if (promo.value == 'valeur1'){
//     let nbreapprenants = data[0].promotions.count;
//     console.log(nbreapprenants);
//     for(i=0; i<nbreapprenants; i++){
//        let newDiv = document.createElement("div")
//        newDiv.innerHTML() =  "<h2 id='carte" + i + "'></h2> <img id='image-carte"+ i +"' src='" + data.image +"' alt='mugshot carte"+ i +"'></img> <p id='carte-text"+i+"></p> <a id='carte-"+i+"portfolio' href='"+data.link+"'></a> <a id='carte-"+i+"-CV' href='"+data.link+"'></a> <a id='carte-"+i+"linkedin' href='"+data.link+"'></a>"
// }
// }else if(promo.value == 'valeur2'){
// let nbreapprenants = data[0].count;
// console.log(nbreapprenants)
// for(i=0; i<nbreapprenants; i++){
//    let newDiv = document.createElement("div")
//    newDiv.innerHTML() =  "<h2 id='carte" + i + "'></h2> <img id='image-carte"+ i +"' src='" + data.image +"' alt='mugshot carte"+ i +"'></img> <p id='carte-text"+i+"></p> <a id='carte-"+i+"portfolio' href='"+data.link+"'></a> <a id='carte-"+i+"-CV' href='"+data.link+"'></a> <a id='carte-"+i+"linkedin' href='"+data.link+"'></a>"
// }

// }})
// .catch((error)=>{
// console.error(error);
// })

// function afficheData(data){
//   var  dataPromo = document.getElementById('dataPromo');
//   dataImage.src = data.image

//   var elementDiv = document.createElement("div");
//   var p = document.createElement("p");
//   document.body.appendChild(p);
// };

// fetch('https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants')
//     .then(response => {return response.json()})
//     .then((data)=>{
//         console.log(data);
//         let promo = document.getElementById('dataPromo');
//         console.log(promo.value);
//         if (promo.value == 'valeur1'){
//             let nbreapprenants = data[0].promotions.count;
//             console.log(nbreapprenants);
//             for(i=0; i<nbreapprenants; i++){
//                let newDiv = document.createElement("div")
//                newDiv.innerHTML() =  "<h2 id='carte" + i + "'></h2> <img id='image-carte"+ i +"' src='" + data.image +"' alt='mugshot carte"+ i +"'></img> <p id='carte-text"+i+"></p> <a id='carte-"+i+"portfolio' href='"+data.link+"'></a> <a id='carte-"+i+"-CV' href='"+data.link+"'></a> <a id='carte-"+i+"linkedin' href='"+data.link+"'></a>"
//         }
//     }else if(promo.value == 'valeur2'){
//         let nbreapprenants = data[0].count;
//         console.log(nbreapprenants)
//         for(i=0; i<nbreapprenants; i++){
//            let newDiv = document.createElement("div")
//            newDiv.innerHTML() =  "<h2 id='carte" + i + "'></h2> <img id='image-carte"+ i +"' src='" + data.image +"' alt='mugshot carte"+ i +"'></img> <p id='carte-text"+i+"></p> <a id='carte-"+i+"portfolio' href='"+data.link+"'></a> <a id='carte-"+i+"-CV' href='"+data.link+"'></a> <a id='carte-"+i+"linkedin' href='"+data.link+"'></a>"
//     }

// }})
//     .catch((error)=>{
//       console.error(error);
// })



// fetch(apiUrl)

// .then(response => {return response.json()})
//     .then((data)=>{
//         console.log(data);
//         let promo = document.getElementById('dataPromo');
//         console.log(promo.value);
//         if (promo.value == 'valeur1'){
//             let nbreapprenants = data[0].promotions.count;
//             console.log(nbreapprenants);
//             for(i=0; i<nbreapprenants; i++){
//                let newDiv = document.createElement("div")
//                newDiv.innerHTML() =  "<h2 id='carte" + i + "'></h2> <img id='image-carte"+ i +"' src='" + data.image +"' alt='mugshot carte"+ i +"'></img> <p id='carte-text"+i+"></p> <a id='carte-"+i+"portfolio' href='"+data.link+"'></a> <a id='carte-"+i+"-CV' href='"+data.link+"'></a> <a id='carte-"+i+"linkedin' href='"+data.link+"'></a>"
//         }

//     }else if(promo.value == 'valeur2'){
//         let nbreapprenants = data[0].count;
//         console.log(nbreapprenants)
//         for(i=0; i<nbreapprenants; i++){
//            let newDiv = document.createElement("div")
//            newDiv.innerHTML() =  "<h2 id='carte" + i + "'></h2> <img id='image-carte"+ i +"' src='" + data.image +"' alt='mugshot carte"+ i +"'></img> <p id='carte-text"+i+"></p> <a id='carte-"+i+"portfolio' href='"+data.link+"'></a> <a id='carte-"+i+"-CV' href='"+data.link+"'></a> <a id='carte-"+i+"linkedin' href='"+data.link+"'></a>"
//     }


//   }})
//   .catch((error)=>{
//     console.error(error);
// })

const url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants';

const list = document.createDocumentFragment();
const ul = document.getElementById('list');

// <div class="card-holder">
// <img src="https://picsum.photos/id/238/280/250" alt="Image 2">
// <h3>Card 2</h3>
// <a class="" href="https://www.linkedin.com/">
//     <img class="" src="image/linkedin.png" alt="">
//     <img class="icon_img" src="image/github.png" alt="">
// </a>
// </div>
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

        authors.map(function(author) {

      console.log(data)

      let divCard = document.createElement('div');
      divCard.className = "card-holder";

      let avatar = document.createElement('img');
      avatar.innerHTML = `${author.image}`;
      divCard.appendChild(avatar);
      list.appendChild(divCard);

      let nom = document.createElement('h2');
      nom.innerHTML = `${author.nom}`;
      divCard.appendChild(nom);
      list.appendChild(divCard);

      let prenom = document.createElement('h3');
      prenom.innerHTML = `${author.prenom}`;
      divCard.appendChild(prenom);
      list.appendChild(divCard);

      });

      ul.appendChild(list);

    })

    .catch(function(error) {
      console.log(data);
    });

    