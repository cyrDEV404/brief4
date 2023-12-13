<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="script.js" defer></script>
    <title>brief4-trombinoscope</title>
</head>
<body>
<header> 
    <div>
       <h1>Trombinoscope L'Ecole Du Numérique</h1>
   </div>   

   <nav class="header">
       <div class="promotion">
           <label for="promo" class='promo'>Promotion:</label>
           <select name="promo" id="promo">  
               <option value="2022-2023">2022-2023</option>
               <option value="2023-2024">2023-2024</option>                    
           </select>
       </div>

       <div class="recherche">
           <input  id="champ"  placeholder="Nom et prénom de l'apprenant">
       </div>
       
       <div class="competences">
           <h4>Compétences:</h4>
           <div class="choix">
               <label for="competence-1"> FrontEnd</label>
               <input type="checkbox" id="competence-1" value="competence-1">                   
           </div>
           <div class="choix">
               <label for="competence-2"> BackEnd</label>
               <input type="checkbox" id="competence-2" value="competence-2">                    
           </div>
           <div class="choix">
               <label for="competence-2">Obtenir des bananes</label>
               <input type="checkbox" id="competence-3" value="competence-3">                  
           </div>
       </div>
   </nav> 
</header>
<body>