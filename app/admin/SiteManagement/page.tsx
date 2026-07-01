// app/admin/SiteManagement/page.tsx

// type : page
/* role : gestion des enums et modèles de la base de données (vue d'ensemble) */
/* fonctionnement : affiche tous les enums et modèles extraits du schéma Prisma */
// imports []
// exports []
// useby []
// noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent.

import HeaderAdmin from '@/components/admin/HeaderAdmin';
import React from 'react';

// ============================================================
// DONNÉES STATIQUES EXTRAITES DU SCHÉMA PRISMA
// ============================================================

// -------------------- ENUMS --------------------
const enumsData = [
  {
    name: 'Persona',
    values: ['CLIENT', 'PRO', 'ADMIN', 'DEVELOPER', 'VISITEUR', 'LIVREUR'],
  },
  {
    name: 'Status',
    values: ['PLANNED', 'IN_PROGRESS', 'DONE', 'BLOCKED', 'REVIEW', 'TESTING', 'DEPLOYED'],
  },
  {
    name: 'Priority',
    values: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'TRIVIAL'],
  },
  {
    name: 'SchemaStatus',
    values: ['PENDING', 'VALIDATING', 'VALID', 'INVALID', 'ERROR', 'OUTDATED'],
  },
  {
    name: 'FileType',
    values: [
      'LAYOUT', 'PAGE', 'COMPOSANT', 'LIB', 'UTILS', 'NEXT', 'STORE', 'API',
      'CONFIG', 'MIDDLEWARE', 'SCHEMA', 'ACTION', 'HOOK', 'STYLE', 'TEST',
      'DOCUMENTATION', 'SCRIPT', 'OTHER',
    ],
  },
  {
    name: 'SyncStatus',
    values: ['SYNCED', 'LOCAL_NEWER', 'DB_NEWER', 'CONFLICT', 'MISSING_LOCAL', 'MISSING_DB'],
  },
  {
    name: 'LogAction',
    values: ['SCAN', 'CREATE', 'UPDATE', 'DELETE', 'SYNC', 'VALIDATE', 'DEPLOY', 'ROLLBACK', 'IMPORT', 'EXPORT', 'GENERATE', 'OTHER'],
  },
  {
    name: 'LogCategory',
    values: ['SYSTEM', 'DATABASE', 'FILESYSTEM', 'API', 'SECURITY', 'USER', 'FEATURE', 'SCHEMA', 'DEPLOYMENT'],
  },
  {
    name: 'LogStatus',
    values: ['SUCCESS', 'WARNING', 'ERROR', 'INFO', 'PENDING', 'CANCELLED'],
  },
  {
    name: 'TeamRole',
    values: ['OWNER', 'ADMIN', 'MANAGER', 'MEMBER', 'VIEWER'],
  },
  {
    name: 'OwnerRole',
    values: ['ADMIN', 'MANAGER', 'VIEWER'],
  },
  {
    name: 'MenuCategory',
    values: ['APPETIZER', 'MAIN_COURSE', 'DESSERT', 'BEVERAGE', 'SNACK'],
  },
  {
    name: 'Unit',
    values: ['GRAM', 'KILOGRAM', 'LITER', 'MILLILITER', 'UNIT', 'TABLESPOON', 'TEASPOON', 'CUP'],
  },
  {
    name: 'Allergen',
    values: [
      'GLUTEN', 'CRUSTACEANS', 'EGGS', 'FISH', 'PEANUTS', 'SOYBEANS', 'MILK',
      'NUTS', 'CELERY', 'MUSTARD', 'SESAME_SEEDS', 'SULPHUR_DIOXIDE', 'LUPIN', 'MOLLUSCS',
    ],
  },
  {
    name: 'IngredientCategory',
    values: ['MEAT', 'FISH', 'VEGETABLE', 'FRUIT', 'DAIRY', 'GRAIN', 'SPICE', 'OIL', 'SAUCE', 'BEVERAGE', 'OTHER'],
  },
  {
    name: 'StockMovementType',
    values: ['PURCHASE', 'SALE', 'WASTE', 'RETURN', 'ADJUSTMENT', 'TRANSFER'],
  },
  {
    name: 'PaymentStatus',
    values: ['UNPAID', 'PAID', 'FAILED', 'REFUNDED'],
  },
  {
    name: 'PaymentMethod',
    values: ['CARD', 'PAYPAL', 'CASH', 'APPLE_PAY', 'GOOGLE_PAY', 'OTHER'],
  },
  {
    name: 'ReviewStatus',
    values: ['PENDING', 'APPROVED', 'REJECTED', 'RESPONDED'],
  },
  {
    name: 'VehicleType',
    values: ['BIKE', 'SCOOTER', 'CAR', 'VAN', 'ON_FOOT'],
  },
  {
    name: 'DriverStatus',
    values: ['OFFLINE', 'AVAILABLE', 'ON_DELIVERY', 'ON_BREAK', 'SUSPENDED'],
  },
  {
    name: 'DeliveryStatus',
    values: ['PENDING', 'ASSIGNED', 'ACCEPTED', 'PICKED_UP', 'IN_TRANSIT', 'DELIVERED', 'FAILED', 'CANCELLED'],
  },
  {
    name: 'NotificationMedium',
    values: ['EMAIL', 'SMS', 'watsapp', 'PUSH'],
  },
  {
    name: 'NotificationType',
    values: ['ORDER_STATUS', 'PROMOTION', 'DELIVERY_UPDATE', 'SYSTEM'],
  },
  {
    name: 'PromoType',
    values: ['PERCENTAGE', 'FIXED_AMOUNT', 'FREE_DELIVERY'],
  },
];

