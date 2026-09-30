// Catálogo: reemplazar por el inventario y las imágenes autorizadas de ENTERCOMEC.
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
['Audífonos Redmi Buds 6 ','Xiaomi','AUD-RB6','audio','Audífonos',36.9,44.9,'En stock',['inalámbrico','bluetooth','estuche'],1,1,1],
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
['Protector de sobretensión FSP-112W','Forza','AU130FOR67','energia','Protección eléctrica',9.99,null,'Últimas unidades',['1 toma','650 joules','110/220v','montaje en pared'],0,1,0],
['Regleta de potencia PS-001B','Forza','AU140FOR02','energia','Protección eléctrica',3.69,null,'En stock',['6 tomas','2200w','disyuntor','120/240v'],1,1,0],
['Protector de pared FWT-331USBC','Forza','AU130FOR31','energia','Protección eléctrica',9.03,null,'Agotado',['3 tomas','usb-a','usb-c','490 joules'],0,1,0],
['Protector con USB FSP-512USBW','Forza','AU130FOR25','energia','Protección eléctrica',12.33,null,'En stock',['5 tomas','2 usb','1200 joules','1540w'],1,1,0],
['Protector con USB FSP-612USBW','Forza','AU130FOR26','energia','Protección eléctrica',12.72,null,'En stock',['6 tomas','2 usb','1200 joules','1680w'],1,1,0],
['Protector de voltaje FVP-1201B Pack x2','Forza','FVP-1201B-PACK2','energia','Protección eléctrica',44.99,null,'En stock',['2 unidades','1800w','900 joules','1 salida'],0,1,0],
['Protector de voltaje FVP-1201B','Forza','FVP-1201B','energia','Protección eléctrica',24.99,null,'En stock',['1800w','900 joules','1 salida','giro 350°'],1,1,0],
['Protector de voltaje FVP-1201N','Forza','FVP-1201N','energia','Protección eléctrica',14.99,null,'En stock',['1800w','900 joules','1 salida','protección de red'],1,1,0],
['Protector multitoma RHT-06NC','Forza','RHT-06NC','energia','Protección eléctrica',20.10,null,'En stock',['6 salidas giratorias','2160 joules','1800w','120v'],1,1,0],
['Protector de voltaje FVP-3302B','Forza','FVP-3302B','energia','Protección eléctrica',24.99,null,'En stock',['3300w','220v','1200 joules','1 salida'],1,1,0],
['Protector de voltaje FVP-6630B','Forza','FVP-6630B','energia','Protección eléctrica',16.16,null,'En stock',['6600w','220v','30a','bornera'],1,1,0],
['Regleta EZ Power EZP-R001','EZPower','EZP-R001','energia','Protección eléctrica',6.70,null,'En stock',['6 tomas','1875w','cable 1.5m','supresor de picos'],0,1,0],
].map(row => [
...row.slice(0, 9),
Boolean(row[9]),
Boolean(row[10]),
Boolean(row[11])
]);
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
'GAM-910006': [
'/mouse-logitech110/mouse110.1.png',
'/mouse-logitech110/mouse110.2.png',
'/mouse-logitech110/mouse110.3.png'
],
'COM-NV31TB': [
'/kingnv31tb/nv31tb.png',
'/kingnv31tb/nv31tb_2.png',
'/kingnv31tb/nv31tb_3.png'
],
'GAM-K380': [
  '/k380/k380.png.png',
  '/k380/k380_2.png.png'
],
'AUD-H151': [
  '/Headset-logitech-H151/head151.png',
  '/Headset-logitech-H151/head151.2.png',
  '/Headset-logitech-H151/head151.3.png'
],
'CON-ARCHC6': [
  '/tplinkarch6/tplinkarchc6.png',
  '/tplinkarch6/tplinkarchc6.1.png',
  '/tplinkarch6/tplinkarchc6.2.png'
],
'CON-HUB7': [
  '/ugrenn-7-1/ugrenn 7.1.png',
  '/ugrenn-7-1/ugrenn 7.2.png',
  '/ugrenn-7-1/ugrenn 7.3.png'
],
'MOV-100W': [
  '/ugrenn-cable-100w/ugreen cable 100w.png',
  '/ugrenn-cable-100w/ugreen cable 100w2.png',
  '/ugrenn-cable-100w/ugreen cable 100w3.png'
],
'COM-FURY16': [
  '/kingnston_ram/kingfury.png',
  '/kingnston_ram/kingfury2.png',
  '/kingnston_ram/kingfury3.png'
],
'COM-VA24': [
  '/monito-asus/monasus.png',
  '/monito-asus/monasus2.png',
  '/monito-asus/monasus3.png'
],
'COM-IP15': [
  '/lenovo15/lenov15.png',
  '/lenovo15/lenov15-2.png'
],
'COM-CX650': [
  '/fuente-corsai650/corsa650-1.png',
  '/fuente-corsai650/corsa650-2.png',
  '/fuente-corsai650/corsa650-3.png',
  '/fuente-corsai650/corsa650-4.png'
],
'COM-K2': [
  '/baselaptop/baselap.png'
],
'SH-L510': [
  '/bombilla tapo/bombilla1.png',
  '/bombilla tapo/bombilla2.png',
  '/bombilla tapo/bombilla3.png',
  '/bombilla tapo/bombilla4.png'
],
'SH-C200': [
  '/camara-tapo/tapo1.png',
  '/camara-tapo/tapo2.png',
  '/camara-tapo/tapo3.png',
  '/camara-tapo/tapo4.png'
],
'MOV-GAN65': [
  '/cargador-65-wats/carga1.png',
  '/cargador-65-wats/carga2.png',
  '/cargador-65-wats/carga3.png',
  '/cargador-65-wats/carga4.png'
],
'AUD-RB6': [
  '/xiaomibud6/bud1.png',
  '/xiaomibud6/bud2.png',
  '/xiaomibud6/bud3.png'
],
'AUD-MINI': [
  '/parlante-xiaomi-gris/parlant1.png',
  '/parlante-xiaomi-gris/parlant2.png',
  '/parlante-xiaomi-gris/parlant3.png',
  '/parlante-xiaomi-gris/parlant4.png'
],
'GAM-XL01': [
  '/mousepad/pad1.png',
  '/mousepad/pad2.png',
  '/mousepad/pad3.png',
  '/mousepad/pad4.png'
],
'GAM-NOVA': [
  '/jostick/mando1.png'
],
'CON-HDMI4K': [
  '/adaptadorhdmi/adaptad1.png',
  '/adaptadorhdmi/adaptad2.png',
  '/adaptadorhdmi/adaptad3.png'
],
'AUD-C920': [
  '/camara-logi-c920/cam1.png',
  '/camara-logi-c920/cam2.png',
  '/camara-logi-c920/cam3.png'
],
'ENE-NT1011': [
  '/upsnt-forza/forza1.png',
  '/upsnt-forza/forza2.png',
  '/upsnt-forza/forza3.png',
  '/upsnt-forza/forza4.png'
],
'ENE-FSP06': [
  '/forza-fsp06/fsp1.png',
  '/forza-fsp06/fsp2.png',
  '/forza-fsp06/fsp3.png'
],
'ENE-FVR1200': [
  '/regulador-FVR-1200/FVR1.png',
  '/regulador-FVR-1200/FVR2.png',
  '/regulador-FVR-1200/FVR3.png'
],
'AU130FOR31': [
  '/protector-pared-fwt33/fwt1.png',
  '/protector-pared-fwt33/fwt2.png',
  '/protector-pared-fwt33/fwt3.png',
  '/protector-pared-fwt33/fwt4.png',
  '/protector-pared-fwt33/fwt5.png'
],
'AU130FOR25': [
  '/Protector-tensión-fsp512/fsp-1.png',
  '/Protector-tensión-fsp512/fsp-2.png',
  '/Protector-tensión-fsp512/fsp-3.png'
],
'AU130FOR26': [
  '/Protector-tensiónfsp-612/FSP-612u1.png',
  '/Protector-tensiónfsp-612/fsp-612u2.png',
  '/Protector-tensiónfsp-612/FSP-612u3.png'
],
'FVP-1201B-PACK2': [
  '/Fvp-1201bx2/fvp1.png',
  '/Fvp-1201bx2/fvp2.png',
  '/Fvp-1201bx2/fvp3.png',
  '/Fvp-1201bx2/fvp4.png'
],
'FVP-1201B': [
  '/FVP-1201B/FVP-1201B.1.png',
  '/FVP-1201B/FVP-1201B.2.png',
  '/FVP-1201B/FVP-1201B.3.png',
  '/FVP-1201B/FVP-1201B.4.png',
  '/FVP-1201B/FVP-1201B.5.png',
  '/FVP-1201B/FVP-1201B.6.png'
],
'FVP-1201N': [
  '/Protector-fvp1201n/FVP-1201N1.png',
  '/Protector-fvp1201n/FVP-1201N2.png',
  '/Protector-fvp1201n/FVP-1201N3.png'
],
'RHT-06NC': [
  '/protector-RHT-06NC/RHT-06NC1.png',
  '/protector-RHT-06NC/RHT-06NC2.png',
  '/protector-RHT-06NC/RHT-06NC3.png'
],
'FVP-3302B': [
  '/Protector-FVP-3302B/FVP-3302B1.png',
  '/Protector-FVP-3302B/FVP-3302B2.png',
  '/Protector-FVP-3302B/FVP-3302B3.png',
  '/Protector-FVP-3302B/FVP-3302B4.png'
],
'FVP-6630B': [
  '/zion-FVP-6630B/FVP-6630B1.png',
  '/zion-FVP-6630B/FVP-6630B2.png',
  '/zion-FVP-6630B/FVP-6630B3.png'
],
'EZP-R001': [
  '/REGLETA-EZ-POWER/ezpower1.png'
],
'AU140FOR02': [
  '/Regleta-2200W/ps1.png',
  '/Regleta-2200W/ps2.png',
  '/Regleta-2200W/ps3.png'
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

export const products = rows.map(([
name,
brand,
sku,
category,
subcategory,
price,
oldPrice,
status,
tags,
featured,
isNew,
isOffer
]) => {
const slug = `${sku}-${name}`
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
 featured: Boolean(featured),
isNew: Boolean(isNew),
isOffer: Boolean(isOffer),
    slug,
    images: productImages[sku] || [],
    image:
(productImages[sku] || [])[0] ||
'/products/no-image.png'  };
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

const productsBySlug = Object.fromEntries(
products.map(product => [product.slug, product])
);
export const getProduct = slug => products.find(p => p.slug === slug);
