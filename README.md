# duel-boardgame

duel-boardgame est un jeu de plateau pour 2 joueurs entièrement réalisé en JavaScript. Il a été conçu dans le cadre de la formation SimplOnline (http://simplonline.simplon.co/) et du site OpenClassrooms (http://openclassrooms.com/courses/creez-un-jeu-de-plateau-tour-par-tour-en-javascript).

## Structure des fichiers

Les fichiers de ce code sont regroupés en fonction de leur nature et de leur utilité :

* **index.html** : Fichier HTML contenant la structure de la page présentant le jeu et chargée de l'appel des scripts
* *style* : Dossier contenant les feuilles de style CSS
    * **style.css** : Feuille de style principale du projet
* *images* : Dossier contenant les icônes et images d'illustration
    * *weapon-x.png* : Icône d'illustration de l'arme portant l'id x
    * *player-x.png* : Icône d'illustration du joueur de couleur x
* *librairies* : Dossier contenant les librairies et les polyfills JS
    * *jquery-2.1.4.js* : Librairie jQuery, utilisée dans le cadre de ce projet
    * **polyfill.js** : Bibliothèque de polyfills utilisés pour assurer la compatibilité du code avec le plus grand nombre de navigateurs
* **classes** : Dossier contenant le code des principales classes créées pour ce projet
    * **cell.js** : Code de la classe Cell, représentant une case du plateau de jeu
    * **board.js** : Code de la classe Board, représentant le plateau de jeu, et gérant le positionnement et le déplacement des objets
    * **weapon.js** : Code de la classe Weapon, représentant les armes et leurs caractéristiques
    * **player.js** : Code de la classe Player, représentant les joueurs, leurs caractéristiques, et leurs capacités de mouvement et de combat
* **game** : Dossier contenant le code chargé du contrôle de l'exécution et des règles du jeu
    * **game-engine.js** : Classe Game, assurant le déroulement principal du jeu, de l'initialisation du plateau à la fin de partie
    * **game-controller.js** : Fichier de code chargé des interactions avec l'utilisateur, il est le point d'entrée de l'ensemble du jeu et porte les variables globales
    * **game-display.js** : Fichier de code chargé de l'affichage du jeu dans la fenêtre du navigateur, il fait un usage intensif de jQuery

## Améliorations potentielles

Ces idées sont évoquées comme des moyens d'améliorer le jeu au delà du cadre de l'exercice initial. Elles pourront être mises en oeuvre à l'avenir, selon l'intérêt et l'utilité de ce projet :

* Améliorations esthétiques
    * Meilleur graphisme des icônes et de l'interface
    * Responsive Design
* Amélioration de gameplay
    * Vérification, lors de l'initialisation du plateau de jeu, qu'aucun joueur n'est isolé de manière hermétiques des autres joueurs
    * Jeu à plus de 2 joueurs
* Améliorations techniques
    * Refactoring permettant de réduire au maximum l'utilisation des variables globales
