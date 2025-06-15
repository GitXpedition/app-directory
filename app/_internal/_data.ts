// This is a mock database. The content of the 'demos' constant
// has been updated with enriched text to reflect the ArgenSource project,
// while preserving the original structure, slugs, and number of items.

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export type Section = {
  id: string;
  name: string;
  slug: string;
  categories: string[];
};

export type Category = {
  id: string;
  name: string;
  section: string;
  slug: string;
  products: string[];
};

export type Demo = {
  slug: string;
  name:string;
  nav_title?: string;
  description: string;
};

export type DemoCategory = { name: string; items: Demo[] };

// --- ARGENSOURCE DATA ---

const sections: Section[] = [
  { id: '1', name: 'Procesos Industriales', slug: 'procesos', categories: ['1', '2', '3'] },
  {
    id: '2',
    name: 'Insumos y Materiales',
    slug: 'insumos',
    categories: ['4', '5', '6'],
  },
  { id: '3', name: 'Servicios de Soporte', slug: 'servicios', categories: ['7', '8', '9'] },
];

const categories: Category[] = [
  { id: '1', name: 'Transformaciones', slug: 'transformaciones', section: '1', products: ['1'] },
  { id: '2', name: 'Tratamientos', slug: 'tratamientos', section: '1', products: ['2'] },
  { id: '3', name: 'Matricería', slug: 'matriceria', section: '1', products: ['3'] },
  { id: '4', name: 'Materias Primas', slug: 'materias-primas', section: '2', products: ['4'] },
  { id: '5', name: 'Materiales de Proceso', slug: 'materiales-proceso', section: '2', products: ['5'] },
  { id: '6', name: 'Suministros Operativos', slug: 'suministros-operativos', section: '2', products: ['6'] },
  { id: '7', name: 'Asesoramiento', slug: 'asesoramiento', section: '3', products: ['7'] },
  {
    id: '8',
    name: 'Mantenimiento',
    slug: 'mantenimiento',
    section: '3',
    products: ['8'],
  },
  {
    id: '9',
    name: 'Seguridad Industrial',
    slug: 'seguridad-industrial',
    section: '3',
    products: ['9'],
  },
];

const products: Product[] = [
  { id: '1', name: 'Servicio de Forjado', image: 'https://placehold.co/400x400/f0f0f0/333?text=Forjado', category: '1' },
  { id: '2', name: 'Servicio de Galvanizado', image: 'https://placehold.co/400x400/f0f0f0/333?text=Galvanizado', category: '2' },
  { id: '3', name: 'Diseño de Matriz Progresiva', image: 'https://placehold.co/400x400/f0f0f0/333?text=Matriz', category: '3' },
  { id: '4', name: 'Acero AISI 1045', image: 'https://placehold.co/400x400/f0f0f0/333?text=Acero', category: '4' },
  { id: '5', name: 'Fluidos de Corte', image: 'https://placehold.co/400x400/f0f0f0/333?text=Fluidos', category: '5' },
  { id: '6', name: 'Gas Argón Industrial', image: 'https://placehold.co/400x400/f0f0f0/333?text=Gas', category: '6' },
  { id: '7', name: 'Consultoría en Procesos', image: 'https://placehold.co/400x400/f0f0f0/333?text=Consultoria', category: '7' },
  { id: '8', name: 'Repuestos para Maquinaria', image: 'https://placehold.co/400x400/f0f0f0/333?text=Repuestos', category: '8' },
  { id: '9', name: 'Guantes de Seguridad', image: 'https://placehold.co/400x400/f0f0f0/333?text=Seguridad', category: '9' },
];

const demos = [
  {
    name: 'Plataforma y Clasificación',
    items: [
      {
        slug: 'layouts',
        name: 'Navegación por Procesos',
        description: 'Vea cómo nuestra clasificación le permite navegar desde procesos de transformación hasta tratamientos específicos.',
      },
      {
        slug: 'route-groups',
        name: 'Grupos de Suministro',
        description: 'Organice su búsqueda agrupando proveedores por familias de insumos o servicios.',
      },
      {
        slug: 'parallel-routes',
        name: 'Comparativa de Proveedores',
        description: 'Visualice y compare las capacidades de múltiples proveedores en una sola vista.',
      },
    ],
  },
  {
    name: 'Guías de Proveedores (Ejemplos)',
    items: [
      {
        slug: 'loading',
        name: 'Perfiles de Proveedor (Cargando)',
        description:
          'Ejemplo de cómo se presentará la información de un proveedor mientras se carga.',
      },
      {
        slug: 'error',
        name: 'Manejo de Errores de Búsqueda',
        description: 'Visualice cómo la plataforma gestiona búsquedas que no arrojan resultados.',
      },
      {
        slug: 'not-found',
        name: 'Proveedores No Encontrados',
        description: 'Interfaz para cuando un perfil de proveedor específico no está disponible.',
      },
    ],
  },
  {
    name: 'Beneficios y Eficiencia',
    items: [
      {
        slug: 'cached-routes',
        name: 'Búsquedas Rápidas y Optimizadas',
        nav_title: 'Búsquedas Optimizadas',
        description: 'La plataforma optimiza y acelera las búsquedas recurrentes para ahorrarle tiempo.',
      },
      {
        slug: 'cached-components',
        name: 'Componentes de Ficha Técnica',
        nav_title: 'Fichas Técnicas',
        description:
          'Las fichas de los proveedores se guardan para un acceso y una comparación más rápida.',
      },
      {
        slug: 'cached-functions',
        name: 'Cálculos y Reportes Eficientes',
        description: 'Funciones internas que agilizan la generación de reportes y comparativas de costos.',
      },
    ],
  },
  {
    name: 'Herramientas para Compradores',
    items: [
      {
        slug: 'use-link-status',
        name: 'Gestor de Solicitudes (RFQ)',
        description: 'Una herramienta para crear, enviar y dar seguimiento a sus Solicitudes de Cotización.',
      },
    ],
  },
  {
    name: 'Acerca del Proyecto',
    items: [
      {
        slug: 'view-transitions',
        name: 'Visión del Proyecto',
        description:
          'Nuestra visión es transformar el aprovisionamiento industrial en Argentina.',
      },
      {
        slug: 'context',
        name: 'Contacto y Registro de Interés',
        description:
          'Regístrese para ser el primero en acceder a la plataforma y recibir novedades.',
      },
    ],
  },
] as const satisfies DemoCategory[];

export type DemoSlug = (typeof demos)[number]['items'][number]['slug'];

export const data = { sections, categories, products, demos };
