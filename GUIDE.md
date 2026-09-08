# Guide — Mettre votre site en ligne et utiliser l'espace admin

Ce guide ne demande aucune compétence technique. Vous n'avez rien à coder.

---

## 1. Mettre le site en ligne sur Netlify

### Option A — La plus simple (glisser-déposer)

1. Allez sur **https://app.netlify.com** et créez un compte gratuit (ou connectez-vous).
2. Sur la page d'accueil de votre tableau de bord Netlify, repérez la zone **"Add new site" → "Deploy manually"** (glisser-déposer).
3. Ouvrez le dossier du site sur votre ordinateur (celui que vous avez téléchargé), puis **glissez le dossier entier** dans la zone de dépôt de Netlify.
4. Netlify va déployer le site automatiquement (30 secondes à 1 minute). Vous obtenez une adresse du type `nom-au-hasard.netlify.app`.
5. Vous pouvez changer ce nom : **Site configuration → Change site name**.
6. Si vous avez un nom de domaine (ex: fastboola.com), ajoutez-le dans **Domain management → Add a domain**.

⚠️ Important : avec le glisser-déposer, l'espace admin (couleurs/prix/animations) ne fonctionnera pas tout de suite car Netlify doit d'abord installer une petite dépendance technique (`@netlify/blobs`). Si après le premier dépôt l'espace admin affiche une erreur à l'enregistrement, utilisez l'Option B (connexion à GitHub), qui installe cette dépendance automatiquement. Si tout fonctionne du premier coup, tant mieux, vous pouvez ignorer l'Option B.

### Option B — Recommandée (via GitHub, installe tout automatiquement)

1. Créez un compte gratuit sur **https://github.com** si vous n'en avez pas.
2. Créez un nouveau dépôt (bouton vert **"New"**), donnez-lui un nom (ex: `fastboola-site`), laissez-le "Public" ou "Private", cliquez **"Create repository"**.
3. Sur la page du dépôt vide, cliquez **"uploading an existing file"**, puis glissez-déposez tous les fichiers et dossiers du site (index.html, style.css, le dossier `admin`, le dossier `netlify`, etc.), puis **"Commit changes"**.
4. Retournez sur **https://app.netlify.com → Add new site → Import an existing project**.
5. Choisissez **GitHub**, autorisez l'accès, puis sélectionnez le dépôt que vous venez de créer.
6. Laissez les réglages par défaut (Netlify détecte automatiquement le fichier `netlify.toml` inclus) et cliquez **"Deploy"**.
7. Attendez 1 à 2 minutes que le déploiement se termine. Votre site est en ligne.

Avec cette option, l'espace admin fonctionne immédiatement (sauvegarde des couleurs, prix et animations).

---

## 2. Accéder à l'espace admin

1. Ouvrez votre site, puis ajoutez `/admin` à la fin de l'adresse.
   Exemple : `https://fastboola.netlify.app/admin`
2. Connectez-vous avec :
   - **Email** : `fastboola@gmail.com`
   - **Mot de passe** : `Yeesile`
3. Répondez à la question de vérification anti-robot (une petite addition, ex: "combien font 3 + 5 ?").
4. Cliquez **"Se connecter"**.

---

## 3. Utiliser l'espace admin

L'espace admin a 3 onglets :

