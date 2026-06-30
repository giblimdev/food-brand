///type : page
/*role : Centre d'aide complet restaurateur */
/*fonctionnement : Documentation opérationnelle pour l'espace professionnel */
/*imports [React, lucide-react] */
/*exports [HelpProPage] */
/*useby [ProLayout] */
//noteIA merci de ne pas supprimer les commentaires ci-dessus


import React from "react";
import {
  HelpCircle,
  Search,
  ShoppingCart,
  Utensils,
  Package,
  Truck,
  Users,
  CreditCard,
  BarChart3,
  Megaphone,
  ChefHat,
  Store,
  Settings,
} from "lucide-react";


export default function HelpProPage() {


const sections = [

{
title:"Bienvenue dans votre espace professionnel",
icon:Store,
text:`
Votre espace restaurateur vous permet de gérer toute votre activité :
réception des commandes, préparation en cuisine, gestion du menu,
stocks, livraison, clients et finances.

Le tableau de bord est votre point de contrôle quotidien.
Consultez-le avant l'ouverture afin de vérifier vos ventes,
vos alertes et vos opérations en cours.
`
},


{
title:"Gestion des commandes",
icon:ShoppingCart,
text:`
Les commandes clients arrivent en temps réel.

Chaque commande suit un cycle :

1. Nouvelle :
La commande vient d'être reçue. Vérifiez les articles,
les quantités et les instructions client.

2. Acceptée :
Votre restaurant confirme la prise en charge.

3. Préparation :
La cuisine commence la production.

4. Prête :
Le repas est terminé et peut être récupéré.

5. Terminée :
La commande est livrée ou récupérée.

Il est important de maintenir les statuts à jour.
Un retard non signalé dégrade l'expérience client.
`
},


{
title:"Gestion du menu",
icon:Utensils,
text:`
Le menu représente votre catalogue visible par les clients.

Chaque produit doit contenir :

- un nom clair
- une description
- une photo
- un prix
- une catégorie
- un temps de préparation

Vous pouvez créer des variantes :
taille, accompagnement, supplément,
options personnalisées.

Si un produit n'est plus disponible,
désactivez-le temporairement au lieu de le supprimer.
`
},


{
title:"Recettes et production cuisine",
icon:ChefHat,
text:`
Les recettes permettent de décrire comment un plat est fabriqué.

Une recette contient :

- ingrédients utilisés
- quantités
- méthode de préparation
- temps nécessaire

Une recette bien configurée permet :
- un meilleur contrôle des coûts
- un suivi du stock automatique
- une meilleure organisation cuisine

Les fiches recettes doivent être mises à jour
lorsqu'un ingrédient change.
`
},


{
title:"Stocks et ingrédients",
icon:Package,
text:`
Le stock permet de suivre les matières premières.

Vous pouvez enregistrer :

Entrées :
achat fournisseur ou réception marchandise.

Sorties :
utilisation pour préparer les commandes.

Pertes :
produits jetés, cassés ou périmés.

Ajustements :
correction après inventaire.

Configurez des niveaux minimums
pour recevoir des alertes avant rupture.
`
},


{
title:"Livraison",
icon:Truck,
text:`
La livraison commence lorsque votre équipe
indique que la commande est prête.

Le système suit :

- attribution du livreur
- récupération
- déplacement
- livraison client

Pour améliorer les performances :

- préparez avant l'arrivée du livreur
- indiquez un temps réaliste
- gardez les commandes emballées
`
},


{
title:"Clients et avis",
icon:Users,
text:`
La gestion client permet de comprendre votre activité.

Vous pouvez consulter :

- historique des commandes
- clients réguliers
- avis
- notes

Les avis sont importants pour votre visibilité.
Répondez aux commentaires négatifs
avec une solution concrète.
`
},


{
title:"Marketing et promotions",
icon:Megaphone,
text:`
Les outils marketing permettent d'augmenter vos ventes.

Vous pouvez créer :

- promotions
- réductions
- offres limitées
- livraison gratuite

Utilisez les promotions pendant les périodes creuses
et analysez leur impact dans les statistiques.
`
},


{
title:"Paiements et finances",
icon:CreditCard,
text:`
La partie finance permet de suivre :

- chiffre d'affaires
- commandes payées
- commissions
- revenus nets
- factures

Analysez régulièrement vos résultats
pour connaître la rentabilité réelle.
`
},


{
title:"Statistiques",
icon:BarChart3,
text:`
Les statistiques permettent d'améliorer votre restaurant.

Analysez :

- plats les plus vendus
- heures fortes
- temps moyen préparation
- satisfaction client

Utilisez ces informations pour adapter
votre menu et votre organisation.
`
},


{
title:"Equipe et permissions",
icon:Users,
text:`
Vous pouvez organiser votre équipe.

Exemples de rôles :

Administrateur :
gestion complète.

Manager :
gestion quotidienne.

Employé :
préparation et opérations.

Donnez uniquement les accès nécessaires.
`
},


{
title:"Paramètres restaurant",
icon:Settings,
text:`
Dans les paramètres vous configurez :

- horaires d'ouverture
- adresse
- zones de livraison
- informations restaurant
- préférences notifications

Ces informations doivent rester à jour.
`
}


];



return (

<div className="min-h-screen bg-gray-100 p-6">


<div className="max-w-6xl mx-auto space-y-6">


{/* HEADER */}

<div className="
bg-white
rounded-2xl
p-8
shadow
">


<div className="flex gap-4 items-center">

<HelpCircle size={45}/>


<div>

<h1 className="text-3xl font-bold">
Centre d'aide restaurateur
</h1>


<p className="text-gray-600 mt-2">

Guide complet pour gérer votre restaurant

</p>

</div>


</div>


<div className="
mt-6
flex
items-center
gap-3
border
rounded-xl
p-3
">


<Search/>


<input

className="flex-1 outline-none"

placeholder="Rechercher dans l'aide"

/>


</div>


</div>




{/* CONTENT */}


{

sections.map((section)=>{


const Icon = section.icon;


return (

<div

key={section.title}

className="
bg-white
rounded-2xl
p-8
shadow
"


>


<div className="
flex
items-center
gap-3
mb-5
">


<Icon size={28}/>


<h2 className="
text-xl
font-bold
">

{section.title}

</h2>


</div>



<p className="
whitespace-pre-line
text-gray-700
leading-7
">

{section.text}

</p>



</div>


)


})


}



</div>

</div>

)

}