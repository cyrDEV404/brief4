<?php 'header.php' ?>


<body>
    <header>        
        <nav class="container">
            <div>
                <h1>Trombinoscope L'Ecole Du Numérique</h1>
            </div>
            <div>
                <label for="promo">Choisissez une promotion:</label>
                    <select name="promo" id="promo">
                        <option value="2021-2022">2024-2025</option>    
                        <option value="2022-2023">2022-2023</option>
                        <option value="2023-2024">2024-2025</option>                    
                    </select>
            </div>
            <div class="search">
                <input type="search" placeholder="Search">
            </div>
            </div>
            <div class="competences">
                <h4>Profil</h4>
                <input type="checkbox" id="competence-1" value="competence-1">
                <label for="competence-1"> FrontEnd</label><br>
                <input type="checkbox" id="competence-2" value="competence-2">
                <label for="competence-2"> BackEnd</label><br>             
            </div>
            <input type="checkbox" id="competence-2" value="competence-2">
                <label for="competence-2">Obtenir des bananes</label><br>  
        </nav> 
    </header>

</body>


<?php 'footer.php' ?>
