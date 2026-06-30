//@/app/r&d/features/page.ts


//type : page 
/*role : permet de crud les feature et avant de CRUD les epic*/              
/*fonctionnement : */ 
//imports [import { EpicManager } from './EpicManager CRUD les Epics', import { FeatureManager } from './FeatureManager CRUD les Features'] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


/*amelior l'ux de cette page */


import React from 'react'
//import FeaturesSample from './FeaturesSample'
import { EpicManager } from './EpicManager'
import FeatureManager from './FeatureMager'

function page() {
  return (
    <div>
<section><EpicManager /></section>
<section><FeatureManager/></section>



    </div>
  )
}

export default page