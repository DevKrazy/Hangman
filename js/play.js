window.onload = function() {

    let currentWord = document.getElementById("currentword").innerHTML;
    let menuTag = document.getElementById("menu");
    let potenceId = 1;
    let gameState = 1; // 1 en jeu; 0 terminé

    function onSuccess(request) {
        let wordTag = document.getElementById("currentword");
        let imgTag = document.querySelector("div#potence > img");

        wordTag.innerHTML = request.responseText;

        // On affiche la potence si l'utilisateur n'a pas découvert
        if (currentWord == request.responseText) {
            potenceId += 1;
            imgTag.src = "../graphics/potence" + potenceId + ".png";
        }

        currentWord = request.responseText; // On met à jour le mot courant

        let messageTag = document.getElementById("message");

        // On vérifie si le jeu est éventuellement terminé
        if (potenceId == 11) {
            // On a perdu
            imgTag.src = "../graphics/lost.gif";
            gameState = 0;

            messageTag.innerHTML = "On ne peut pas être bon partout... Cliquez pour révéler le mot : "
            new simpleAjax("../php/getWord.php", "post", "", function (request) {
                let wordTag = document.getElementById("word");
                wordTag.style.visibility = "visible";
                wordTag.onclick = function () {
                    messageTag.innerHTML = "On ne peut pas être bon partout... Le mot était : ";
                    wordTag.innerHTML = request.responseText;
                }
            }, onFailure);
        }

        if (currentWord.includes("-") == false) {
            // On a gagné
            imgTag.src = "../graphics/win.gif";
            gameState = 0;
            messageTag.innerHTML = "Bravo ! Vous avez du en corriger beaucoup des projets !"
        }

        // Opérations à effectuer quand la partie est terminée
        if (gameState == 0) {
            messageTag.style.visibility = "visible";
            menuTag.style.visibility = "visible";
            document.getElementById("alphabet").style.visibility =  "hidden";
        }
    }

    function onFailure(request) {
        alert("Erreur avec la requête AJAX : " + request.responseText);
    }


    function onClick() {
        if (gameState == 1) {
            if (this.className !== "clicked") {
                this.className = "clicked";
                new simpleAjax("../php/checkWord.php", "post", "letter=" + this.id, onSuccess, onFailure);
            }
        }
    }

    new simpleAjax("../php/getIndication.php", "post", "", function (request) {
        document.getElementById("indication").innerHTML = "Indication : " + request.responseText;
    }, onFailure);



    // Assigne la fonction onClick à toutes les lettres
    for (let divTag of document.getElementsByClassName("letters")) {
        for (let imgTag of divTag.childNodes) {
            imgTag.onclick = onClick;
        }
    }
}