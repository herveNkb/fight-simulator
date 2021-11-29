// Classe Personnage
class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }
  evoluer() { // Fait évoluer le niveau du personnage de 1 à chaque tour
    this.niveau++;
    console.log(this.pseudo + ' passe au niveau ' + this.niveau + ' !');
  }
  verifierSante() { // Vérifie la santé du personnage à chaque tour et indique qu'il à perdu lorsqu'il arrive à 0 ou en dessous de 0
    if (this.sante <= 0) {
      this.sante == 0;
      console.log(this.pseudo + ' a perdu !');
    }
  }
  get informations() { // Récupère les propriétés suivantes, et les retourne lorsqu'on appelle le getter 'informations'
    return (
      this.pseudo +
      ' (' +
      this.classe +
      ') a ' +
      this.sante +
      ' points de vie et est au niveau ' +
      this.niveau +
      '.'
    );
  }
}

// Classe Magicien hérité de la classe Personnage
class Magicien extends Personnage { // Classe Magicien hérite de la classe Personnage grâce à 'extends'
  constructor(pseudo) {
    super(pseudo, 'magicien', 170, 90); // 'super' appel directement la classe héritée, ici la classe Personnage
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque; // Enlève le nombre de point d'attaque (magicien) des point de vie de l'adversaire
    console.log(
      this.pseudo +
        ' attaque ' +
        personnage.pseudo +
        ' en lançant un sort (' +
        this.attaque +
        ' dégâts)'
    );
    this.evoluer(); // Appelle la fonction 'evoluer()' hérité de la classe Personnage et l'affiche  
    personnage.verifierSante(); // Verifie la santé du personnage adverse et l'affiche
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5; // Enlève le nombre de point d'attaque (magicien multiplié par 5, des points de vie adverse)
    console.log(
      this.pseudo +
        ' attaque avec son coup spécial Puissance des Arcanes ' +
        personnage.pseudo +
        ' (' +
        this.attaque * 5 +
        ' dégâts)'
    );
    this.evoluer(); // Appelle la fonction 'evoluer()' hérité de la classe Personnage
    personnage.verifierSante(); // Verifie la santé du personnage adverse
  }
}

// Classe Guerrier hérité de la classe Personnage
class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, 'guerrier', 350, 50); 
  }

  attaquer(personnage) {
    personnage.santé -= this.attaque;
    console.log(
      this.pseudo +
      ' attaque ' +
      personnage.pseudo +
      ' avec son épée (' +
      this.attaque +
      ' dégâts)'
    );
    this.evoluer();
    personnage.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo + 
      ' attaque avec ses Haches de guerre ' +
      personnage.pseudo +
      ' (' +
      this.attaque * 5 +
      ' dégâts)'
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

// Le combat:

// création des joueurs
let loki = new Magicien('Loki');
let thor = new Guerrier('Thor');

// Lancement du combat
console.log(thor.informations);
console.log(loki.informations);
loki.attaquer(thor);
console.log(thor.informations);
thor.attaquer(loki);
console.log(loki.informations);
loki.coupSpecial(thor);