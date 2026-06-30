// lib/constants/enums.ts
export enum Status {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  BLOCKED = 'BLOCKED',
  REVIEW = 'REVIEW',
  TESTING = 'TESTING',
  DEPLOYED = 'DEPLOYED',
}

export enum Priority {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  TRIVIAL = 'TRIVIAL',
}

export enum Persona {
  CLIENT = 'CLIENT',
  PRO = 'PRO',
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  VISITEUR = 'VISITEUR',
  LIVREUR = 'LIVREUR',
}