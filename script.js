const url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants';
const list = document.createDocumentFragment();
const ul = document.getElementById('list');

  fetch(url)


    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

        authors.map(function(author) {

      console.log(data)

      //SECTION CARD

      let divCard = document.createElement('div');
      divCard.className = "card-holder";
      


      let nom = document.createElement('h2');
      nom.innerHTML = `${author.nom}`;
      divCard.appendChild(nom);
      list.appendChild(divCard);

      let prenom = document.createElement('h3');
      prenom.innerHTML = `${author.prenom}`;
      divCard.appendChild(prenom);
      list.appendChild(divCard);

      var annee = document.createElement('p');
      annee.innerHTML = `${author.promotions}`;     
      divCard.appendChild(annee);
      list.appendChild(divCard);

      let comp = document.createElement('p');
      comp.innerHTML = `${author.competences}`;
      divCard.appendChild(comp);
      list.appendChild(divCard);

            
      let images = document.createElement('img');
      images.src = `${author.image}`;
      divCard.appendChild(images);
      list.appendChild(divCard);

      

    


      });

       ul.appendChild(list);

    })

    .catch(function(error) {
      console.log(data);
    });

     //HEADER JS


    
    const list1 = document.createDocumentFragment();
    const input = document.getElementById('promolist'); 
    
    /* <nav class="header">
            <div class="promotion">
                <label for="promo">Promotion:</label>
                <select name="promo" id="promo">
                    <option value="2021-2022">2021-2022</option>    
                    <option value="2022-2023">2022-2023</option>
                    <option value="2023-2024">2023-2024</option>                    
                </select>
            </div> */
    fetch(url)

  

    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

        authors.map(function(author) {

      console.log(data)

      let divCard = document.createElement('select');
      divCard.className = "header";
      var annee = document.createElement('option');
      annee.innerHTML = `${author.promotions}`;     
      divCard.appendChild(annee);
      list1.appendChild(divCard);
    });

    input.appendChild(list1);

  })

  .catch(function(error) {
    console.log(data);
  });
