//@/app/api/auth/[...all]/route.ts

///type : APi route
/*role :  */              
/*fonctionnement : */ 
//imports [Lib/auth/auth.js] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 




import { auth } from "@/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
