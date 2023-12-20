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

      // var promotion = document.createElement('p');   
      // promotion.innerHTML = `${author.promotions}`;    

      // divCard.appendChild(promotion);
      // list.appendChild(divCard);

      let comp = document.createElement('p');
      comp.innerHTML = `${author.competences}`;
      divCard.appendChild(comp);
      list.appendChild(divCard);

            
      let images = document.createElement('img');
      images.src = `${author.image}`;
      divCard.appendChild(images);
      list.appendChild(divCard);

      

      let linkedin = document.createElement('a');     
      linkedin.className = "card-holder link-item link-lk";     
 
      linkedin.href = `${author.link}`;
      console.log(linkedin);
      divCard.appendChild(linkedin);
      list.appendChild(divCard);


      let promotion = document.createElement('p'); 
      promotion.innerHTML = `${author.promotions}`;
      divCard.appendChild(promotion);
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

    const url1 = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions'


    fetch(url1)

    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;
      // var name = promotion;
      //   name => Array[
      //   "0", "name"
      // ]

        authors.map(function(author) {

      console.log(data)

      let divCard = document.createElement('select');
      divCard.className = "header";
      
      var promotion = document.createElement('option');
      
      promotion.innerHTML = `${author.promotions}`; 
          
      divCard.appendChild(promotion);
      list1.appendChild(divCard);
    });

    input.appendChild(list1);

  })

  .catch(function(error) {
    console.log(data);
  });
  const url2 = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/competences'
  const boxlist = document.createDocumentFragment();
  const checkbox = document.getElementById('boxlist');

  fetch(url2)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let authors = data;
    // var name = promotion;
    //   name => Array[
    //   "0", "name"
    // ]

      authors.map(function(author) {

    console.log(data)
    let divCard = document.createElement('div');
      divCard.className = "card-holder";     

       // creating checkbox element
       var checkbox = document.createElement('input');
             
       // Assigning the attributes
       // to created checkbox
       checkbox.type = "checkbox";
       checkbox.name = "name";
       checkbox.value = "value";
       checkbox.id = "id";

      let divCompetences = document.createElement('div');
      divCompetences.className = "competences choix";     
      console.log(data)
      var profil = document.createElement("checkbox");
      profil.setAttribute("type", "checkbox");
      profil.innerHTML = `${author.competences}`;
      divCompetences.appendChild(profil);
      boxlist.appendChild(divCompetences);

             
            // creating checkbox element
            var checkbox = document.createElement('input');
             
            // Assigning the attributes
            // to created checkbox
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "id";
             
            // creating label for checkbox
            var label = document.createElement('label');
             
            // assigning attributes for 
            // the created label tag 
            label.htmlFor = "id";
             
            // appending the created text to 
            // the created label tag 
            label.appendChild(document.createTextNode('This is the label for checkbox.'));
             
            // appending the checkbox
            // and label to div
            checkbox.appendChild(checkbox);
            checkbox.appendChild(label);
  });

  checkbox.appendChild(boxlist);

})

.catch(function(error) {
  console.log(data);
});
