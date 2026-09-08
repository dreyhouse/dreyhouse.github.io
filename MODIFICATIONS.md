# Site FASTBOOLA corrigé

## Contenu
- 6 459 fichiers de logos locaux, dans les 23 catégories des archives fournies. Les logos ont été copiés à l’identique ; les noms d’affichage sont déduits des fichiers et les variantes sont conservées.
- Sélecteur de pays : France par défaut, mémorisation du choix sur cet appareil. Un seul choix met à jour langue, devise, prix, noms des pays, durées, métadonnées, boutons, libellés accessibles et messages WhatsApp.
- 22 langues d’interface. Belgique et Luxembourg : français ; Canada et Singapour : anglais ; Suisse : allemand. Les catégories International et Caraïbes regroupent des logos et ne constituent pas des pays à devise unique.
- Police Manrope incluse localement (licence OFL dans fonts/), typographie revue et quatre images originales des abonnements conservées. Les durées sous les images et leurs descriptions accessibles sont traduites.
- Les prix sont affichés avant toute requête réseau. Une configuration incomplète, un stockage bloqué ou une indisponibilité réseau ne laisse plus les tarifs vides.

## Prix et conversion
Les prix de base de l’administration restent en FCFA (XOF), inchangés : 4 000, 9 000, 15 000 et 25 000. En France, la conversion donne 6,99 €, 13,99 €, 22,99 € et 38,99 €. Les prix convertis sont arrondis commercialement à « ,99 », comme demandé. Les devises sans décimales sont arrondies à l’unité supérieure, les prix en FCFA sont conservés et un prix nul reste nul.

Parité utilisée : 1 EUR = 655,957 XOF (BCEAO). Pour les autres devises, les taux ExchangeRate-API du 8 septembre 2026 sont inclus ; ils se rafraîchissent en arrière-plan lorsque nécessaire. En cas de panne, les derniers taux disponibles sont conservés. La date des taux et leur source figurent sur le site. Les montants convertis sont indicatifs.

Sources : https://www.bceao.int/index.php/fr/communique-presse/fausse-information-faisant-etat-dune-devaluation-du-franc-cfa ; https://www.exchangerate-api.com/docs/free
La Bulgarie utilise l’euro depuis janvier 2026 : https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260101~c830245e42.en.html

## Textes personnalisés et images
Les textes de l’interface sont traduits. Pour une bannière personnalisée ajoutée ensuite, l’administration propose un champ par langue ; saisissez les traductions souhaitées. Le français sert de repli lorsqu’une traduction personnalisée manque. Les marques et textes intégrés aux logos, aux quatre images originales des abonnements ou aux captures WhatsApp ne sont pas traduits.

## Installation
Cette archive conserve l’architecture Netlify et le panneau d’administration existants. Remplacez les fichiers du projet Netlify par tout le contenu de l’archive, puis utilisez votre procédure habituelle de déploiement avec prise en charge des Functions. Aucune publication sur votre domaine n’a été effectuée ici.

L’ouverture locale d’index.html permet de consulter le catalogue et de changer de pays sans serveur. L’enregistrement dans l’administration nécessite l’hébergement Netlify et sa configuration existante.

Pour modifier les montants, privilégiez l’administration. Si vous modifiez directement site-config.default.json, mettez aussi à jour site-defaults.js (même objet JSON précédé de window.SITE_DEFAULTS =), utilisé pour l’affichage immédiat hors connexion.

## Vérification
Contrôles automatisés : présence de chaque logo référencé, tous les pays proposés, couverture des traductions, conversion des quatre prix, cohérence des messages WhatsApp, restauration du pays, prix nul, configuration incomplète, réseau indisponible ou en attente et stockage local bloqué. L’authentification et l’enregistrement Netlify n’ont pas été testés sur un compte en production.