### 🎨 Couleurs
Cliquez sur chaque pastille de couleur pour choisir une nouvelle teinte (fond du site, fond des cartes, couleurs d'accent, texte, bouton WhatsApp). Le changement s'applique à tout le site dès que vous enregistrez.

### 💰 Prix
Pour chaque durée d'abonnement (1, 3, 6, 12 mois), vous avez deux champs :
- **Prix barré** : l'ancien prix, affiché barré pour montrer la réduction.
- **Prix promo** : le prix actuel, mis en avant en gros.

Si vous mettez le même montant dans les deux champs, aucun prix barré ne s'affichera (prix normal, sans effet promo).

### ✨ Animations
- **Apparition des cartes au scroll** : choisissez l'effet (fondu, zoom, glissade, ou aucun).
- **Fond animé** : activez/désactivez les formes qui bougent doucement en arrière-plan, et réglez leur intensité.
- **Flèches vers WhatsApp** : activez/désactivez les petites flèches qui apparaissent au scroll pour guider les visiteurs vers la bulle WhatsApp.

### ⭐ Avis
Vos visiteurs peuvent laisser un avis directement sur le site (nom, note en étoiles, commentaire). Pour éviter les faux avis ou le spam, chaque avis envoyé passe d'abord par vous :
- **En attente de validation** : les avis envoyés par les visiteurs apparaissent ici. Cliquez **"Publier"** pour le rendre visible sur le site, ou **"Refuser"** pour l'ignorer.
- **Publiés sur le site** : la liste des avis actuellement visibles. Vous pouvez les supprimer à tout moment.
- **Ajouter un avis manuellement** : pratique pour démarrer avec quelques avis avant d'en recevoir de vrais visiteurs. Il est publié immédiatement.

Les avis publiés s'affichent dans un carrousel animé qui défile automatiquement sur le site.

### 📸 Captures
Ajoutez des captures d'écran de clients satisfaits (conversations WhatsApp, retours reçus, etc.) :
- Cliquez **"Ajouter une capture"**, choisissez une ou plusieurs images depuis votre téléphone/ordinateur.
- Chaque image est automatiquement redimensionnée pour rester légère, et s'affiche sur le site à sa taille naturelle (pas de recadrage forcé).
- Cliquez **"Supprimer"** sous une capture pour la retirer.

Comme pour les avis, les captures s'affichent dans un carrousel animé, pas figées.

### 💳 Paiement
Activez les moyens de paiement que vous acceptez réellement (Mobile Money, Orange Money, Moov Money, PayPal, Virement bancaire, Visa/Mastercard). Ils s'affichent dans une nouvelle section du site, avec les libellés traduits automatiquement selon la langue du visiteur.

### ⚙️ Général
- **Année du pied de page** : modifie le "© ... FASTBOOLA" affiché tout en bas du site.
- **Bannière d'avertissement** : affiche un message en haut de toutes les pages du site (ex: maintenance, information importante, offre limitée). Activez-la, choisissez son style (avertissement orange ou information colorée), et écrivez votre message. Les visiteurs peuvent la fermer avec le ✕, mais elle réapparaît tant qu'elle reste activée.

### Enregistrer
Cliquez sur **"Enregistrer les modifications"** en bas de page. Un message vert confirme l'enregistrement, et le site public est mis à jour immédiatement — aucun redéploiement nécessaire.

Pour vous déconnecter, utilisez le bouton **"Déconnexion"** en haut à droite. La session expire aussi automatiquement au bout de 4 heures.

---

## 4. Bon à savoir

- Le mot de passe admin (`fastboola@gmail.com` / `Yeesile`) est stocké uniquement dans le code du site, jamais visible par les visiteurs.
- Toutes vos modifications (couleurs, prix, animations, avis, captures, paiements, bannière) sont sauvegardées en ligne (Netlify Blobs) et visibles par tous vos visiteurs immédiatement après l'enregistrement.
- **Important** : pour que l'espace admin fonctionne (y compris l'anti-robot, la sauvegarde et les avis clients), le site doit être déployé via l'**Option B (GitHub)** décrite plus haut. Un déploiement par simple glisser-déposer ne suffit pas.
- Les avis envoyés par les visiteurs ne s'affichent jamais automatiquement : vous devez les approuver dans l'onglet **Avis** de l'admin. Cela évite les faux avis ou les messages indésirables.
- Le lien WhatsApp et le numéro de téléphone n'ont pas été modifiés ; ils restent les mêmes que dans votre site d'origine.
- Si un jour vous voulez changer l'email ou le mot de passe admin, dites-le et cela peut être ajusté directement dans le code (fichier `netlify/functions/lib/auth.js`).

---

Besoin d'aide au moment du déploiement ? Recontactez-moi avec une capture d'écran de ce que vous voyez, je pourrai vous guider pas à pas.
