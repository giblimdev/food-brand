//@/app/amin/page.tsx

//type : page 
/*role : page d'entré admin vers
gestion des utilisateur (attribution du role admin)
daschbord : (a developper) 
chart restaurent point de vent (pos), 
gestion des catégorie et enum(visualisation),
communication BtB
*/              
/*fonctionnement : 
verifie le role de l'utilisateur (ne âs implementer pour l'instant)
*/ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



import React from 'react'

function page() {
  return (
    <div>page admin
        <section>
          
          Catégories principales suggérées :Type of Brand
Nom affiché dans l’app
Description / Exemples
Icône suggérée
Restaurant
Restaurant
Restaurants, brasseries, fast-food, pizzerias, etc.

Esthetique
Esthétique & Beauté
Instituts de beauté, spas, soins du visage/corps, maquillage

Coiffeur
Coiffure
Salons de coiffure, barbiers, coloristes

Commerce de proximité
Commerce de proximité
Supérettes, boulangeries, tabacs, épiceries, pharmacies

Autres catégories recommandées (à ajouter selon ton périmètre)Catégorie
Exemples
Bar & Café
Bars, cafés, salons de thé
Santé & Bien-être
Médecins, kinés, ostéos, yoga, fitness
Auto & Moto
Garages, lavage auto, pneus
Services à domicile
Plombiers, électriciens, ménage, baby-sitting
Mode & Shopping
Boutiques de vêtements, chaussures, bijouterie
Sport & Loisirs
Salles de sport, piscines, terrains de sport
Éducation & Cours
Cours de langue, soutien scolaire, musique
Animalerie & Soins animaux
Toilettage, vétérinaires, pet-sitting

Conseils pour ton application :Utilise un système de tags + catégorie principaleExemple : Un salon qui fait coiffure + soins du visage → Catégorie principale Coiffure + tags : #Esthétique, #Soins

Noms utilisateurs-friendly (recommandés) :Restaurant
Esthétique
Coiffure
Commerce de proximité
Beauté & Soins
Services à domicile

Hiérarchie possible :Niveau 1 : Catégorie principale (celle que tu m’as demandée)
Niveau 2 : Sous-catégories (ex: Restaurant → Italien, Asiatique, Français, Fast-food…)
Catégories Principales & Sous-catégoriesCatégorie Principale
Sous-catégories
Restaurant
- Gastronomique
- Italien
- Asiatique
- Fast-food / Burger
- Libanais / Oriental
- Africain
- Brasserie / Traditionnel
- Pizzeria
- Sushi / Poké
- Fruits de mer
- Végétarien / Vegan
Coiffure
- Salon de coiffure
- Barbier / Coiffure homme
- Coiffure afro / Cheveux crépus
- Coloriste
- Coupe + Soin
- Coiffure à domicile
Esthétique & Beauté
- Soins du visage
- Soins du corps / Gommage
- Épilation (laser, cire, etc.)
- Maquillage permanent / Microblading
- Massage bien-être
- Manucure / Pédicure / Onglerie
- Institut de beauté
- Spa & Hammam
Commerce de proximité
- Boulangerie / Pâtisserie
- Supérette / Épicerie
- Boucherie / Poissonnerie
- Primeur (fruits & légumes)
- Pharmacie
- Tabac / Presse
- Laverie automatique
Bar & Café
- Café / Salon de thé
- Bar à cocktails
- Pub / Bar sportif
- Bar à vin / Cave
Santé & Bien-être
- Médecin / Généraliste
- Dentiste
- Kinésithérapeute
- Ostéopathe
- Psychologue / Thérapeute
- Pharmacie / Parapharmacie
- Yoga / Pilates / Méditation
Services à domicile
- Plomberie
- Électricité
- Peinture / Plâtrerie
- Ménage & Nettoyage
- Garde d’enfants / Baby-sitting
- Aide aux seniors
- Jardinage
Auto & Moto
- Garage mécanique
- Lavage auto
- Pneus & Entretien
- Carrosserie / Peinture
- Location de véhicules
Mode & Shopping
- Boutique vêtements
- Chaussures
- Bijouterie / Accessoires
- Coiffeur & Beauté (multi-services)
- Opticien
Sport & Loisirs
- Salle de sport / Fitness
- Piscine
- Club de sport (foot, tennis…)
- Cours de danse
- Loisirs créatifs
Éducation & Formation
- Soutien scolaire
- Cours de langue
- Cours de musique
- Formation professionnelle
Animaux
- Toilettage
- Vétérinaire
- Pension / Pet-sitting
- Animalerie

Recommandations pour ton app :Catégories principales : Limite à 10-12 maximum pour une bonne expérience utilisateur.
Sous-catégories : Permettent un filtrage plus précis dans la recherche.
Tu peux aussi ajouter un système de tags complémentaires (ex: #Terrasse, #À emporter, #Ouvert le dimanche, #Handicap).


</section>
<section>

</section>
    </div>
  )
}

export default page