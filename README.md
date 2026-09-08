# Cap École France — Site de contact

Site vitrine pour accompagner les étudiants d'Afrique vers les écoles françaises.
Les étudiants laissent leurs coordonnées via un formulaire (envoyées par email) ou
contactent directement par téléphone / WhatsApp.

Site **statique** (HTML/CSS/JS), sans base de données ni serveur. Hébergeable
gratuitement sur GitHub Pages, Netlify ou Vercel.

---

## ✅ À personnaliser (placeholders)

Tout ce qui est à remplacer est marqué `PLACEHOLDER` dans le code. Voici la liste :

### 1. Le formulaire (indispensable pour recevoir les demandes)

Le formulaire utilise **Formspree** (gratuit jusqu'à 50 demandes/mois).

1. Aller sur https://formspree.io et créer un compte gratuit **avec l'email qui
   doit recevoir les demandes**.
2. Créer un nouveau formulaire → copier l'identifiant fourni (ex. `xdorwkpn`).
3. Dans `index.html`, remplacer `VOTRE_ID_FORMSPREE` par cet identifiant :
   ```html
   <form action="https://formspree.io/f/xdorwkpn" method="POST">
   ```

Tant que ce n'est pas fait, le formulaire affiche un message d'avertissement au
lieu d'envoyer.

### 2. Téléphone et WhatsApp

Rechercher et remplacer dans `index.html` :

| À remplacer            | Où / format                                              |
|------------------------|----------------------------------------------------------|
| `+33600000000`         | Numéro pour les liens `tel:` (format international, sans espaces) |
| `33600000000`          | Numéro WhatsApp pour les liens `wa.me/` (sans `+` ni espaces)     |
| `+33 6 00 00 00 00`    | Numéro **affiché** à l'écran (mise en forme libre)       |

Il y a plusieurs occurrences (bouton hero, carte, section contact, bouton flottant).

### 3. Textes et identité

Dans `index.html` :
- **Nom du programme** : remplacer « Cap École France » et le sigle « CÉF »
- **Prénom** de la personne qui rappelle (section hero)
- **Email** : remplacer `contact@example.com`
- **Chiffres** de la section « stats » (50+, 10 pays, etc.) ou les supprimer
- **Témoignages** : remplacer par de vrais retours d'étudiants
- **FAQ** : ajuster les réponses (notamment tarifs) selon l'offre réelle

### 4. Couleurs (optionnel)

Dans `styles.css`, en haut, les variables `--navy`, `--gold`, etc. permettent de
changer toute la palette en quelques lignes.

---

## 🚀 Mettre le site en ligne (GitHub Pages, gratuit)

1. Repo GitHub → **Settings** → **Pages**
2. Source : branche `main` (ou celle utilisée), dossier `/ (root)`
3. Enregistrer. Le site est publié sous quelques minutes à l'adresse indiquée.

Pour un nom de domaine personnalisé (ex. `capecolefrance.com`), l'ajouter dans
la même page **Pages**.

---

## 🖥️ Tester en local

Ouvrir simplement `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

---

## 📁 Structure

```
.
├── index.html    # Toutes les sections du site
├── styles.css    # Styles et couleurs
├── script.js     # Menu mobile, FAQ, envoi du formulaire
└── README.md     # Ce fichier
```
