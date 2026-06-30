// components/pro/HeaderPro.tsx

///type : page
/*role : Bandeau supérieur de l'espace pro, contient le logo et la navigation */
/*fonctionnement : S'affiche en haut de chaque page, reste collé en haut lors du scroll */
//imports [Logo, NavRD]
//exports [HearderRD]
//useby [ProLayout]
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

'use client';

import React from 'react'
import Logo from '../layout/Logo'
import NavPro from './NavPro'

function HearderRD() {
  return (
    <header 
      className="
        sticky
        top-0
        z-50
        w-full
        bg-white
        border-b
        border-gray-200
        shadow-sm
      "
    >
      <div className="
        flex
        h-16
        items-center
        justify-between
        px-4
        md:px-6
      ">
        <Logo />
        <NavPro />
      </div>
    </header>
  )
}

export default HearderRD