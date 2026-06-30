//@/app/admin/SiteManagement/page.ts


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


/*


// Enum pour le genre (optionnel)
enum Gender {
  MALE
  FEMALE
  OTHER
  PREFER_NOT_TO_SAY
}


model Epic {
  id          String   @id @default(uuid())
  order       Int?     @default(0)
  name        String   @unique
  label       String
  description String?
  icon        String?
  color       String?
  emoji       String?
  status      Status   @default(PLANNED)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  features    Feature[]

  @@index([name])
  @@index([status])
  @@map("epics")
}

model Feature {
  id              String     @id @default(uuid()) 
  order           Int?       @default(0)
  title           String
  description     String?
  epicId          String     
  epic            Epic       @relation(fields: [epicId], references: [id], onDelete: Restrict)
  personas        Persona[]  @default([CLIENT])
  status          Status     @default(PLANNED)
  priority        Priority   @default(MEDIUM)
  files           Json?
  dependencies    String[]   @default([])
  estimatedHours  Int?       @default(0)
  assignedTo      String?    @db.VarChar(100)
  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @updatedAt
  completedAt     DateTime?
  sprintId        String?    
  sprint          Sprint?    @relation(fields: [sprintId], references: [id])

  @@index([epicId])
  @@index([status])
  @@index([priority])
  @@map("features")
}

model Sprint {
  id          String   @id @default(uuid())
  order       Int?     @default(0)
  name        String
  startDate   DateTime
  endDate     DateTime
  status      Status
  features    Feature[]

  @@map("sprints")
}

model Schema {
  id          String   @id @default(uuid()) 
    order       Int?     @default(0)
  name        String
  description String?  
  version     String   @default("1.0.0")
  status      SchemaStatus @default(PENDING)
  isValid     Boolean  @default(false)
  lastChecked DateTime?
  differences Json?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  models      Model[]
  schemaValidations SchemaValidation[]

  @@index([status])
  @@map("schemas")
}

model Model {
  id          String   @id @default(uuid())
  order       Int?     @default(0)
  name        String
  label       String?
  description String?
  schemaId    String   
  schema      Schema   @relation(fields: [schemaId], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  fields      Field[]

  @@unique([schemaId, name])
  @@index([schemaId])
  @@index([name])
  @@map("models")
}

model Field {
  id           String   @id @default(uuid()) 
  order        Int?     @default(0)
  name         String
  description  String?  
  comment      String?
  type         String
  isOptional   Boolean  @default(false)
  isId         Boolean  @default(false)
  isUnique     Boolean  @default(false)
  isCreatedAt  Boolean  @default(false)
  defaultValue String?
  reference    String?
  modelId      String   
  model        Model    @relation(fields: [modelId], references: [id], onDelete: Cascade)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@unique([modelId, name])
  @@index([modelId])
  @@index([type])
  @@map("fields")
}


model File {
  id              String     @id @default(uuid()) 
    order           Int?       @default(0)
  path            String     @unique 
  label           String     
  type            FileType   @default(OTHER)
  role            String?    
  fonctionnement  String?
  imports         String[]    @default([])
  exports         String[]    @default([])
  useby           String[]  @default([])
  noteIA          String?
  content         String?
  parentId        String?    
  parent          File?      @relation("FileHierarchy", fields: [parentId], references: [id], onDelete: SetNull)
  children        File[]     @relation("FileHierarchy")
  syncStatus      SyncStatus @default(SYNCED)
  lastSyncAt      DateTime?
  localHash       String?    
  featureIds      String[]   @default([])
  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @updatedAt

  @@index([path])
  @@index([type])
  @@index([parentId])
  @@index([syncStatus])
  @@map("files")
}


// ============================================
// ENUMS (Dev)
// ============================================

enum Persona {
  CLIENT
  PRO
  ADMIN
  DEVELOPER
  VISITEUR
  LIVREUR
}

enum Status {
  PLANNED
  IN_PROGRESS
  DONE
  BLOCKED
  REVIEW
  TESTING
  DEPLOYED
}

enum Priority {
  CRITICAL
  HIGH
  MEDIUM
  LOW
  TRIVIAL
}

enum SchemaStatus {
  PENDING
  VALIDATING
  VALID
  INVALID
  ERROR
  OUTDATED
}

enum FileType {
  LAYOUT
  PAGE
  COMPOSANT
  LIB
  UTILS
  NEXT
  STORE
  API
  CONFIG
  MIDDLEWARE
  SCHEMA
  ACTION
  HOOK
  STYLE
  TEST
  DOCUMENTATION
  SCRIPT
  OTHER
}

enum SyncStatus {
  SYNCED
  LOCAL_NEWER
  DB_NEWER
  CONFLICT
  MISSING_LOCAL
  MISSING_DB
}

enum LogAction {
  SCAN
  CREATE
  UPDATE
  DELETE
  SYNC
  VALIDATE
  DEPLOY
  ROLLBACK
  IMPORT
  EXPORT
  GENERATE
  OTHER
}

enum LogCategory {
  SYSTEM
  DATABASE
  FILESYSTEM
  API
  SECURITY
  USER
  FEATURE
  SCHEMA
  DEPLOYMENT
}

enum LogStatus {
  SUCCESS
  WARNING
  ERROR
  INFO
  PENDING
  CANCELLED
}


model Glossary {
  id          String   @id @default(uuid())    
  term        String   @unique
  definition  String
  createdBy   String   
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  creator     User     @relation(fields: [createdBy], references: [id])

  @@map("glossary")
}


enum TeamRole {
  OWNER
  ADMIN
  MANAGER
  MEMBER
  VIEWER
}


enum OwnerRole {
  ADMIN
  MANAGER
  VIEWER
}


// ============================================
// RESTAURANTS & RECIPES
// ============================================

model Restaurant {
  id          String   @id @default(uuid()) 
  name        String
  description String?  
  address     String?  
  phone       String?
  brandId     String   
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  totalNote   Float?   @default(0)
  ndvote       Int?     @default(0)

  brand       Brand    @relation(fields: [brandId], references: [id])
  recipes     Recipe[]
  orders      Order[]
  carts       Cart[]
  promotions Promotion[]

  @@map("restaurants")
  reviews Review[]
  favorites Favorite[]
  galleries Gallery[]
}

model Recipe {
  id          String   @id @default(uuid())   
  name        String
  description String?  
  ingredients String?
  instructions String? 
  price       Float?
  prepTime    Int?
  image       String?
  brandId     String   
  restaurantId String? 
  isAvailable Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  menuCategory  MenuCategory
  brand       Brand           @relation(fields: [brandId], references: [id])
  restaurant  Restaurant?     @relation(fields: [restaurantId], references: [id])
  recipeIngredients RecipeIngredient[]
  cartItems    CartItem[]
  orderItems   OrderItem[]
  promotions Promotion[]
option    Option[]
 tag Tag[] // Vegan,Halal, Bio, Epicé, Sans gluten,
 
  @@map("recipes")
  favorites Favorite[]
  galleries Gallery[]
}
model Tag {
  id          String   @id @default(uuid()) 
  name        String   @unique
  description String?  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

recipeId   String   
  recipe     Recipe   @relation(fields: [recipeId], references: [id])
  @@map("tags")
}
model Option {
  id          String   @id @default(uuid()) 
  name        String
  description String?  
  price       Float?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  

  recipes Recipe[]
}
enum MenuCategory {
  APPETIZER
  MAIN_COURSE
  DESSERT
  BEVERAGE
  SNACK
}

// ============================================
// INGREDIENTS & STOCKS
// ============================================

model Ingredient {
  id          String   @id @default(uuid()) 
  name        String   @unique
  description String?  
  category    IngredientCategory @default(OTHER)
  unit        Unit     @default(GRAM)
  allergen    Allergen[]
  tedAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  brandIngredients BrandIngredient[]
  recipeIngredients RecipeIngredient[]

  @@map("ingredients")
}
enum Allergen {
  GLUTEN
  CRUSTACEANS
  EGGS
  FISH
  PEANUTS
  SOYBEANS
  MILK
  NUTS
  CELERY
  MUSTARD
  SESAME_SEEDS
  SULPHUR_DIOXIDE
  LUPIN
  MOLLUSCS
}
enum Unit {
  GRAM
  KILOGRAM
  LITER
  MILLILITER
  UNIT
  TABLESPOON
  TEASPOON
  CUP
}

enum IngredientCategory {
  MEAT
  FISH
  VEGETABLE
  FRUIT
  DAIRY
  GRAIN
  SPICE
  OIL
  SAUCE
  BEVERAGE
  OTHER
}

enum StockMovementType {
  PURCHASE
  SALE
  WASTE
  RETURN
  ADJUSTMENT
  TRANSFER
}


model Customer {
  id          String   @id @default(uuid()) 
  userId      String?  
   email       String?
  phone       String?
  firstName   String?
  lastName    String?
  address     String?  
  city        String?
  postalCode  String?
  country     String   @default("FR")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user        User?    @relation(fields: [userId], references: [id])
  orders      Order[]
  carts       Cart[]
  reviews     Review[]

  @@map("customers")
}


enum PaymentStatus {
  UNPAID
  PAID
  FAILED
  REFUNDED
}

enum PaymentMethod {
  CARD
  PAYPAL
  CASH
  APPLE_PAY
  GOOGLE_PAY
  OTHER
}

enum ReviewStatus {
  PENDING
  APPROVED
  REJECTED
  RESPONDED
}

model Driver {
  id            String   @id @default(uuid()) 
  userId        String   @unique 
  phone         String
  licenseNumber String?
  vehicleType   VehicleType @default(BIKE)
  status        DriverStatus @default(OFFLINE)
  currentLat    Float?
  currentLng    Float?
  rating        Float?   @default(5.0)
  isVerified    Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  user          User     @relation(fields: [userId], references: [id])
  deliveries    Delivery[]

  @@index([status])
  @@map("drivers")
  reviews Review[]
}

enum VehicleType {
  BIKE
  SCOOTER
  CAR
  VAN
  ON_FOOT
}


enum DriverStatus {
  OFFLINE
  AVAILABLE
  ON_DELIVERY
  ON_BREAK
  SUSPENDED
}


enum DeliveryStatus {
  PENDING
  ASSIGNED
  ACCEPTED
  PICKED_UP
  IN_TRANSIT
  DELIVERED
  FAILED
  CANCELLED
}

enum NotificationMedium {
  EMAIL
  SMS
  watsapp
  PUSH
}

enum NotificationType {
  ORDER_STATUS
  PROMOTION
  DELIVERY_UPDATE
  SYSTEM
}

model Address {
  id          String   @id @default(uuid()) 
  userId      String   
   label       String?  // "Maison", "Travail"
  address     String  
  lat         Float?
  lng         Float?
  isDefault   Boolean  @default(false)

  user        User     @relation(fields: [userId], references: [id])
  @@map("addresses")
}

enum PromoType {
  PERCENTAGE
  FIXED_AMOUNT
  FREE_DELIVERY
}


*/




import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page
