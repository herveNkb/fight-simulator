# Fight Simulator


---------------------------------------------------------------


## Projet orienté sur le concept de la POO

__Utilisation des *classes* et *l'héritage* dans un petit jeu qui se joue dans la console__

------------------

### Comprendre la structure des classes


__La classe Personnage__

  *Propriété:*  
    * pseudo
    * classe (magicien ou guerrier)
    * santé
    * attaque
    * niveau (initilisé à 1)

  *Méthodes:*  
    * __evoluer()__ - Augmente le niveau personnage de 1, et affiche  
    "[pseudo] passe au niveau [niveau]!"
    * __verifierSante()__ - Vérifiez si la santé du personnage est  
    inférieure ou égale à 0. Si c'est le cas, réinitialise la santé à  
    0 pour ne pas avoir de vie négatifs et affiche "[pseudo] à perdu !".

  *Getters:*  
    * __informations()__ - Affiche les informations du personnage "[pseudo]  
    (classe) a [sante] points de vie et est au niveau [niveau]!"