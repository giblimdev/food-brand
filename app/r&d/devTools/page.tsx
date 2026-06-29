//@/app/r&d/devTools
/*
cette page (@/app/r&d/devTools/page.tsx) doit afficher les fichier de mon application de facon conviviale
afficher chaque section sous forme acoedion schadcn
filesPath utilise lib/getfilesPath.ts qui utilisera  app/api/r&d/route.ts qui lit les fichier de l'application appartir de la racine et exclus les public et node module et prisma/migration. 
dec composant pour afficher filtréer les fichier 
*/
import React from 'react'

function page() {
  return (
    <div><h1>DevTools</h1>
<section><h2>Features</h2>
<div>ouvre la page feature la page feature va devenir "dynamqiue" Crud de la table Feature</div>
<div>achitecture et fonctionnement CRUD Feature</div></section>
<section><h2>Schema</h2>
<div>li le schema proposer en db et verifie si schema.prisma est a jour</div></section>




<section>
<h2>architecture</h2>
    <section>
        <h3>1. LocalFilesPath</h3>
        <div>
            affiche les chemin de tous les fichier da l'application et chause fichier a un bouton afficher le contenu
        </div>
        <div>
            achitecture et fonctionnement LocalFilesPath
        </div>    
</section>
<section><h3>2. dbFilesPath</h3>
    <div>idem pour les fichier en db</div>
    <div>achitecture et fonctionnement de dbFilesPath</div>
</section>
<section>
        <h3>3. updateMyDb</h3>
        <div>liste les fichier absent de la DB et propose pour chaque le json un boutton d'action rapide creer le fichier</div>
    </section>
    <section><h3>updateMyApp</h3>
    <div>liste les fichier a creer localement pour chacun montre l'endemble des information du fichier a creer; path, role, import et export.... </div>
    </section>
    </section>
    
    </div>
  )
}

export default page