document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const accueilText = document.querySelector(".accueil-text");
    setTimeout(() => {
        accueilText.style.opacity = "1";
    }, 500);
});


document.getElementById("rdv-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la page de se recharger

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;
    let date = document.getElementById("date").value;
    let heure = document.getElementById("heure").value;
    let message = document.getElementById("message").value;

    // Envoyer les données via EmailJS
    emailjs.send("service_i4vhv7n", "template_z8nj39r", {
        nom: nom,
        email: email,
        telephone: telephone,
        date: date,
        heure: heure,
        message: message
    }, "CaF8FJbbud-u7UZgE")
    .then(function(response) {
        alert("✅ Votre demande a été envoyée avec succès !");
        console.log("Message envoyé avec succès !", response);
    }, function(error) {
        alert("❌ Une erreur s'est produite. Réessayez !");
        console.error("Erreur EmailJS:", error);
    });
});

document.getElementById("rdv-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmation").style.display = "block";
    setTimeout(() => {
        document.getElementById("confirmation").style.display = "none";
    }, 3000);
    this.reset();
});
