// Catálogo DEMO: reemplazar por el inventario y las imágenes autorizadas de ENTERCOMEC.
export const categories = [

  [
    'computacion',
    'Computación',
    `<svg viewBox="0 0 48 48" aria-hidden="true" style="width:42px;height:42px;color:#168fca;display:block;">
      <rect x="6" y="8" width="36" height="25" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M18 40h12M24 33v7M14 40h20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    [
      'Laptops',
      'PCs',
      'Monitores',
      'Componentes',
      'Memorias',
      'Almacenamiento',
      'Fuentes de poder',
      'Accesorios'
    ]
  ],

  [
    'gaming',
    'Gaming',
    `<svg viewBox="0 0 48 48" aria-hidden="true" style="width:42px;height:42px;color:#168fca;display:block;">
      <path d="M14 16h20c6 0 9 5 9 12l-2 9c-.7 3.2-4.5 4.2-6.8 1.8L29 33H19l-5.2 5.8C11.5 41.2 7.7 40.2 7 37l-2-9c0-7 3-12 9-12Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M14 25h9M18.5 20.5v9M32 23h.1M36 27h.1" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    [
      'Mouse',
      'Teclados',
      'Headsets',
      'Mousepads',
      'Controles',
      'Accesorios'
    ]
  ],

  [
    'conectividad',
    'Conectividad',
    `<svg viewBox="0 0 48 48" aria-hidden="true" style="width:42px;height:42px;color:#168fca;display:block;">
      <path d="M8 19c9-9 23-9 32 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M14 26c6-6 14-6 20 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M20 32c2.5-2.5 5.5-2.5 8 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="24" cy="38" r="2.5" fill="currentColor"/>
    </svg>`,
    [
      'Adaptadores',
      'Hubs',
      'Cables',
      'Wi-Fi',
      'Redes',
      'USB',
      'Bluetooth'
    ]
  ],

  [
    'energia',
    'Energía',
    `<svg viewBox="0 0 48 48" aria-hidden="true" style="width:42px;height:42px;color:#168fca;display:block;">
      <path d="M28 5 12 27h11l-3 16 16-24H25l3-14Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>`,
    [
      'Reguladores',
      'Supresores',
      'UPS',
      'Protección eléctrica'
    ]
  ],

  [
    'audio',
    'Audio',
    `<svg viewBox="0 0 48 48" aria-hidden="true" style="width:42px;height:42px;color:#168fca;display:block;">
      <path d="M10 27a14 14 0 0 1 28 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="7" y="25" width="8" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <rect x="33" y="25" width="8" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M15 39c3 3 6 4 10 4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    [
      'Audífonos',
      'Headsets',
      'Parlantes',
      'Micrófonos'
    ]
  ],

  [
    'movil',
    'Móvil',
    `<svg viewBox="0 0 48 48" aria-hidden="true" style="width:42px;height:42px;color:#168fca;display:block;">
      <rect x="13" y="5" width="22" height="38" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M20 10h8M22 37h4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    [
      'Cargadores',
      'Cables',
      'Adaptadores',
      'Accesorios'
    ]
  ],

  [
    'smart-home',
    'Smart Home',
    `<svg viewBox="0 0 48 48" aria-hidden="true" style="width:42px;height:42px;color:#168fca;display:block;">
      <path d="M7 22 24 7l17 15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 20v21h26V20M19 41V29h10v12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M31 15V9h5v10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>`,
    [
      'Iluminación inteligente',
      'Seguridad',
      'Domótica'
    ]
  ]

].map(([slug, name, icon, subcategories]) => ({
  slug,
  name,
  icon,
  subcategories
}));

