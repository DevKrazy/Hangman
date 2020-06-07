# Hangman
[Projet Polytech d'ADW](https://www.youtube.com/watch?v=aADxo9SHy7o&feature=youtu.be)

### Consignes
* La page index.html doit être un minimum jolie
* Le mot à trouver n'est pas stocké sur la page web
* Une fois la page de jeu chargée, elle n'est pas rechargée
* Elle est rechargée lorsque l'on veut démarrer une nouvelle partie
* On ignorera les accents dans les mots
* Quand on clique sur une lettre : 
    * requête AJAX qui envoie la lettre cliquée au serveur
    * le serveur renvoie le mot partiel (avec des tirets) et ce mot est aussi stocké sur le serveur
    * *Vérifier si le mot partiel a changé pour update l'image de potence*
    * L'aspect de la lettre change pour montrer qu'on a cliqué dessus et on ne peut plus cliquer dessus
* On stocke dans **$_SESSION** le mot à deviner et le mot partiel 
* Fin de partie :
    * On doit cliquer sur un élément pour afficher le mot
    * Le jeu nous propose deux boutons : rejouer et revenir à l'accueil
    
* Idées facultatives :
    * Bouton qui toggle l'indication
    * Animation du bonhomme qui tombe si on perd et qui est sauvé si on gagne

