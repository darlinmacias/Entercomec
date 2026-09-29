import { STORE, money, waLink } from './config.js';
import { products, categories, brands, getProduct } from './data.js';

const app = document.querySelector('#app');
let cart = JSON.parse(localStorage.getItem('entercomec-cart') || '[]');
let query = '', filters = {brand:'', status:'', max:''};
const save = () => { localStorage.setItem('entercomec-cart', JSON.stringify(cart)); };
const qty = id => cart.find(x=>x.id===id)?.qty || 0;
const add = id => { const item=cart.find(x=>x.id===id); item ? item.qty++ : cart.push({id,qty:1}); save(); render(); };
const update = (id, n) => {
    const item = cart.find(x => x.id === id);

    if (n < 1) {
        cart = cart.filter(x => x.id !== id);
    } else if (item) {
        item.qty = n;
    } else {
        cart.push({ id, qty: n });
    }

    save();
    render();
};const cartItems=()=>cart.map(x=>({...products.find(p=>p.id===x.id),qty:x.qty})).filter(x=>x.id);
const totals=()=>{const subtotal=cartItems().reduce((s,p)=>s+p.price*p.qty,0), iva=subtotal*STORE.iva; return {subtotal,iva,total:subtotal+iva};};
const link = (path,label,cls='') => `<a class="${cls}" href="${path}" data-nav>${label}</a>`;
const icon = p => `<div class="product-image" aria-label="Imagen de ${p.name}">${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy"/>` : `<div><span>${p.icon}</span><small>Imagen demo</small></div>`}</div>`;
const price = p => `<div class="price">${p.oldPrice?`<s>${money(p.oldPrice)}</s>`:''}<strong>${money(p.price)}</strong>${p.oldPrice?`<em>-${Math.round((1-p.price/p.oldPrice)*100)}%</em>`:''}</div>`;
const badge = status => `<span class="stock ${status==='Agotado'?'out':status==='Últimas unidades'?'low':''}">${status}</span>`;
function productCard(p){return `<article class="product-card">${p.isNew?'<b class="corner">Nuevo</b>':''}${icon(p)}<div class="product-body"><p class="brand">${p.brand}</p><h3>${link('/producto/'+p.slug,p.name)}</h3><small>SKU ${p.sku}</small>${price(p)}${badge(p.status)}<div class="card-actions">${link('/producto/'+p.slug,'Ver producto','button ghost')}<a class="wa-mini" href="${waLink(`Hola, estoy interesado en el producto ${p.name}, SKU ${p.sku}.`)}" target="_blank" rel="noreferrer">WhatsApp</a></div></div></article>`}
function header(){
  return `
    <header class="site-header">

      <div class="top">
        <a href="/" data-nav class="logo">ENTER<span>COM</span>EC</a>

        <button class="menu" data-action="menu" aria-label="Abrir menú">
          ☰
        </button>

        <nav>
          ${link('/','Inicio')}
          ${link('/productos','Productos')}
          ${link('/ofertas','Ofertas')}
          ${link('/nuevos','Nuevos')}
          ${link('/marcas','Marcas')}
        </nav>

        <form class="search">
          <input
            name="q"
            value="${query}"
            placeholder="Buscar productos, marcas o SKU"
            aria-label="Buscar productos"
          />
          <button type="submit" aria-label="Buscar">⌕</button>
        </form>

        <a
          class="whatsapp"
          href="${waLink('Hola, quiero información sobre ENTERCOMEC.')}"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        ${link(
          '/carrito',
          `<span class="cart-icon">🛒</span><span class="cart-label">Carrito</span><b class="cart-count">${cart.reduce((s,x)=>s+x.qty,0)}</b>`,
          'cart'
        )}
      </div>

      <div class="category-nav">
        <span class="category-title">Categorías</span>

        ${categories.map(c =>
          link('/categoria/'+c.slug,c.name)
        ).join('')}
      </div>

    </header>
  `;
}
function footer(){return `<footer><div><a class="logo" href="/" data-nav>ENTER<span>COM</span>EC</a><p>${STORE.slogan}</p><p class="muted">Tecnología y accesorios para Ecuador.</p></div><div><h4>Navegación</h4>${link('/','Inicio')}${link('/productos','Productos')}${link('/ofertas','Ofertas')}${link('/nuevos','Nuevos')}${link('/marcas','Marcas')}</div><div><h4>Categorías</h4>${categories.map(c=>link('/categoria/'+c.slug,c.name)).join('')}</div><div><h4>Ayuda</h4><a href="mailto:${STORE.email}">Contacto</a><a href="/productos" data-nav>Garantías</a><a href="/productos" data-nav>Envíos</a><a href="/productos" data-nav>Términos</a><p>${STORE.email}<br/>Ecuador</p></div><small class="copyright">© ${new Date().getFullYear()} ENTERCOMEC. Catálogo.</small></footer>`}
function hero(){
  return `
  <section class="hero-slider" aria-label="Promociones destacadas">

    <div class="hero-slide hero-slide-1">
    <img src="/banners/forza-1.png" alt="Banner Forza">
