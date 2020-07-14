// Tableaux pour l'aléatoire

const tableauCitationsPhilo = [
    // Début 
    ["Dieu", "La vie sans musique", "La vie", "Le coeur", "L'homme", "La science", "La liberté", "Le monde de la réalité"],
    // Milieu 
    ["est", "n'est pas", "n'est que", "est tout simplement une erreur,", "n'est pas un problème à résoudre mais"],
    // Fin
    ["une ruine de l'âme.", "une chute brusque de la conscience dans le magique.", "une réalité dont il faut faire l'expérience.", "plus heureux qu'un roi malade.", "un animal politique."],
];

const tableauJul = [
    //Début
    ["Ta mère", "La beuh magique", "L'homme", "Dieu", "La liberté", "Le port d'arme", "Les gros bras à Jean-Claude Van Damne", "On", "Le coeur", "Science sans conscience", "La vie sans musique", "Le coeur"],
    // Milieu
    ["s'appelle", "n'est pas", "c'est", "n'est pas un problème à résoudre mais", "ne fait pas", "est tout simplement une erreur"],
    // Fin
    ["la ruine de l'âme.", "des bracos.", "l'OVNI.", "en claquettes.", "une réalité dont il faut faire l'expérience.", "plus heureux qu'un roi malade", "un animal politique.", "en survét'.", "dans le game.", "Tchiki, tchiki, tchikita.", ", wesh alors !"]
];

const tableauAuteur = [
    // Prénom
    ["Blaise", "Emmanuel", "Friedrich", "Karl", "Soren", "Baruch", "Thomas", "Jean-Paul"],
    // Nom
    ["Pascal", "Socrate", "Kant", "Nietzsche", "Platon", "Voltaire", "Marx", "Kierkegaard", "Spinoza", "Hobbes", "Sartre"]
];

// Classes 

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

class randomAuthor {
    constructor(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }

    genererNom() {
        const surname = genererMotAleatoire(this.prenom);
        const name = genererMotAleatoire(this.nom);
        const author = surname + " " + name;
        return author;
    }
}

// Création citations et noms

const citationPhilo = new randomCitations(tableauCitationsPhilo[0], tableauCitationsPhilo[1], tableauCitationsPhilo[2]);
const citationJul = new randomCitations(tableauJul[0], tableauJul[1], tableauJul[2]);
const nomAuteur = new randomAuthor(tableauAuteur[0], tableauAuteur[1]);

// Déclaration des fonctions

function genererMotAleatoire(tableau) {
    return tableau[Math.floor(Math.random() * tableau.length)];
}

function generationCitation(target) {
    let number = document.getElementById("nombre").value;

    if (number == 0 || number > 5) {
        alert('Sélectionner un nombre valide de citations ');
    } else {
        citationGeneree = '';
        for (let i = 0; i < number; i++)

        {
            if (target === "philo") {
                citationGeneree += '&quot'+citationPhilo.genererCitation()+'&quot';
                citationGeneree += '<span class="author"> - ' + nomAuteur.genererNom() + '</span>';
                citationGeneree += '<br /><br />';
            } else if (target === "jul") {
                citationGeneree += '&quot'+citationJul.genererCitation()+'&quot';
                citationGeneree += '<span class="author"> - Jul ' + genererMotAleatoire(tableauAuteur[1]) + '</span>';
                citationGeneree += '<br /><br />';
            } else if (target == "stop") {
                citationGeneree = '';
            }
        }
        $('.textcitation').html('');
        $('.textcitation').html(citationGeneree);
        console.log(citationGeneree)
    }

};

// Génération de citation par le clic sur l'image

$('.imgtype').click(function (e) {
    generationCitation($(e.target).prop('id'));
    $('#title').html($(e.target).attr('href'));
})

// Vider la zone de citation par le clic sur le bouton

$('button').click(function(e) {
    generationCitation($(e.target).prop('id'));
    $('#title').html($(e.target).prop('value'));
})


