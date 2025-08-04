const testimonials = [
    {
        titre: "Carrefour Market",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        titre: "Orange Cameroun",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        titre: "Mtn Cameroun",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        titre: "SpaceX",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        titre: "Facebook",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        titre: "DropBox",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

// Affichahge des témoignages

const testimonialContainer = document.getElementById("testimonial-container");

function displayTestimonial(index) {
  const testimonial = testimonials[index];
  testimonialContainer.innerHTML = `
    <div class="testimonial">
      <h1 class="font-bold">${testimonial.titre}</h1>
      <p>${testimonial.contenu}</p>
    </div>
  `;
}

// Afficher le premier témoignage au chargement de la page
displayTestimonial(0);


// Boutton de navigation
let currentTestimonialIndex = 0;

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  displayTestimonial(currentTestimonialIndex);
  
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  displayTestimonial(currentTestimonialIndex);
}

// Ajouter des écouteurs d'événements aux boutons
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

nextButton.addEventListener("click", nextTestimonial);
prevButton.addEventListener("click", prevTestimonial);