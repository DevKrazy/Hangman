window.onload = function() {

    let currentWord = document.getElementById("word").innerHTML;
    let fails = 1;
    let gameState = -1; // -1 = en jeu, 0 = perdu et 1 = gagné

    function onSuccess(request) {
        let wordTag = document.getElementById("word");
        wordTag.innerHTML = request.responseText;

        let imgTag = document.querySelector("div#potence > img")

        // On affiche la potence si l'utilisateur n'a pas découvert
        if (currentWord == request.responseText) {
            fails += 1;
            imgTag.src = "../graphics/potence" + fails + ".png";
        }

        if (fails == 11) {
            imgTag.src = "../graphics/lost.gif";
            gameState = 0;
        }

        // On met à jour le mot courant
        currentWord = request.responseText;

        if (currentWord.includes("-") == false) {
            // On a gagné
            imgTag.src = "../graphics/win.gif";
            gameState = 1;
        }
    }

    function onFailure(request) {
        alert("failure");
    }


    function onClick() {
        if (gameState == -1) {
            if (this.className !== "clicked") {
                this.className = "clicked";
                new simpleAjax("../php/checkWord.php", "post", "letter=" + this.id, onSuccess, onFailure);
            }
        }
    }

    for (let divTag of document.getElementsByClassName("letters")) {
        for (let imgTag of divTag.childNodes) {
            imgTag.onclick = onClick;
        }
    }
}