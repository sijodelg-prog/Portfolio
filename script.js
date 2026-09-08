/* ==========================================================================
   Cap École France — Interactions
   ========================================================================== */

// Année dans le pied de page
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
});

// Fermer le menu après un clic sur un lien (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* --------------------------------------------------------------------------
   Envoi du formulaire via Formspree (AJAX) pour rester sur la page.
   Fonctionne dès que l'action du formulaire pointe vers un vrai ID Formspree.
   -------------------------------------------------------------------------- */
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  // Si l'ID Formspree n'a pas encore été configuré, on laisse un message clair.
  if (form.action.includes("VOTRE_ID_FORMSPREE")) {
    e.preventDefault();
    status.textContent =
      "Formulaire non encore configuré : ajoutez votre identifiant Formspree dans index.html.";
    status.className = "form-status err";
    return;
  }

  e.preventDefault();
  const data = new FormData(form);
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Envoi…";
  status.textContent = "";
  status.className = "form-status";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      status.textContent = "Merci ! Votre demande a bien été envoyée. Nous vous recontactons rapidement.";
      status.className = "form-status ok";
    } else {
      const json = await res.json().catch(() => ({}));
      status.textContent =
        (json.errors && json.errors.map((x) => x.message).join(", ")) ||
        "Une erreur est survenue. Réessayez ou contactez-nous par téléphone.";
      status.className = "form-status err";
    }
  } catch (err) {
    status.textContent = "Connexion impossible. Vérifiez votre réseau ou appelez-nous directement.";
    status.className = "form-status err";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
});
