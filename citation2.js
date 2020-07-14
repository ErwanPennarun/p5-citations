// Tableau pour l'aléatoire

const tableauCitationsPhilo = [
    // Début 
    ["Dieu", "La vie sans musique", "La vie", "Le coeur", "L'homme", "La science", "La liberté", "Le monde de la réalité"],
    // Milieu 
    ["est", "n'est pas", "n'est que", "est tout simplement une erreur,", "n'est pas un problème à résoudre mais"],
    // Fin
    ["une ruine de l'âme.", "une chute brusque de la conscience dans le magique.", "une réalité dont il faut faire l'expérience.", "plus heureux qu'un roi malade.", "un animal politique."],
];

// Classe citation aléatoire

class randomCitations {
    constructor(debut, milieu, fin) {
        this.debut = debut;
        this.milieu = milieu;
        this.fin = fin;
    }

    genererCitation() {
        const start = genererMotAleatoire(this.debut);
        const middle = genererMotAleatoire(this.milieu);
        const end = genererMotAleatoire(this.fin);

        const citation = start + " " + middle + " " + end;
        return citation;
    }
}

// Création citation

const citationPhilo = new randomCitations(tableauCitationsPhilo[0], tableauCitationsPhilo[1], tableauCitationsPhilo[2]);

// Déclaration des fonctions

function genererMotAleatoire(tableau) {
    return tableau[Math.floor(Math.random() * tableau.length)];
}

$('#generer').click(function () {
    let citationGeneree = citationPhilo.genererCitation();
    console.log(citationGeneree);
});