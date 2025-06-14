// This is a mock database. The content of ALL constants
// has been updated to reflect the ArgenSource project,
// preserving the original data structure and using placeholders for images.

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
  name: string;
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
    name: 'Layouts',
    items: [
      {
        slug: 'layouts',
        name: 'Navegación y Categorías',
        description: 'Explora cómo se comparten las interfaces entre diferentes rutas y categorías.',
      },
      {
        slug: 'route-groups',
        name: 'Grupos de Rutas',
        description: 'Organiza las rutas sin afectar las URLs de navegación.',
      },
      {
        slug: 'parallel-routes',
        name: 'Rutas Paralelas',
        description: 'Renderiza múltiples páginas en el mismo layout de forma simultánea.',
      },
    ],
  },
  {
    name: 'Convenciones de Archivos',
    items: [
      {
        slug: 'loading',
        name: 'Estados de Carga (Loading)',
        description:
          'Crea interfaces de carga significativas para partes específicas de la aplicación.',
      },
      {
        slug: 'error',
        name: 'Manejo de Errores',
        description: 'Crea interfaces de error para partes específicas de la aplicación.',
      },
      {
        slug: 'not-found',
        name: 'Páginas No Encontradas',
        description: 'Crea una interfaz personalizada para rutas que no existen.',
      },
    ],
  },
  {
    name: 'Estrategias de Caching',
    items: [
      {
        slug: 'cached-routes',
        name: 'Rutas Cacheadas',
        nav_title: 'Rutas Cacheadas',
        description: 'Almacena en caché el resultado renderizado de un segmento de ruta.',
      },
      {
        slug: 'cached-components',
        name: 'Componentes Cacheados',
        nav_title: 'Componentes Cacheados',
        description:
          'Almacena en caché el resultado renderizado de un Componente de Servidor de React individual.',
      },
      {
        slug: 'cached-functions',
        name: 'Funciones Cacheadas',
        description: 'Almacena en caché el resultado computado de una función regular.',
      },
    ],
  },
  {
    name: 'APIs y Utilidades',
    items: [
      {
        slug: 'use-link-status',
        name: 'useLinkStatus',
        description: 'Crea feedback visual en tiempo real para la interacción con los enlaces.',
      },
    ],
  },
  {
    name: 'Misceláneos',
    items: [
      {
        slug: 'view-transitions',
        name: 'Transiciones de Vista',
        description:
          'Usa animaciones para ayudar a los usuarios a entender la relación entre dos vistas.',
      },
      {
        slug: 'context',
        name: 'Contexto de Cliente',
        description:
          'Pasa contexto entre Componentes de Cliente que cruzan los límites de Servidor/Cliente.',
      },
    ],
  },
] as const satisfies DemoCategory[];

export type DemoSlug = (typeof demos)[number]['items'][number]['slug'];

export const data = { sections, categories, products, demos };
