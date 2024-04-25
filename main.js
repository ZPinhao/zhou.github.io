// Fonction pour afficher la section correspondante


function afficherSection(sectionId) {


    // Masquer toutes les sections


    var sections = document.querySelectorAll('section');


    sections.forEach(function(section) {


        section.style.display = 'none';


    });

 

    // Afficher la section sélectionnée


    var section = document.getElementById(sectionId);


    section.style.display = 'block';


}

 

// Fonction d'initialisation


function initialiser() {


    // Lier les événements de clic aux liens du menu


    var menuLinks = document.querySelectorAll('nav a');


    menuLinks.forEach(function(link) {


        link.addEventListener('click', function(event) {


            event.preventDefault(); // Empêcher le comportement de lien par défaut


            var sectionId = link.getAttribute('href').substring(1);


            afficherSection(sectionId);


        });


    });

 

    // Afficher la section "Accueil" par défaut


    afficherSection('accueil');


}

 

// Appeler la fonction d'initialisation lorsque la page est chargée


window.addEventListener('load', initialiser);