=> importation de la bibliothèque js processing dans index.html ligne 7 qui va chercher via internet la bibliothèque.
**Si vous n'avez pas de connexion vous ne pourrait pas exécuter le programme.**

=> **Star** 
- Lorsqu'on ecrit `fill(red, green, blue)' est global.
Quand on le mettait dans le constuctor, il affichait différente couleur, grâce au `random()`, à chaque frame; puis blanc car il n'y a pas de couleur donner au "pinceau" pour la fonction "create".
Quand on le mettait dans la fonction "create", le fill est lier a cette dernière fonction donc à chaque frame une nouvelle couleur pour chaque étoile.

- Si on instancie la couleur donne à l'étoile, on n'a plus ce clignottement.
Pour palier à ça, j'ai introduit une fonction qui choisi entre 0 et 1 alléatoirement. Si c'est 0, l'étoile est dessiné sinon non.

- `this.starColor.r` le tout est égal à un nombre donc on peut fait :
`this.starColor.r = 255`

- si on fait:
`c = random(255)`
puis
`fill(this.starColor.c,this.starColor.c,this.starColor.c);`
On aura bien une valeur pour r,g et b mais ça sera la même donc on n'aura que des nuances de gris car r = g = b.

- J'ai décidé arbitrairement que l'étoile spwan à width + 5, même si pour les étoiles ça ne se voit pas (surtout avec l'effet de clignotement), je préfère faire ça.

- dans la fonction newStar(), on donne en paramètre un valeur par défaut : x = width +5.
C'est à dire que this.starX = width + 5 si on ne donne aucun paramètre lors de l'appel de cette fonction.
Ici, on donne, dans le constucteur, à this.newStar() le paramètre random(w) pour que l'étoile soit déssiner avec un x aléatoire la première fois.
Puis puisque x sera égal à la valeur par défaut, l'étoile sera à width + 5 pour les tours suivants.
Tout ça pour factoriser le code, on n'aura pas de répétition des autre variable puisque la seule chose qui change n'est que this.starX.

- Instanciation de starSpeed pour que les étoiles aient des vietesse différente ce qui crée un sensation de profondeur.
Ici on met cette variable dans newStar pour qu'à chaque tour elle aquière une vitesse différente.
Si on l'avais déclare dans le construcor, elle aura toujours la même vitesse.


=> **Ship**
- Il faut déclarer "let ship" en dehors des fonctions;
   l'assigner dans la fonction setup ( si on l'assigne dans draw on le ferait à chaque frame);
   et dessiner le vaisseau dans la fonction draw => particularité de processing.

- Finalement on a pas besoin de x, y ou multifier dans le constructor ni dans le super() de sideship.
Car on n'a pas mis en paramètre du constucteur dans ship.js.

- J'ai déclaré `this.shipLength = this.multiplier*30' dans le constructeur de `Ship`
mais je ne peux pas l'utiliser dans drawShip()
car il prendra toujours la valeur de `this.multiplier = 7` pour dessinner les vaisseauxdonc elle auront des formes étranges.

- J'ai mis le spawn des petits vaisseaux entre 5 et 4000, pour ne pas les "croiser" trop souvent.
c'est le même raisonnement qui m'incite à ne faire réatribuer un nouveau vaisseau qu'à partir de 6000px comparer au centre de la fenêtre.

- J'ai introduit la variable inTheMiddle pour pouvoir intéragire plus facilement avec les differents fichiers/fonctions/classes plus facilement et non tout mettre dans ship pour activer les différentes chose qui sont lier à ce paramètre.

- Pour que les vaisseaux qui sont dans le même sens que le vaiseau principale
mais qui on une vitesse négative, n'apparaissent pas avant que le vaisseau principale n'atteigne le milieu de l'écran,
On a introduit une variable `this.trigger` pour dire si les vaisseaux sont dans cette catégorie
si oui `this.trigger = False`
et il faudrat que la fonction activate() passe `this.trigger = true` lorsque le vaisseaux principal atteint le centre de la fenêtre.
(c'est pour faire un effet de caméra, le vaisseau principale entre dans le cadre puis lorsqu'il atteint le centre la caméra le suit.
il devient donc étranque que les vaisseaux qui sont dans cette catégorie (qui sont "stationnaire") rendtre dans le cadre de la caméra sans qu'elle ne bouge avant)


=> pour que les vaisseaux les plus petits ne passe pas devant les plus gros, à la ligne 36,37,38 on trie l'shipArray.

=> la fonction "coinToss" ne fait que "lancer une pièce" pour me donner soit O soit 1.


=> Puisqu'on est en processing 
la fonction random() peut prendre 2 paramètres pour faire un interval,
on n'a donc pas besoin de faire une fonction 
> Rand(min, max){
>   return (Math.floor(Math.random() * (max-min) + min));
> }
D'ailleurs math.floor transforme en int le resultat du random.
