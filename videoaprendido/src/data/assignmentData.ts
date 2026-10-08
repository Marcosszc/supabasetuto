import { QuestionItem, CoreConcept } from '../types';

export const ASSIGNMENT_METADATA = {
  course: '2.º BTI',
  subject: 'Software / Desarrollo Web',
  videoTitle: 'Supabase Curso / Tutorial Completo',
  videoAuthor: 'Fazt Code',
  videoUrl: 'https://www.youtube.com/watch?v=pi33WDrgfpI',
  videoEmbedUrl: 'https://www.youtube.com/embed/pi33WDrgfpI'
};

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    id: 'baas',
    name: 'Backend as a Service (BaaS)',
    category: 'Arquitectura en la nube',
    shortDefinition: 'Plataforma que nos da la base de datos, APIs y autenticación ya preparadas para no tener que programar el servidor desde cero.',
    detailedExplanation: 'Fazt Code explica que Supabase es como una alternativa libre a Firebase. En vez de ponernos a escribir todo un servidor en Node.js o Express con rutas y controladores manuales, Supabase ya nos da la base de datos en la nube y crea las rutas automáticamente.',
    technicalDetails: [
      'Nos ahorra tiempo al no tener que escribir código repetitivo.',
      'Se puede usar en la nube o instalar en un servidor propio porque es de código abierto.',
      'Se conecta directo con nuestras aplicaciones de frontend.'
    ]
  },
  {
    id: 'rls',
    name: 'Row Level Security (RLS)',
    category: 'Seguridad en base de datos',
    shortDefinition: 'Sistema de seguridad de PostgreSQL que controla el acceso a los datos fila por fila usando reglas en SQL.',
    detailedExplanation: 'Es uno de los puntos clave del video. Al activar RLS en una tabla, la base de datos bloquea cualquier consulta externa por defecto y devuelve una lista vacía para proteger los datos, hasta que nosotros creemos una política que diga quién puede ver o modificar cada registro.',
    technicalDetails: [
      'Por seguridad, bloquea el acceso si no hay políticas creadas.',
      'Las reglas se escriben en SQL (por ejemplo SELECT true o auth.uid() = user_id).',
      'La seguridad queda en la propia base de datos y no solo en el frontend.'
    ]
  },
  {
    id: 'table-editor',
    name: 'Table Editor y PostgreSQL',
    category: 'Gestión de datos',
    shortDefinition: 'Panel visual dentro de Supabase para crear y editar tablas relacionales con sus columnas y tipos de datos.',
    detailedExplanation: 'En el video se muestra cómo diseñar la tabla de productos usando una interfaz gráfica muy cómoda. Ahí se definen los campos como el id, nombre, precio y descripción, asignando tipos de datos reales de PostgreSQL como int8, text y timestamptz.',
    technicalDetails: [
      'Usa PostgreSQL estándar, un motor relacional muy potente.',
      'Permite agregar y modificar filas manualmente para hacer pruebas.',
      'Mantiene la estructura y los tipos de datos de forma estricta.'
    ]
  },
  {
    id: 'rest-api',
    name: 'API REST autogenerada',
    category: 'Conexión y endpoints',
    shortDefinition: 'Rutas HTTP que Supabase crea automáticamente para que podamos consultar las tablas desde nuestras aplicaciones.',
    detailedExplanation: 'Apenas creamos una tabla en Supabase, la plataforma genera las rutas para hacer operaciones GET, POST, PATCH y DELETE. En el video se muestra cómo consultar la tabla de productos mandando las cabeceras obligatorias (la apikey del proyecto y el token de autorización).',
    technicalDetails: [
      'No hace falta programar rutas ni controladores a mano.',
      'Usa PostgREST por detrás para traducir peticiones HTTP a consultas SQL.',
      'Requiere enviar la apikey para identificar el proyecto.'
    ]
  },
  {
    id: 'jwt-auth',
    name: 'Supabase Auth y tokens JWT',
    category: 'Usuarios y sesiones',
    shortDefinition: 'Sistema de login que genera un token seguro con la identidad del usuario para controlar sus permisos.',
    detailedExplanation: 'El autor muestra cómo funciona el inicio de sesión. Cuando un usuario entra, recibe un token JWT que tiene guardado su ID único. En las políticas de seguridad de la base de datos usamos la función auth.uid() para asegurarnos de que cada persona solo pueda tocar sus propios registros.',
    technicalDetails: [
      'El token viaja en la cabecera Authorization de cada petición.',
      'En jwt.io se puede ver el campo "sub" que contiene el ID del usuario.',
      'La base de datos usa ese ID para filtrar los datos con auth.uid() = user_id.'
    ]
  }
];

