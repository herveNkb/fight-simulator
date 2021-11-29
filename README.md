# Fight Simulator

---

## Projet orienté sur le concept de la POO

**Utilisation des _classes_ et _l'héritage_ dans un petit jeu qui se joue dans la console**

---

### Comprendre la structure des classes

**La classe Personnage.**

_Propriétés:_

- pseudo
- classe (magicien ou guerrier)
- santé
- attaque
- niveau (initilisé à 1)

_Méthodes:_

- **evoluer()** - Augmente le niveau personnage
- **verifierSante()** - Vérifiez si la santé du personnage est inférieure ou égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de vie négatifs et affiche "[pseudo] à perdu !".

_Getters:_

- **informations()** - Affiche les informations du personnage "[pseudo] (classe) a [sante] points de vie et est au niveau [niveau]!"

---

**La classe Magicien _hérite_ de Personnage.**

_Propriétés:_

- Aucune. Se contente d'appeler le constructeur de Personnage, en lui donnant en paramétres (pseudo, "magicien", 170, 90). Pour initialiser un joueur, il faut appeler le constructeur de la classe, et juste donner un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

_Méthodes:_

- **attaquer(personnage)** - Prends en paramétre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] en lançant un sort ([attaque] dégats)". Ensuite, appelle la fonction **evoluer()**. Puis la fonction **verifierSante()** du personnage adverse.
- **coupSpecial(personnage)** - Prends en paramètre le personnage adverse (donc un objet). Réduit la santé du pesonnage adverse selon le nombre de dégâts que fait le personnage en cours, **fois 5**, et affiche "[pseudo] attaque avec son coup spécial puissance des arcanes [personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la fonction **evoluer()**. Puis, appelle la fonction **verifierSante()** du personnage adverse.

---

**La classe Guerrier _hérite_ de Personnage.**

_Propriétés:_

- Aucune. Se contente d'appeler le constructeur de Personnage, en lui donnant en paramètre (pseudo, "guerrier", 350, 50). Pour initialiser un joueur, il faut appeler le constructeur de la classe, et juste donner un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

_Méthodes:_

- **attaquer(personnage)** - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] avec son épée ([attaque] dégâts)". Ensuite, appelle la fonction **evoluer()**. Puis, appelle la fonction **verifierSante()** du personnage adverse.
- **coupSpecial(personnage)** - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personne en cours, **fois 5**, et affiche "[pseudo] attaque avec son coup spécial haches de guerre [personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la fonction **evoluer()**. Puis, appelle la fonction **verifierSante()** du personnage adverse.