</div>

    <div class="hero-slide hero-slide-2">
    <img src="/banners/forza-2.jpg" alt="Banner Forza">
</div>

    <div class="hero-slide hero-slide-3">
   <img src="/banners/klip-3.jpg" alt="Banner Klip">
</div>

    <div class="hero-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </section>`;
}
const section=(title,desc,items,more)=>`<section class="section"><div class="section-title"><div><p class="eyebrow">ENTERCOMEC</p><h2>${title}</h2>${desc?`<p>${desc}</p>`:''}</div>${more||''}</div><div class="product-grid">${items.map(productCard).join('')}</div></section>`;
function home(){
  return `
    ${hero()}

    <section class="section category-section">
      <div class="section-title">
        <div>
          <p class="eyebrow">EXPLORA</p>
          <h2>Encuentra lo que buscas</h2>
        </div>

        ${link('/productos','Ver todo','text-link')}
      </div>

      <div class="category-grid">
        ${categories.map(c => `
          <a href="/categoria/${c.slug}" data-nav class="category-card">
            <b>${c.icon}</b>
            <span>${c.name}</span>
          </a>
        `).join('')}
      </div>
    </section>

    ${section(
      'Productos destacados',
      'Selección demo para trabajar, conectar y disfrutar.',
      products.filter(p => p.isFeatured).slice(0,4),
      link('/productos','Ver productos','text-link')
    )}

    ${section(
      'Ofertas',
      'Precios de muestra para probar la experiencia de compra.',
      products.filter(p => p.isOffer).slice(0,4),
      link('/ofertas','Ver ofertas','text-link')
    )}

    ${section(
      'Recién llegados',
      'Novedades para tu setup.',
      products.filter(p => p.isNew).slice(0,4),
      link('/nuevos','Ver nuevos','text-link')
    )}

    <section class="benefits">
      <div>
        <b>↗</b>
        <h3>Envíos a Ecuador</h3>
        <p>Coordinación clara antes de tu compra.</p>
      </div>

      <div>
        <b>✓</b>
        <h3>Compra asistida</h3>
        <p>Te ayudamos a elegir por WhatsApp.</p>
      </div>

      <div>
        <b>▣</b>
        <h3>Catálogo seleccionado</h3>
        <p>Tecnología útil, sin ruido.</p>
      </div>
    </section>

<section class="brands-band">
  <p class="eyebrow">MARCAS</p>

  <div class="brand-logos">
    <a href="/marca/logitech" data-nav>
      <img src="/brands/logitech_negro.png" alt="Logitech">
    </a>

    <a href="/marca/tp-link" data-nav>
      <img src="/brands/tp-link-color.png" alt="TP-Link">
    </a>

    <a href="/marca/forza" data-nav>
      <img src="/brands/forza_color.png" alt="Forza">
    </a>

    <a href="/marca/kingston" data-nav>
      <img src="/brands/kingston_color.png" alt="Kingston">
    </a>

    <a href="/marca/samsung" data-nav>
      <img src="/brands/samsung_negro.png" alt="Samsung">
    </a>

    <a href="/marca/asus" data-nav>
      <img src="/brands/asus_negro.png" alt="ASUS">
    </a>

    <a href="/marca/lenovo" data-nav>
      <img src="/brands/LENOVO_principal.png" alt="Lenovo">
    </a>

    <a href="/marca/xiaomi" data-nav>
      <img src="/brands/xiaomi-color.png" alt="Xiaomi">
    </a>
  </div>
</section>
  `;
}const slugify=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-');
function filtersUI(){return `<aside class="filters"><h3>Filtrar</h3><label>Marca<select data-filter="brand"><option value="">Todas las marcas</option>${brands.map(b=>`<option ${filters.brand===b?'selected':''}>${b}</option>`).join('')}</select></label><label>Precio máximo<select data-filter="max"><option value="">Sin límite</option><option value="25">Hasta $25</option><option value="50">Hasta $50</option><option value="100">Hasta $100</option><option value="200">Hasta $200</option></select></label><label>Disponibilidad<select data-filter="status"><option value="">Cualquier estado</option><option>En stock</option><option>Últimas unidades</option><option>Agotado</option><option>Próximamente</option></select></label><button class="clear" data-action="clear-filters">Limpiar filtros</button></aside>`}
function listing(title, base=products, description='Explora nuestro catálogo.'){const result=base.filter(p=>{const text=(p.name+' '+p.brand+' '+p.sku+' '+p.category+' '+p.subcategory+' '+p.tags.join(' ')).toLowerCase(); return (!query||text.includes(query.toLowerCase()))&&(!filters.brand||p.brand===filters.brand)&&(!filters.status||p.status===filters.status)&&(!filters.max||p.price<=Number(filters.max));});return `<section class="page-head"><p class="eyebrow">CATÁLOGO</p><h1>${title}</h1><p>${description}</p></section><section class="catalog"><button class="filter-button" data-action="toggle-filters">☷ Filtros</button>${filtersUI()}<div><div class="results"><b>${result.length} productos</b>${query?`<span>Resultados para “${query}”</span>`:''}</div><div class="product-grid">${result.map(productCard).join('')||'<div class="empty">No encontramos productos con esos filtros.</div>'}</div></div></section>`}
function productPage(p){if(!p)return notFound(); const related=products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4); return `<div class="breadcrumb">${link('/','Inicio')} / ${link('/categoria/'+p.category,p.category)} / ${p.name}</div><section class="product-detail"><div class="gallery">
  <img class="product-main-image" src="${p.images?.[0] || p.image}" alt="${p.name}">
  <div class="thumbs">
    ${p.images.map((x,i)=>`
      <button type="button" class="${i===0?'active':''}" data-image="${x}">
        <img src="${x}" alt="${p.name}">
      </button>
    `).join('')}
  </div>
</div><div class="detail-info"><p class="brand">${p.brand}</p><h1>${p.name}</h1><p class="muted">SKU ${p.sku}</p>${price(p)}${badge(p.status)}<p>${p.shortDescription}</p><div class="quantity"><button data-action="detail-minus" ${qty(p.id)<1?'disabled':''}>−</button><b>${qty(p.id)||1}</b><button data-action="detail-plus">+</button></div><button class="button add" data-add="${p.id}" ${p.status==='Agotado'?'disabled':''}>Agregar al carrito</button><a class="button secondary" target="_blank" rel="noreferrer" href="${waLink(`Hola, estoy interesado en el producto ${p.name}, SKU ${p.sku}.`)}">Comprar por WhatsApp</a><div class="description"><h3>Descripción</h3><p>${p.description}</p><h3>Especificaciones</h3>
<div class="specifications">
  ${Object.entries(p.specifications || {}).map(([group, specs]) => `
    <div class="spec-group">
      <h4>${group}</h4>
      <dl>
        ${Object.entries(specs).map(([key, value]) => `
          <div class="spec-row">
            <dt>${key}</dt>
            <dd>${value}</dd>
          </div>
        `).join('')}
      </dl>
    </div>
  `).join('')}
</div><h3>Características</h3><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div></div></section>${section('También te puede interesar','Productos relacionados de la misma categoría.',related)}`}
function cartPage(){const items=cartItems(), t=totals(); return `<section class="page-head"><p class="eyebrow">TU COMPRA</p><h1>Carrito</h1><p>Revisa tus productos antes de continuar.</p></section>${!items.length?`<div class="empty cart-empty"><h2>Tu carrito está vacío</h2><p>Aún no agregas productos.</p>${link('/productos','Explorar productos','button')}</div>`:`<section class="cart-page"><div class="cart-list">${items.map(p=>`<article class="cart-item">${icon(p)}<div><p class="brand">${p.brand}</p><h3>${p.name}</h3><small>SKU ${p.sku}</small>${price(p)}</div><div class="stepper"><button data-qty="${p.id}|${p.qty-1}">−</button><b>${p.qty}</b><button data-qty="${p.id}|${p.qty+1}">+</button></div><button class="remove" data-qty="${p.id}|0">Eliminar</button></article>`).join('')}<button class="clear" data-action="clear-cart">Vaciar carrito</button></div>${summary(t,true)}</section>`}`}
function summary(t, checkout=false){const wa=`Hola, quiero realizar una consulta sobre estos productos: ${cartItems().map(p=>`${p.name} x${p.qty}`).join(', ')}. Total aproximado: ${money(t.total)}.`;return `<aside class="summary"><h2>Resumen</h2><p><span>Subtotal</span><b>${money(t.subtotal)}</b></p><p><span>IVA (${STORE.iva*100}%)</span><b>${money(t.iva)}</b></p><p class="total"><span>Total</span><b>${money(t.total)}</b></p>${checkout?link('/checkout','Continuar al checkout','button'):''}<a href="${waLink(wa)}" target="_blank" rel="noreferrer" class="button secondary">Consultar por WhatsApp</a></aside>`}
function checkout(){if(!cart.length)return `<div class="empty cart-empty"><h1>Tu carrito está vacío</h1>${link('/productos','Explorar productos','button')}</div>`;const t=totals();return `<section class="page-head"><p class="eyebrow">CHECKOUT DEMO</p><h1>Finaliza tu consulta</h1><p>No procesaremos un pago: esta etapa prepara el pedido para WhatsApp.</p></section><section class="checkout"><form id="checkout-form"><h2>Datos de contacto</h2><div class="form-grid"><label>Nombre completo<input required name="name"/></label><label>Teléfono<input required name="phone" type="tel"/></label><label>Correo<input required name="email" type="email"/></label><label>Ciudad<input required name="city"/></label></div><label>Dirección<input required name="address"/></label><label>Observaciones<textarea name="notes" rows="3"></textarea></label><fieldset><legend>Método de pago (demostración)</legend>${['Transferencia bancaria','Efectivo','Tarjeta','Link de pago'].map((x,i)=>`<label class="radio"><input type="radio" name="payment" value="${x}" ${i?'':'checked'}/> ${x}</label>`).join('')}</fieldset><button class="button">Continuar por WhatsApp</button></form>${summary(t)}</section>`}
function brandsPage(){return `<section class="page-head"><p class="eyebrow">MARCAS</p><h1>Encuentra por marca</h1><p>Marcas presentadas únicamente como demostración de interfaz.</p></section><section class="brand-grid">${brands.map(b=>`<a href="/marca/${slugify(b)}" data-nav class="brand-card"><b>${b.slice(0,2).toUpperCase()}</b><span>${b}</span><small>Ver productos →</small></a>`).join('')}</section>`}
const notFound=()=>`<div class="empty cart-empty"><h1>Página no encontrada</h1><p>Puede que el enlace haya cambiado.</p>${link('/','Volver al inicio','button')}</div>`;
function render(){
  const path = location.pathname.replace(/\/$/, '') || '/';
   let content;if(path==='/')content=home();else if(path==='/productos')content=listing('Todos los productos');else if(path==='/ofertas')content=listing('Ofertas',products.filter(p=>p.isOffer),'Precios con descuentos.');else if(path==='/nuevos')content=listing('Nuevos productos',products.filter(p=>p.isNew),'Lo último del catálogo demo.');else if(path==='/marcas')content=brandsPage();else if(path==='/carrito')content=cartPage();else if(path==='/checkout')content=checkout();else if(path.startsWith('/producto/'))content=productPage(getProduct(path.split('/').pop()));else if(path.startsWith('/categoria/')){const c=categories.find(c=>c.slug===path.split('/').pop()); content=c?listing(c.name,products.filter(p=>p.category===c.slug),c.subcategories.join(' · ')):notFound();}else if(path.startsWith('/marca/')){const name=brands.find(b=>slugify(b)===path.split('/').pop());content=name?listing(name,products.filter(p=>p.brand===name),`Productos demo de ${name}.`):notFound();}else content=notFound();app.innerHTML=header()+`<main>${content}</main>`+footer(); document.title=path==='/'?'ENTERCOMEC | Tecnología que sí necesitas':`${document.querySelector('h1')?.textContent||'ENTERCOMEC'} | ENTERCOMEC`;}
