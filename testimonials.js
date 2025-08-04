const testimonials = [
    {
        titre: "Carrefour Market",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        titre: "Orange Cameroun",
        contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem expedita deleniti necessitatibus pariatur culpa unde dolor vero reprehenderit odio.",
    },
    {
        titre: "Mtn Cameroun",
        contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia totam magnam, ratione doloribus voluptatum reprehenderit ipsum libero voluptate, vel laborum assumenda fugit unde odit? Harum animi corporis minus enim!",
    },
    {
        titre: "SpaceX",
        contenu: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus sit, quasi explicabo repudiandae iste, reiciendis consequuntur, totam praesentium ut distinctio magnam ratione! Tempora!",
    },
    {
        titre: "Facebook",
        contenu: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, atque voluptatem. Doloribus expedita enim id. Ex iusto consectetur ratione nisi ipsa sequi animi tenetur officiis?",
    },
    {
        titre: "DropBox",
        contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fuga necessitatibus, corporis placeat ipsa optio recusandae itaque, perferendis libero impedit hic aliquam.",
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