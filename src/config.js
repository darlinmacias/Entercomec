export const STORE = { name: 'ENTERCOMEC', slogan: 'Tecnología que sí necesitas.', iva: 0.15, whatsapp: '0960541954', currency: 'USD', email: 'entercomec@protonmail.com' };
export const money = value => new Intl.NumberFormat('es-EC', { style:'currency', currency: STORE.currency }).format(value);
export const waLink = text => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;
