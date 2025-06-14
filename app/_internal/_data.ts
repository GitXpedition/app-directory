// This is a mock database. The content of all constants
// has been updated to reflect the ArgenSource project.
// The 'products' constant now uses placeholder image URLs
// with a neutral style to match the template's aesthetic.

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

// --- MODIFIED DATA FOR ARGENSOURCE ---

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

// Replaced local image names with full placeholder URLs using a neutral style
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
    name: 'Procesos de Transformación',
    items: [
      {
        slug: 'fundicion',
        name: 'Fundición',
        description: 'Proveedores de procesos de fundición de acero, hierro y metales no ferrosos.',
      },
      {
        slug: 'forjado',
        name: 'Forjado',
        description: 'Especialistas en forja de piezas para la industria automotriz, agrícola y petrolera.',
      },
      {
        slug: 'mecanizado-de-precision',
        name: 'Mecanizado de Precisión',
        description: 'Servicios de mecanizado CNC, fresado y torneado con tolerancias exactas.',
      },
    ],
  },
  {
    name: 'Procesos de Acabado',
    items: [
      {
        slug: 'tratamientos-termicos',
        name: 'Tratamientos Térmicos',
        description:
          'Servicios de templado, revenido, recocido y nitrurado para modificar propiedades de materiales.',
      },
      {
        slug: 'tratamientos-superficiales',
        name: 'Tratamientos Superficiales',
        description: 'Procesos de galvanizado, cromado, pintado y pulido para protección y estética.',
      },
      {
        slug: 'pintura-industrial',
        name: 'Pintura Industrial',
        description: 'Aplicación de recubrimientos y pinturas de alta resistencia para el sector industrial.',
      },
    ],
  },
  {
    name: 'Insumos Industriales',
    items: [
      {
        slug: 'materias-primas',
        name: 'Materias Primas',
        nav_title: 'Materias Primas',
        description: 'Proveedores de aceros, polímeros, metales no ferrosos y otros insumos básicos.',
      },
      {
        slug: 'materiales-de-proceso',
        name: 'Materiales de Proceso',
        nav_title: 'Materiales de Proceso',
        description:
          'Consumibles para la producción: abrasivos, electrodos, fluidos de corte y herramientas.',
      },
      {
        slug: 'suministros-operativos',
        name: 'Suministros Operativos',
        description: 'Insumos para la operación de la planta: energía, lubricantes, gases industriales y útiles.',
      },
    ],
  },
  {
    name: 'Servicios Especializados',
    items: [
      {
        slug: 'matriceria-y-moldes',
        name: 'Matricería y Moldes',
        description: 'Diseño y fabricación de matrices, moldes y herramental para producción en serie.',
      },
    ],
  },
  {
    name: 'Ingeniería y Soporte',
    items: [
      {
        slug: 'asesoramiento-y-proyectos',
        name: 'Asesoramiento y Proyectos',
        description:
          'Servicios de consultoría técnica, ingeniería de producto y gestión de proyectos industriales.',
      },
      {
        slug: 'ensayos-y-certificaciones',
        name: 'Ensayos y Certificaciones',
        description:
          'Laboratorios para ensayos de materiales, metrología y servicios de certificación de calidad.',
      },
    ],
  },
] as const satisfies DemoCategory[];

export type DemoSlug = (typeof demos)[number]['items'][number]['slug'];

export const data = { sections, categories, products, demos };
