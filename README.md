# Fight Simulator


---------------------------------------------------------------


## Projet orienté sur le concept de la POO

__Utilisation des *classes* et *l'héritage* dans un petit jeu qui se joue dans la console__

------------------

### Comprendre la structure des classes
  
    

__La classe Personnage__

  *Propriétés:*  
  * pseudo
  * classe (magicien ou guerrier)
  * santé
  * attaque
  * niveau (initilisé à 1)

  *Méthodes:*  
  * __evoluer()__ - Augmente le niveau personnage de 1, et affiche "[pseudo] passe au niveau [niveau]!"
  * __verifierSante()__ - Vérifiez si la santé du personnage est inférieure ou égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de vie négatifs et affiche "[pseudo] à perdu !".

  *Getters:*  
   * __informations()__ - Affiche les informations du personnage "[pseudo] (classe) a [sante] points de vie et est au niveau [niveau]!"

   ---

   __La classe Magicien *hérite* de Personnage__

  *Propriétés:*  
  * Aucune. Se contente d'appeler le constructeur de Personnage, en lui donnant en paramétres (pseudo, "magicien", 170, 90).  

 *Méthodes:*  
 * __attaquer(personnage)__ - Prends en paramétre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] en lançant un sort ([attaque]  dégats)". Ensuite, appelle la fonction __evoluer()__. Puis la fonction __verifierSante()__ du personnage adverse.  
 * __coupSpecial(personnage)__ - Prends en paramètre le personnage adverse (donc un objet). Réduit la santé du pesonnage adverse selon le nombre de dégâts que fait le personnage en cours, __fois 5__, et affiche "[pseudo] attaque avec son coup spécial puissance des arcanes [personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la fonction __evoluer()__. Puis, appelle la fonction __verifierSante()__ du personnage adverse.  
  