export const QUESTIONNAIRE_DATA: QuestionItem[] = [
  {
    id: 1,
    question: '¿Cuál es el tema principal del video? Explica de qué trata.',
    answer: 'El tema principal del video es aprender a utilizar Supabase como una alternativa de código abierto a Firebase. El autor (Fazt Code) enseña paso a paso cómo crear un proyecto en la nube, diseñar una tabla de productos en PostgreSQL usando el Table Editor, activar la seguridad por fila (Row Level Security), probar las consultas a la API usando Thunder Client en VS Code y configurar usuarios con autenticación JWT para que cada persona solo acceda a sus propios datos.'
  },
  {
    id: 2,
    question: '¿Qué problema o necesidad tecnológica se aborda?',
    answer: 'Aborda el problema del tiempo y la complejidad que lleva programar un servidor backend completo desde cero (crear rutas, controladores, configurar la base de datos y hacer sistemas de login manuales). Supabase resuelve esto automatizando la infraestructura. Además, resuelve el problema de la seguridad al hacer que las reglas se apliquen directamente en la base de datos con RLS, evitando que dependamos únicamente de validaciones en el frontend que cualquiera podría alterar.'
  },
  {
    id: 3,
    question: '¿Cuáles son los cinco conceptos más importantes? Define cada uno.',
    answer: '1. Backend as a Service (BaaS): Servicio en la nube que ya nos entrega la base de datos, APIs y autenticación listas para usar.\n2. Row Level Security (RLS): Característica de PostgreSQL que permite poner reglas de seguridad en cada fila para restringir quién puede ver o modificar los datos.\n3. Table Editor: Interfaz gráfica de Supabase para crear tablas relacionales, definir tipos de datos y cargar registros de prueba.\n4. API REST autogenerada: Endpoints HTTP que Supabase crea automáticamente para consultar las tablas sin programar rutas a mano.\n5. Supabase Auth y JWT: Sistema de usuarios donde cada sesión genera un token que la base de datos lee con auth.uid() para reconocer al usuario.'
  },
  {
    id: 4,
    question: '¿Qué herramientas, programas o tecnologías se mencionan y para qué sirven?',
    answer: '• Supabase: Plataforma principal que provee la base de datos, autenticación, storage y APIs.\n• PostgreSQL: El motor de base de datos relacional que utiliza Supabase.\n• Visual Studio Code: Editor de código donde el autor trabaja y realiza las pruebas.\n• Thunder Client: Extensión de VS Code para enviar peticiones HTTP y probar APIs (similar a Postman).\n• jwt.io: Sitio web utilizado para decodificar y ver el contenido de los tokens de usuario.\n• Storage y Edge Functions: Herramientas de Supabase para guardar archivos en la nube y ejecutar funciones en el servidor.\n• Firebase: Servicio de Google mencionado como punto de comparación.'
  },
  {
    id: 5,
    question: '¿Qué procedimientos o pasos se explican? Preséntalos en orden.',
    answer: '1. Registro e inicio de sesión en la plataforma de Supabase.\n2. Creación de un nuevo proyecto definiendo nombre, contraseña de base de datos y región del servidor.\n3. Acceso al Table Editor para crear la tabla "products" con sus columnas y activar Row Level Security (RLS).\n4. Inserción manual de registros de prueba (un mouse y un teclado con sus precios).\n5. Revisión de la documentación y rutas de la API en el panel.\n6. Primera prueba GET en Thunder Client con apikey, observando que devuelve una lista vacía por el bloqueo de RLS.\n7. Creación de la política pública en SQL (SELECT true) para permitir la lectura de los productos.\n8. Configuración de Supabase Auth para usuarios y análisis del token en jwt.io.\n9. Creación de políticas privadas con auth.uid() = user_id para que cada usuario solo modifique sus propios registros.\n10. Comprobación de que las operaciones no autorizadas dan error, y repaso de Storage y Edge Functions.'
  },
  {
    id: 6,
    question: '¿Qué ejemplos prácticos aparecen? Explica uno detalladamente.',
    answer: 'En el video se muestra la carga de productos de computación (un mouse y un teclado), el envío de peticiones HTTP con Thunder Client y la inspección de tokens en jwt.io.\n\nEjemplo detallado de la tabla products y RLS:\nEl autor crea la tabla "products" con columnas como id, name y price, y activa la casilla de RLS. Agrega manualmente un mouse y un teclado. Luego abre Thunder Client en VS Code y hace una petición GET con su apikey. La respuesta le devuelve un arreglo vacío [], no porque haya un fallo, sino porque RLS bloquea por defecto toda lectura si no existen políticas creadas. Para solucionarlo, entra a la sección de políticas en Supabase, crea una regla pública con SELECT true, y al volver a probar en Thunder Client ya recibe la lista con el mouse y el teclado en formato JSON.'
  },
  {
    id: 7,
    question: '¿Qué conocimientos previos son necesarios para comprender lo explicado?',
    answer: 'Es necesario tener nociones de bases de datos relacionales (saber qué es una tabla, filas, columnas, tipos de datos y claves primarias), entender cómo funcionan las peticiones HTTP (métodos GET y POST, qué es una URL y qué son los headers como apikey y Authorization), conceptos básicos de sesiones y usuarios, y manejo básico de un editor de código como Visual Studio Code.'
  },
  {
    id: 8,
    question: '¿Qué ventajas o beneficios ofrece la tecnología o procedimiento?',
    answer: 'La principal ventaja es que es de código abierto (Open Source), por lo que no dependemos de una sola empresa como con Firebase y podemos instalarlo en servidores propios si queremos. Además, usa PostgreSQL real, que es muy potente y estándar en el mundo laboral. Ahorra mucho tiempo de desarrollo porque las APIs se crean automáticamente, y la seguridad con RLS queda protegida de forma robusta directamente en la base de datos.'
  },
  {
    id: 9,
    question: '¿Qué dificultades, errores o precauciones deben considerarse?',
    answer: 'La dificultad más común es la confusión que genera RLS al inicio: si lo activas sin crear políticas, las consultas devuelven una lista vacía sin dar un mensaje de error claro, y uno puede creer que los datos no se guardaron. También hay que tener la precaución de nunca compartir la clave secreta (service_role) en el frontend, validar siempre auth.uid() = user_id en las políticas de modificación, y elegir una región cercana al crear el proyecto para que las consultas no tarden.'
  },
  {
    id: 10,
    question: '¿Cómo aplicarías lo aprendido en un proyecto informático real?',
    answer: 'Lo aplicaría para crear un sistema escolar o una tienda web: en un sistema de colegio, creamos tablas para estudiantes y calificaciones, los alumnos inician sesión y con RLS ponemos la regla auth.uid() = estudiante_id para que cada alumno solo pueda ver sus propias notas. Para una tienda en línea, dejamos el catálogo de productos público para cualquier visitante, pero el carrito y las compras privadas solo para el usuario que inició sesión.'
  },
  {
    id: 11,
    question: '¿Qué parte del video consideras más importante y por qué?',
    answer: 'La parte más importante es cuando explica y configura Row Level Security (RLS) junto con las políticas y el token de usuario. Crear tablas es algo sencillo, pero en un servicio donde el cliente se comunica directo con la base de datos, la seguridad es lo fundamental. Entender por qué devolvía vacío y cómo crear políticas con auth.uid() es lo que realmente permite construir aplicaciones seguras y profesionales.'
  },
  {
    id: 12,
    question: '¿Qué conocimientos nuevos adquiriste y cómo los explicarías a otra persona?',
    answer: 'Aprendí qué es Supabase, la ventaja de usar PostgreSQL en la nube, el funcionamiento de RLS y cómo se aprovecha el token JWT para cuidar los datos privados.\n\nPara explicárselo a un compañero le diría:\n"Supabase es como una base de datos en la nube que ya te deja las conexiones listas. Y RLS es como ponerle un candado digital a cada casillero de la escuela: cuando inicias sesión te dan una llave con tu número de matrícula (el token JWT) y la base de datos solo te abre el casillero que tenga tu número, impidiendo que cualquiera meta la mano en las cosas de los demás."'
  }
];