// -------------------- MODÈLES --------------------
// On liste les modèles avec leurs principaux champs (nom, type, optionnel)
// Pour simplifier, on ne détaille pas toutes les relations, on donne un aperçu.

const modelsData = [
  {
    name: 'Epic',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'order', type: 'Int?', required: false },
      { name: 'name', type: 'String', required: true, unique: true },
      { name: 'label', type: 'String', required: true },
      { name: 'description', type: 'String?', required: false },
      { name: 'icon', type: 'String?', required: false },
      { name: 'color', type: 'String?', required: false },
      { name: 'emoji', type: 'String?', required: false },
      { name: 'status', type: 'Status', required: true, default: 'PLANNED' },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'Feature',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'order', type: 'Int?', required: false },
      { name: 'title', type: 'String', required: true },
      { name: 'description', type: 'String?', required: false },
      { name: 'epicId', type: 'String', required: true, relation: 'Epic' },
      { name: 'personas', type: 'Persona[]', required: true, default: '[CLIENT]' },
      { name: 'status', type: 'Status', required: true, default: 'PLANNED' },
      { name: 'priority', type: 'Priority', required: true, default: 'MEDIUM' },
      { name: 'files', type: 'Json?', required: false },
      { name: 'dependencies', type: 'String[]', required: true, default: '[]' },
      { name: 'estimatedHours', type: 'Int?', required: false, default: 0 },
      { name: 'assignedTo', type: 'String?', required: false },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
      { name: 'completedAt', type: 'DateTime?', required: false },
      { name: 'sprintId', type: 'String?', required: false, relation: 'Sprint' },
    ],
  },
  {
    name: 'Sprint',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'order', type: 'Int?', required: false },
      { name: 'name', type: 'String', required: true },
      { name: 'startDate', type: 'DateTime', required: true },
      { name: 'endDate', type: 'DateTime', required: true },
      { name: 'status', type: 'Status', required: true },
      { name: 'features', type: 'Feature[]', required: false, relation: 'Feature' },
    ],
  },
  {
    name: 'Schema',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'order', type: 'Int?', required: false },
      { name: 'name', type: 'String', required: true },
      { name: 'description', type: 'String?', required: false },
      { name: 'version', type: 'String', required: true, default: '1.0.0' },
      { name: 'status', type: 'SchemaStatus', required: true, default: 'PENDING' },
      { name: 'isValid', type: 'Boolean', required: true, default: false },
      { name: 'lastChecked', type: 'DateTime?', required: false },
      { name: 'differences', type: 'Json?', required: false },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
      { name: 'models', type: 'Model[]', required: false, relation: 'Model' },
    ],
  },
  {
    name: 'Model',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'order', type: 'Int?', required: false },
      { name: 'name', type: 'String', required: true },
      { name: 'label', type: 'String?', required: false },
      { name: 'description', type: 'String?', required: false },
      { name: 'schemaId', type: 'String', required: true, relation: 'Schema' },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
      { name: 'fields', type: 'Field[]', required: false, relation: 'Field' },
    ],
  },
  {
    name: 'Field',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'order', type: 'Int?', required: false },
      { name: 'name', type: 'String', required: true },
      { name: 'description', type: 'String?', required: false },
      { name: 'comment', type: 'String?', required: false },
      { name: 'type', type: 'String', required: true },
      { name: 'isOptional', type: 'Boolean', required: true, default: false },
      { name: 'isId', type: 'Boolean', required: true, default: false },
      { name: 'isUnique', type: 'Boolean', required: true, default: false },
      { name: 'isCreatedAt', type: 'Boolean', required: true, default: false },
      { name: 'defaultValue', type: 'String?', required: false },
      { name: 'reference', type: 'String?', required: false },
      { name: 'modelId', type: 'String', required: true, relation: 'Model' },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'File',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'order', type: 'Int?', required: false },
      { name: 'path', type: 'String', required: true, unique: true },
      { name: 'label', type: 'String', required: true },
      { name: 'type', type: 'FileType', required: true, default: 'OTHER' },
      { name: 'role', type: 'String?', required: false },
      { name: 'fonctionnement', type: 'String?', required: false },
      { name: 'imports', type: 'String[]', required: true, default: '[]' },
      { name: 'exports', type: 'String[]', required: true, default: '[]' },
      { name: 'useby', type: 'String[]', required: true, default: '[]' },
      { name: 'noteIA', type: 'String?', required: false },
      { name: 'content', type: 'String?', required: false },
      { name: 'parentId', type: 'String?', required: false, relation: 'File' },
      { name: 'syncStatus', type: 'SyncStatus', required: true, default: 'SYNCED' },
      { name: 'lastSyncAt', type: 'DateTime?', required: false },
      { name: 'localHash', type: 'String?', required: false },
      { name: 'featureIds', type: 'String[]', required: true, default: '[]' },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'Glossary',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'term', type: 'String', required: true, unique: true },
      { name: 'definition', type: 'String', required: true },
      { name: 'createdBy', type: 'String', required: true, relation: 'User' },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'Restaurant',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'name', type: 'String', required: true },
      { name: 'description', type: 'String?', required: false },
      { name: 'address', type: 'String?', required: false },
      { name: 'phone', type: 'String?', required: false },
      { name: 'brandId', type: 'String', required: true, relation: 'Brand' },
      { name: 'isActive', type: 'Boolean', required: true, default: true },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
      { name: 'totalNote', type: 'Float?', required: false, default: 0 },
      { name: 'ndvote', type: 'Int?', required: false, default: 0 },
    ],
  },
  {
    name: 'Recipe',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'name', type: 'String', required: true },
      { name: 'description', type: 'String?', required: false },
      { name: 'ingredients', type: 'String?', required: false },
      { name: 'instructions', type: 'String?', required: false },
      { name: 'price', type: 'Float?', required: false },
      { name: 'prepTime', type: 'Int?', required: false },
      { name: 'image', type: 'String?', required: false },
      { name: 'brandId', type: 'String', required: true, relation: 'Brand' },
      { name: 'restaurantId', type: 'String?', required: false, relation: 'Restaurant' },
      { name: 'isAvailable', type: 'Boolean', required: true, default: true },
      { name: 'menuCategory', type: 'MenuCategory', required: true },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'Ingredient',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'name', type: 'String', required: true, unique: true },
      { name: 'description', type: 'String?', required: false },
      { name: 'category', type: 'IngredientCategory', required: true, default: 'OTHER' },
      { name: 'unit', type: 'Unit', required: true, default: 'GRAM' },
      { name: 'allergen', type: 'Allergen[]', required: false },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'Customer',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'userId', type: 'String?', required: false, relation: 'User' },
      { name: 'email', type: 'String?', required: false },
      { name: 'phone', type: 'String?', required: false },
      { name: 'firstName', type: 'String?', required: false },
      { name: 'lastName', type: 'String?', required: false },
      { name: 'address', type: 'String?', required: false },
      { name: 'city', type: 'String?', required: false },
      { name: 'postalCode', type: 'String?', required: false },
      { name: 'country', type: 'String', required: true, default: 'FR' },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'Driver',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'userId', type: 'String', required: true, unique: true, relation: 'User' },
      { name: 'phone', type: 'String', required: true },
      { name: 'licenseNumber', type: 'String?', required: false },
      { name: 'vehicleType', type: 'VehicleType', required: true, default: 'BIKE' },
      { name: 'status', type: 'DriverStatus', required: true, default: 'OFFLINE' },
      { name: 'currentLat', type: 'Float?', required: false },
      { name: 'currentLng', type: 'Float?', required: false },
      { name: 'rating', type: 'Float?', required: false, default: 5.0 },
      { name: 'isVerified', type: 'Boolean', required: true, default: false },
      { name: 'createdAt', type: 'DateTime', required: true },
      { name: 'updatedAt', type: 'DateTime', required: true },
    ],
  },
  {
    name: 'Address',
    fields: [
      { name: 'id', type: 'String', required: true },
      { name: 'userId', type: 'String', required: true, relation: 'User' },
      { name: 'label', type: 'String?', required: false },
      { name: 'address', type: 'String', required: true },
      { name: 'lat', type: 'Float?', required: false },
      { name: 'lng', type: 'Float?', required: false },
      { name: 'isDefault', type: 'Boolean', required: true, default: false },
    ],
  },
];