const rows = [
 ['Mouse inalámbrico M110','Logitech','GAM-910006','gaming','Mouse',16.9,22.9,'En stock',['silencioso','usb','ergonómico'],1,1,1],
 ['Teclado compacto K380','Logitech','GAM-K380','gaming','Teclados',42.5,null,'Últimas unidades',['bluetooth','multidispositivo'],1,1,0],
 ['Headset H151 estéreo','Logitech','AUD-H151','audio','Headsets',27.9,34.9,'En stock',['micrófono','3.5mm'],0,0,1],
 ['Router Archer C6','TP-Link','CON-ARCHC6','conectividad','Wi-Fi',58.9,69.9,'En stock',['wifi','dual band','gigabit'],1,0,1],
 ['Hub USB-C 7 en 1','UGREEN','CON-HUB7','conectividad','Hubs',39.9,null,'En stock',['usb-c','hdmi','lector sd'],1,1,0],
 ['Cable USB-C 100W','UGREEN','MOV-100W','movil','Cables',12.5,null,'En stock',['carga rápida','usb-c'],0,1,0],
 ['SSD NV3 1TB','Kingston','COM-NV31TB','computacion','Almacenamiento',79.9,96.9,'En stock',['nvme','pcie 4.0','1tb'],1,0,1],
 ['Memoria Fury 16GB DDR4','Kingston','COM-FURY16','computacion','Memorias',44.9,null,'Últimas unidades',['ddr4','3200mhz'],0,1,0],
 ['Monitor Eye Care 24”','ASUS','COM-VA24','computacion','Monitores',169.9,189.9,'En stock',['24 pulgadas','full hd','ips'],1,0,1],
 ['Laptop IdeaPad 15','Lenovo','COM-IP15','computacion','Laptops',649.9,null,'Próximamente',['15 pulgadas','ssd','oficina'],1,1,0],
 ['UPS NT-1011 1000VA','Forza','ENE-NT1011','energia','UPS',119.9,null,'En stock',['respaldo','1000va'],1,0,0],
 ['Supresor FSP-06','Forza','ENE-FSP06','energia','Supresores',22.9,null,'En stock',['6 tomas','protección'],0,0,0],
 ['Audífonos Redmi Buds 6','Xiaomi','AUD-RB6','audio','Audífonos',36.9,44.9,'En stock',['inalámbrico','bluetooth','estuche'],1,1,1],
 ['Parlante portátil Mini','Xiaomi','AUD-MINI','audio','Parlantes',29.9,null,'En stock',['bluetooth','portátil'],0,0,0],
 ['Cargador GaN 65W','Baseus','MOV-GAN65','movil','Cargadores',34.9,null,'En stock',['65w','usb-c','gan'],1,1,0],
 ['Adaptador USB-C a HDMI','UGREEN','CON-HDMI4K','conectividad','Adaptadores',19.9,null,'En stock',['4k','usb-c','hdmi'],0,0,0],
 ['Mousepad Control XL','HyperX','GAM-XL01','gaming','Mousepads',21.9,null,'En stock',['xl','antideslizante'],0,0,0],
 ['Control inalámbrico Nova','8BitDo','GAM-NOVA','gaming','Controles',49.9,59.9,'En stock',['bluetooth','pc','switch'],1,1,1],
 ['Cámara inteligente C200','TP-Link','SH-C200','smart-home','Seguridad',35.9,null,'En stock',['wifi','visión nocturna'],1,0,0],
 ['Bombilla Wi-Fi Tapo','TP-Link','SH-L510','smart-home','Iluminación inteligente',15.9,null,'En stock',['wifi','led','domótica'],0,1,0],
 ['Regulador automático 1200VA','Forza','ENE-FVR1200','energia','Reguladores',43.9,null,'Agotado',['1200va','protección'],0,0,0],
 ['Webcam Full HD C920','Logitech','AUD-C920','audio','Micrófonos',72.9,84.9,'En stock',['full hd','micrófono'],1,0,1],
 ['Fuente 650W Bronze','Corsair','COM-CX650','computacion','Fuentes de poder',89.9,null,'Últimas unidades',['650w','80 plus bronze'],0,0,0],
 ['Base para laptop ajustable','Nexstand','COM-K2','computacion','Accesorios',28.9,null,'En stock',['aluminio','ergonómica'],0,1,0],
 ['Protector de sobretensión FSP-112W','Forza','AU130FOR67','energia','Protección eléctrica',3.33,null,'Agotado',['1 toma','650 joules','110/220v','montaje en pared'],0,1,0],
 ['Regleta de potencia PS-001B','Forza','AU140FOR02','energia','Protección eléctrica',3.69,null,'En stock',['6 tomas','2200w','disyuntor','120/240v'],1,1,0],
 ['Protector de pared FWT-331USBC','Forza','AU130FOR31','energia','Protección eléctrica',9.03,null,'Agotado',['3 tomas','usb-a','usb-c','490 joules'],0,1,0],
 ['Protector con USB FSP-512USBW','Forza','AU130FOR25','energia','Protección eléctrica',12.33,null,'En stock',['5 tomas','2 usb','1200 joules','1540w'],1,1,0],
 ['Protector con USB FSP-612USBW','Forza','AU130FOR26','energia','Protección eléctrica',12.72,null,'En stock',['6 tomas','2 usb','1200 joules','1680w'],1,1,0],
 ['Protector de voltaje FVP-1201B Pack x2','Forza','FVP-1201B-PACK2','energia','Protección eléctrica',16.54,null,'En stock',['2 unidades','1800w','900 joules','1 salida'],0,1,0],
 ['Protector de voltaje FVP-1201B','Forza','FVP-1201B','energia','Protección eléctrica',11.00,null,'En stock',['1800w','900 joules','1 salida','giro 350°'],1,1,0],
 ['Protector de voltaje FVP-1201N','Forza','FVP-1201N','energia','Protección eléctrica',11.14,null,'En stock',['1800w','900 joules','1 salida','protección de red'],1,1,0],
 ['Protector multitoma RHT-06NC','Forza','RHT-06NC','energia','Protección eléctrica',20.10,null,'En stock',['6 salidas giratorias','2160 joules','1800w','120v'],1,1,0],
 ['Protector de voltaje FVP-3302B','Forza','FVP-3302B','energia','Protección eléctrica',14.57,null,'En stock',['3300w','220v','1200 joules','1 salida'],1,1,0],
 ['Protector de voltaje FVP-6630B','Forza','FVP-6630B','energia','Protección eléctrica',16.16,null,'En stock',['6600w','220v','30a','bornera'],1,1,0],
 ['Regleta EZ Power EZP-R001','EZPower','EZP-R001','energia','Protección eléctrica',3.70,null,'En stock',['6 tomas','1875w','cable 1.5m','supresor de picos'],0,1,0],
 ['Regleta de potencia PS-001W x10','Forza','PS-001W-10PCS','energia','Protección eléctrica',36.45,null,'En stock',['10 unidades','6 salidas','110/220v','2200w'],1,1,0]
];
const categoryIcons = {
  'Computación': `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="7" y="9" width="34" height="23" rx="3"/>
      <path d="M18 39h12M24 32v7M14 39h20"/>
    </svg>
  `,

  'Gaming': `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M13 17h22c5 0 8 5 8 11l-2 9c-.5 3-4 4-6 2l-6-6H19l-6 6c-2 2-5 1-6-2l-2-9c0-6 3-11 8-11Z"/>
      <path d="M13 24h8M17 20v8M31 23h.01M36 27h.01"/>
    </svg>
  `,

  'Conectividad': `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 19c9-9 23-9 32 0"/>
      <path d="M13 25c6-6 16-6 22 0"/>
      <path d="M19 31c3-3 7-3 10 0"/>
      <circle cx="24" cy="37" r="2.5"/>
    </svg>
  `,

  'Energía': `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M27 5 12 27h11l-2 16 15-23H25l2-15Z"/>
    </svg>
  `,

  'Audio': `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 27a14 14 0 0 1 28 0"/>
      <rect x="7" y="25" width="8" height="14" rx="3"/>
      <rect x="33" y="25" width="8" height="14" rx="3"/>
      <path d="M15 39c3 3 6 4 10 4"/>
    </svg>
  `,

  'Móvil': `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="13" y="5" width="22" height="38" rx="4"/>
      <path d="M20 10h8M22 37h4"/>
    </svg>
  `,

  'Smart Home': `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m7 22 17-15 17 15"/>
      <path d="M11 20v21h26V20"/>
      <path d="M19 41V29h10v12"/>
      <path d="M31 15v-6h5v10"/>
    </svg>
  `
};
const productImages = {
  
  'AU130FOR67': [
    '/products/FORZA/fsp112w.png',
    '/products/FORZA/fsp112w_2.png',
    '/products/FORZA/fsp112w_3.png',
    '/products/FORZA/fsp112w_4.png',
    '/products/FORZA/fsp112w_5.png',
    '/products/FORZA/fsp112w_6.png'
  ],
};
const productDetails = {
  'AU130FOR67': {
    shortDescription: 'Protector contra sobretensiones Forza AC 110/220 V con 1 toma de corriente y conexión tipo Wall Plug.',

    description: 'Forza - Surge protector - AC 110/220 V - 1 Toma de Corriente - Wall Plug.',

    specifications: {
      'Dispositivo de alimentación': {
        'N° conectores de salida': '1',
        'Nº conectores de entrada': '1',
        'Potencia suministrada': '2500 W',
        'Supresión de sobrevoltaje': 'Sí',
        'Tensión requerida': 'CA 110/220 V',
        'Voltaje proporcionado': '110 V'
      },

      'Diverso': {
        'Categoría de color': 'Blanco',
        'Color': 'Blanco',
        'Condición del producto': 'Nuevo'
      },

      'General': {
        'Tipo de producto': 'Protector contra sobretensiones'
      },

      'Fabricante': {
        'Fabricante': 'Accvent',
        'Marca': 'Forza',
        'Número de Parte': 'FSP-112W'
      }
    }
  }
};

export const products = rows.map(([name,brand,sku,category,subcategory,price,oldPrice,status,tags,featured,isNew,isOffer]) => {
  const slug = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return {
    name,
    brand,
    sku,
    ...productDetails[sku],
    category,
    subcategory,
    price,
    oldPrice,
    status,
    tags,
    featured,
    isNew,
    isOffer,
    slug,
    images: productImages[sku] || [],
    image: (productImages[sku] || [])[0] || ''
  };
});

export const brands = [
  'Logitech',
  'TP-Link',
  'Forza',
  'Kingston',
  'Samsung',
  'ASUS',
  'Lenovo',
  'HP',
  'Xiaomi',
  'UGREEN',
  'Baseus',
  'HyperX',
  'Corsair',
  'EZPower'
];

export const getProduct = slug => products.find(p => p.slug === slug);