export const PRACTICAL_STEPS = [
  {
    stepNumber: '1',
    title: 'Creación del proyecto',
    description: 'En el panel de Supabase se crea un nuevo proyecto, se define la contraseña de la base de datos y se elige la región del servidor.',
    codeSnippet: '-- Supabase inicializa PostgreSQL en la nube con credenciales seguras'
  },
  {
    stepNumber: '2',
    title: 'Creación de la tabla products en el Table Editor',
    description: 'Se crea la tabla "products" con sus columnas estructuradas y se activa la casilla de Row Level Security (RLS).',
    codeSnippet: 'CREATE TABLE public.products (\n  id int8 GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,\n  created_at timestamptz DEFAULT now(),\n  name text NOT NULL,\n  description text,\n  price int4 NOT NULL\n);\nALTER TABLE public.products ENABLE ROW LEVEL SECURITY;'
  },
  {
    stepNumber: '3',
    title: 'Carga de datos de prueba',
    description: 'Desde la interfaz visual se cargan dos productos para verificar que la tabla acepte datos.',
    codeSnippet: 'INSERT INTO public.products (name, description, price)\nVALUES \n  (\'Mouse óptico\', \'Mouse ergonómico USB\', 150000),\n  (\'Teclado mecánico\', \'Teclado switch azul\', 320000);'
  },
  {
    stepNumber: '4',
    title: 'Consulta en Thunder Client y bloqueo de RLS',
    description: 'Al hacer GET /products en Thunder Client con la apikey, la respuesta devuelve [] porque RLS bloquea la lectura por defecto si no hay políticas.',
    codeSnippet: 'GET /rest/v1/products HTTP/1.1\napikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n-- Resultado inicial por seguridad:\nHTTP/1.1 200 OK\n[]'
  },
  {
    stepNumber: '5',
    title: 'Creación de la política pública de lectura',
    description: 'En Authentication > Policies se agrega la regla SELECT true ("Enable read access for all users"), y al consultar nuevamente ya aparecen los productos.',
    codeSnippet: 'CREATE POLICY "Enable read access for all users" \nON public.products \nFOR SELECT \nUSING (true);'
  },
  {
    stepNumber: '6',
    title: 'Seguridad privada con auth.uid()',
    description: 'Se relaciona la columna user_id con auth.users para que solo el dueño del token pueda modificar sus propios productos.',
    codeSnippet: 'CREATE POLICY "Users can manage only their own products" \nON public.products \nFOR ALL \nUSING (auth.uid() = user_id);'
  }
];

export const COMPARISON_TABLE = [
  {
    criterio: 'Tipo de Base de Datos',
    supabase: 'PostgreSQL Relacional (SQL, tablas, tipos estrictos)',
    firebase: 'NoSQL Documental (colecciones en Firestore)',
    backendTradicional: 'Manual (MySQL, PostgreSQL o Mongo instalado por cuenta propia)'
  },
  {
    criterio: 'Licencia / Código',
    supabase: 'Código Abierto (Open Source, permite servidores propios)',
    firebase: 'Propietario de Google (cerrado)',
    backendTradicional: 'Cualquier servidor o VPS'
  },
  {
    criterio: 'Creación de APIs',
    supabase: 'Automática e inmediata al crear las tablas',
    firebase: 'A través de las librerías del cliente',
    backendTradicional: 'Escribir rutas y controladores a mano en Express o Django'
  },
  {
    criterio: 'Seguridad de los datos',
    supabase: 'Row Level Security (RLS) directamente en PostgreSQL',
    firebase: 'Security Rules de Firestore',
    backendTradicional: 'Middlewares y validaciones manuales en el código del servidor'
  }
];