// ============================================================
// COMPOSANT PRINCIPAL
// ============================================================

function SiteManagementPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <HeaderAdmin />

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', margin: '0', color: '#1a1a1a' }}>📊 Site Management</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Vue d'ensemble des enums et modèles du schéma Prisma
        </p>
      </header>

      {/* ==================== SECTION ENUMS ==================== */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #1976d2', paddingBottom: '0.5rem', color: '#1976d2' }}>
          📋 Enums
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          {enumsData.map((enumItem) => (
            <div
              key={enumItem.name}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '1.2rem',
                background: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>{enumItem.name}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {enumItem.values.map((val) => (
                  <span
                    key={val}
                    style={{
                      background: '#f0f4ff',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: '#1a237e',
                    }}
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION MODÈLES ==================== */}
      <section>
        <h2 style={{ borderBottom: '3px solid #2e7d32', paddingBottom: '0.5rem', color: '#2e7d32' }}>
          🗂️ Modèles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          {modelsData.map((model) => (
            <div
              key={model.name}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '1.2rem',
                background: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#2e7d32' }}>{model.name}</h4>
              <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ textAlign: 'left', padding: '0.2rem 0.3rem' }}>Champ</th>
                    <th style={{ textAlign: 'left', padding: '0.2rem 0.3rem' }}>Type</th>
                    <th style={{ textAlign: 'center', padding: '0.2rem 0.3rem' }}>Req.</th>
                  </tr>
                </thead>
                <tbody>
                  {model.fields.map((field) => (
                    <tr key={field.name} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '0.2rem 0.3rem', fontWeight: '500' }}>{field.name}</td>
                      <td style={{ padding: '0.2rem 0.3rem' }}>
                        {field.relation ? (
                          <span style={{ color: '#c62828' }}>{field.type} 🔗</span>
                        ) : (
                          <span>{field.type}</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.2rem 0.3rem' }}>
                        {field.required ? (
                          <span style={{ color: '#2e7d32' }}>✅</span>
                        ) : (
                          <span style={{ color: '#999' }}>⬜</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {model.fields.some((f) => f.relation) && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#888' }}>
                  🔗 Relations indiquées par l'icône
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SiteManagementPage;