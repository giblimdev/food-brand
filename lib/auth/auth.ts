// lib/auth.ts



///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),

  // Générateur d’ID – vous pouvez le garder ou l’enlever
  // Si vous le gardez, il doit produire un format compatible avec votre @default()
  generateId: () => crypto.randomUUID(),

  user: {
    modelName: "User",
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CLIENT",
        required: true,
        input: false,
      },
    },
  },

  account: {
    modelName: "Account",
  },

  verificationToken: {
    modelName: "Verification",
  },

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    requireEmailVerification: false,
    autoSignIn: true,
  },

  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!,

  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },

  cookies: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },

  logger: {
    level: process.env.NODE_ENV === "production" ? "error" : "info",
  },
});

export type Session = typeof auth.$Infer.Session;