const filterBar = document.querySelector("#filterBar");
const promotion = document.querySelector("#promotion");
const searchBar = document.querySelector("#name");
const competences = document.querySelectorAll(".inputSkill");

const ajaxRender = (promotion, competences, searchBar) => {
    let param = "";

    if (promotion.value != "") {
        param += "promotion=" + encodeURIComponent(promotion.value);
    }

    if (searchBar.value != "") {
        param += param === "" ? "" : "&";
        param += "name=" + encodeURIComponent(searchBar.value);
    }

    competences.forEach((competence) => {
        if (competence.checked) {
            param += param === "" ? "" : "&";
            param += "competences[]=" + encodeURIComponent(competence.value);
        }
    });

    if (param !== "") {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "ajaxRender.php?" + param, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(null);

        xhr.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                console.log(this);
                document.getElementById("liste-apprenants").innerHTML = this.responseText;
            }
        };
    }
};

promotion.addEventListener("change", (e) => {
    e.preventDefault();
    ajaxRender(promotion, competences, searchBar);
});

competences.forEach((competence) => {
    competence.addEventListener("change", (e) => {
        e.preventDefault();
        ajaxRender(promotion, competences, searchBar);
    });
});

searchBar.addEventListener("keyup", (e) => {
    e.preventDefault();
    ajaxRender(promotion, competences, searchBar);
});
