=> importation de la bibliothèque js processing dans index.html ligne 7 qui va chercher via internet la bibliothèque.
**Si vous n'avez pas de connexion vous ne pourrait pas exécuter le programme.**

=> **Star** 
- Lorsqu'on ecrit `fill(red, green, blue)' est global.
Quand on le mettait dans le constuctor, il affichait différente couleur, grâce au `random()`, à chaque frame; puis blanc car il n'y a pas de couleur donner au "pinceau" pour la fonction "create".
Quand on le mettait dans la fonction "create", le fill est lier a cette dernière fonction donc à chaque frame une nouvelle couleur pour chaque étoile.

- Si on instancie la couleur donne à l'étoile, on n'a plus ce clignottement.
Pour palier à ça, j'ai introduit une fonction qui choisi entre 0 et 1 alléatoirement. Si c'est 0, l'étoile est dessiné sinon non.

- this.starColor.r le tout est égal à un nombre donc on peut fait :
`this.starColor.r = 255`

- si on fait:
`c = random(255)`
puis
`fill(this.starColor.c,this.starColor.c,this.starColor.c);`
On aura bien une valeur pour r,g et b mais ça sera la même donc on n'aura que des nuances de gris car r = g = b.

- J'ai décidé arbitrairement que l'étoile spwan à width + 5, même si pour les étoiles ça ne se voit pas (surtout avec l'effet de clignotement), je préfère faire ça.
J'aurais le même raisonnement pour les vaisseaux.

- dans la fonction newStar(), on donne en paramètre un valeur par défaut : x = width +5.
C'est à dire que this.starX = width + 5 si on ne donne aucun paramètre lors de l'appel de cette fonction.
Ici, on donne, dans le constucteur, à this.newStar() le paramètre random(w) pour que l'étoile soit déssiner avec un x aléatoire la première fois.
Puis puisque x sera égal à la valeur par défaut, l'étoile sera à width + 5 pour les tours suivants.
Tout ça pour factoriser le code, on n'aura pas de répétition des autre variable puisque la seule chose qui change n'est que this.starX.

- Instanciation de starSpeed pour que les étoiles aient des vietesse différente ce qui crée un sensation de profondeur.
Ici on met cette variable dans newStar pour qu'à chaque tour elle aquière une vitesse différente.
Si on l'avais déclare dans le construcor, elle aura toujours la même vitesse.


=> **Ship**
- Il faut déclarer la variable "ship" en dehors des fonctions
   l'assigner dans la fonction setup ( si on l'assigne dans draw on le ferait à chaque frame)
   et dessiner le vaisseau dans la fonction draw => particularité de processing.

-


=> Puisqu'on est en processing la fonction random() peut prendre 2 paramètres pour faire un interval, on n'a donc pas besoin de faire une fonction 
> Rand(min, max){
>   return (Math.floor(Math.random() * (max-min) + min));
> }
D'ailleurs math.floor transforme en int le resultat du random.
