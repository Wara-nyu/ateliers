=> Lorsqu'on ecrit `fill(red, green, blue)' est global.
Quand on le mettait dans le constuctor, il affichait différente couleur, grâce au `random()`, à chaque frame; puis blanc car il n'y a pas de couleur donner au "pinceau" pour la fonction "create".
Quand on le mettait dans la fonction "create", le fill est lier a cette dernière fonction donc à chaque frame une nouvelle couleur.

Si on instancie la couleur donne à l'étoile, on n'a plus ce clignottement.
(à voir si on peut faire clignoté les étoiles entre couleur donner par ramdom, blanc et noir ?)