document.addEventListener('click',e=>{
    const thumb = e.target.closest('[data-image]');
if (thumb) {
  const main = document.querySelector('.product-main-image');
  if (main) main.src = thumb.dataset.image;

  document.querySelectorAll('.thumbs button').forEach(b => b.classList.remove('active'));
  thumb.classList.add('active');
  return;
}const nav=e.target.closest('[data-nav]');if(nav){e.preventDefault();history.pushState({},'',nav.getAttribute('href'));query='';filters={brand:'',status:'',max:''};render();window.scrollTo(0,0);return}const addBtn=e.target.closest('[data-add]');if(addBtn){add(Number(addBtn.dataset.add));return}const q=e.target.closest('[data-qty]');if(q){const [id,n]=q.dataset.qty.split('|').map(Number);update(id,n);return}const action=e.target.closest('[data-action]')?.dataset.action;if(action==='clear-cart'){cart=[];save();render()}if(action==='clear-filters'){filters={brand:'',status:'',max:''};render()}if(action==='toggle-filters'){
  document.querySelector('.filters')?.classList.toggle('shown');
}
if(action==='menu'){
document.querySelector('.site-header nav')?.classList.toggle('open');
}
if(action==='detail-plus'||action==='detail-minus'){const p=getProduct(location.pathname.split('/').pop());const current=qty(p.id)||1;update(p.id,action==='detail-plus'?current+1:current-1)}});

document.addEventListener('change',e=>{if(e.target.dataset.filter){filters[e.target.dataset.filter]=e.target.value;render()}});
document.addEventListener('submit',e=>{if(e.target.matches('.search')){e.preventDefault();query=new FormData(e.target).get('q').trim();history.pushState({},'','/productos');render()}if(e.target.id==='checkout-form'){e.preventDefault();const f=new FormData(e.target),t=totals();const text=`Hola, quiero realizar este pedido: ${cartItems().map(p=>`${p.name} x${p.qty}`).join(', ')}. Total aproximado: ${money(t.total)}. Nombre: ${f.get('name')}. Teléfono: ${f.get('phone')}. Ciudad: ${f.get('city')}. Pago: ${f.get('payment')}.`;window.open(
  waLink(text),
  '_blank',
  'noopener,noreferrer'
);}});
addEventListener('popstate',render);render();

