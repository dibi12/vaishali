/* ──────────────────────────────────────────────────────────────
   VAISHALI S — drop-in cart drawer.
   Include on any page with: <script src="cart.js"></script>
   Add a bag button in the nav:
     <button class="nav-icon-btn" onclick="openCart()">…<span class="cart-count" id="cartCount">0</span></button>
   Reads/writes the same localStorage 'vs_cart' used by product.html / checkout.
   ────────────────────────────────────────────────────────────── */
(function(){
  if (window.__vsCartLoaded) return;          // guard against double-include
  window.__vsCartLoaded = true;

  const rates   = { INR:1, AED:0.044, USD:0.012, GBP:0.0095, SAR:0.045, EUR:0.011, AUD:0.019 };
  const symbols = { INR:'Rs. ', AED:'AED ', USD:'$ ', GBP:'£', SAR:'SAR ', EUR:'€', AUD:'A$ ' };
  function cur(){ return localStorage.getItem('vs_currency') || 'INR'; }
  function fmtMoney(baseINR){
    const c = cur(), val = baseINR * rates[c];
    const num = c === 'INR'
      ? val.toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2})
      : val.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    return symbols[c] + num;
  }

  /* ── styles ── */
  const css = `
  .cart-scrim{position:fixed;inset:0;background:rgba(11,9,7,0.5);z-index:799;opacity:0;pointer-events:none;transition:opacity .5s}
  .cart-scrim.open{opacity:1;pointer-events:all}
  aside.cart-drawer{position:fixed;top:0;right:0;bottom:0;width:min(440px,92vw);background:var(--ivory,#F4EEE3);z-index:800;transform:translateX(100%);transition:transform .6s cubic-bezier(.25,1,.5,1);display:flex;flex-direction:column}
  aside.cart-drawer.open{transform:translateX(0)}
  .cart-head{display:flex;align-items:center;justify-content:space-between;padding:28px 32px;border-bottom:.5px solid var(--stone,#DAD0BF)}
  .cart-head-title{font-family:var(--serif,"Cormorant Garamond",serif);font-size:1.5rem;font-weight:300;color:var(--charcoal,#1A1712)}
  .cart-head-title span{font-family:var(--sans,"Inter",sans-serif);font-size:.7rem;font-weight:300;color:var(--grey,#7C7261)}
  .cart-close{background:none;border:none;cursor:pointer;color:var(--charcoal,#1A1712);opacity:.6;transition:opacity .3s}
  .cart-close:hover{opacity:1}.cart-close svg{width:15px;height:15px;stroke:currentColor;stroke-width:1.4;fill:none}
  .cart-body{flex:1;overflow-y:auto;padding:8px 32px}
  .cart-empty{text-align:center;padding:80px 20px}
  .cart-empty p{font-family:var(--serif,"Cormorant Garamond",serif);font-size:1.4rem;font-weight:300;color:var(--charcoal,#1A1712);margin-bottom:10px}
  .cart-empty span{font-family:var(--sans,"Inter",sans-serif);font-size:.66rem;font-weight:300;letter-spacing:.08em;color:var(--grey,#7C7261)}
  .cart-empty-btn{display:inline-block;margin-top:28px;padding:14px 30px;background:var(--charcoal,#1A1712);color:var(--ivory,#F4EEE3);font-family:var(--sans,"Inter",sans-serif);font-size:.62rem;font-weight:500;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;transition:background .3s}
  .cart-empty-btn:hover{background:var(--muted-black,#0B0907)}
  .cart-line{display:grid;grid-template-columns:78px 1fr;gap:16px;padding:24px 0;border-bottom:.5px solid var(--stone,#DAD0BF)}
  .cart-line-img{aspect-ratio:3/4;overflow:hidden;background:var(--champagne,#E6DAC6)}
  .cart-line-img img{width:100%;height:100%;object-fit:cover;display:block}
  .cart-line-name{font-family:var(--sans,"Inter",sans-serif);font-size:.68rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--charcoal,#1A1712);line-height:1.45;margin-bottom:5px}
  .cart-line-size{font-family:var(--sans,"Inter",sans-serif);font-size:.6rem;font-weight:300;color:var(--grey,#7C7261);margin-bottom:12px}
  .cart-line-bottom{display:flex;align-items:center;justify-content:space-between}
  .cart-qty{display:flex;align-items:center;border:.5px solid var(--stone,#DAD0BF)}
  .cart-qty button{width:26px;height:26px;background:none;border:none;cursor:pointer;color:var(--charcoal,#1A1712);font-size:.9rem;line-height:1;display:flex;align-items:center;justify-content:center;transition:background .2s}
  .cart-qty button:hover{background:var(--champagne,#E6DAC6)}
  .cart-qty span{min-width:28px;text-align:center;font-family:var(--sans,"Inter",sans-serif);font-size:.66rem;color:var(--charcoal,#1A1712)}
  .cart-line-price{font-family:var(--serif,"Cormorant Garamond",serif);font-size:1rem;font-weight:300;color:var(--charcoal,#1A1712)}
  .cart-line-remove{font-family:var(--sans,"Inter",sans-serif);font-size:.55rem;font-weight:400;letter-spacing:.1em;text-transform:uppercase;color:var(--grey,#7C7261);background:none;border:none;cursor:pointer;text-decoration:underline;text-underline-offset:2px;margin-top:8px;padding:0}
  .cart-line-remove:hover{color:#b14b3a}
  .cart-foot{padding:24px 32px 32px;border-top:.5px solid var(--stone,#DAD0BF);background:var(--ivory,#F4EEE3)}
  .cart-subtotal{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px}
  .cart-subtotal-label{font-family:var(--sans,"Inter",sans-serif);font-size:.66rem;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--charcoal,#1A1712)}
  .cart-subtotal-val{font-family:var(--serif,"Cormorant Garamond",serif);font-size:1.4rem;font-weight:300;color:var(--charcoal,#1A1712)}
  .cart-foot-note{font-family:var(--sans,"Inter",sans-serif);font-size:.6rem;font-weight:300;color:var(--grey,#7C7261);letter-spacing:.05em;margin-bottom:20px}
  .cart-checkout{display:block;width:100%;padding:18px;background:var(--charcoal,#1A1712);color:var(--ivory,#F4EEE3);font-family:var(--sans,"Inter",sans-serif);font-size:.66rem;font-weight:500;letter-spacing:.22em;text-transform:uppercase;text-align:center;text-decoration:none;border:none;cursor:pointer;transition:background .3s;margin-bottom:10px}
  .cart-checkout:hover{background:var(--muted-black,#0B0907)}
  .cart-continue{display:block;width:100%;text-align:center;font-family:var(--sans,"Inter",sans-serif);font-size:.6rem;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:var(--grey,#7C7261);background:none;border:none;cursor:pointer;padding:8px}
  .cart-continue:hover{color:var(--charcoal,#1A1712)}
  .cart-count{position:absolute;top:-7px;right:-12px;min-width:16px;height:16px;padding:0 4px;border-radius:8px;background:var(--gold,#B8975A);color:#fff;font-family:var(--sans,"Inter",sans-serif);font-size:.5rem;font-weight:600;display:flex;align-items:center;justify-content:center;letter-spacing:0;transform:scale(0);transition:transform .3s cubic-bezier(.25,1,.5,1)}
  .cart-count.show{transform:scale(1)}
  .vs-toast{position:fixed;bottom:32px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--charcoal,#1A1712);color:var(--ivory,#F4EEE3);font-family:var(--sans,"Inter",sans-serif);font-size:.66rem;font-weight:400;letter-spacing:.12em;padding:16px 28px;z-index:1000;opacity:0;pointer-events:none;transition:opacity .4s,transform .4s cubic-bezier(.25,1,.5,1)}
  .vs-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}`;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── drawer DOM ── */
  const wa = `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01z`;
  const drawer = document.createElement('div');
  drawer.innerHTML = `
    <div class="cart-scrim" id="cartScrim"></div>
    <aside class="cart-drawer" id="cartDrawer" aria-label="Shopping bag">
      <div class="cart-head">
        <div class="cart-head-title">Your Bag <span id="cartHeadCount"></span></div>
        <button class="cart-close" aria-label="Close bag"><svg viewBox="0 0 15 15"><path d="M1 1 L14 14 M14 1 L1 14"/></svg></button>
      </div>
      <div class="cart-body" id="cartBody"></div>
      <div class="cart-foot" id="cartFoot" style="display:none">
        <div class="cart-subtotal"><span class="cart-subtotal-label">Subtotal</span><span class="cart-subtotal-val" id="cartSubtotal"></span></div>
        <p class="cart-foot-note">Shipping &amp; taxes calculated at checkout.</p>
        <a class="cart-checkout" href="checkout.html">Proceed to Checkout</a>
        <button class="cart-continue" id="cartContinue">Continue Shopping</button>
      </div>
    </aside>
    <div class="vs-toast" id="vsToast"></div>`;
  document.body.appendChild(drawer);
  document.getElementById('cartScrim').addEventListener('click', closeCart);
  document.querySelector('#cartDrawer .cart-close').addEventListener('click', closeCart);
  document.getElementById('cartContinue').addEventListener('click', closeCart);

  /* ── data ── */
  function getCart(){ try { return JSON.parse(localStorage.getItem('vs_cart')) || [] } catch(e){ return [] } }
  function saveCart(c){ localStorage.setItem('vs_cart', JSON.stringify(c)); updateCartCount(); }

  function updateCartCount(){
    const n = getCart().reduce((s,i)=>s+i.qty,0);
    const el = document.getElementById('cartCount');
    if(el){ el.textContent = n; el.classList.toggle('show', n > 0); }
    const hc = document.getElementById('cartHeadCount');
    if(hc) hc.textContent = n ? '(' + n + ')' : '';
  }
  function addToCart(item){
    const c = getCart();
    const ex = c.find(i => i.id === item.id && i.size === item.size);
    if(ex) ex.qty += item.qty; else c.push(item);
    saveCart(c); renderCart();
  }
  function changeQty(idx, d){
    const c = getCart(); c[idx].qty += d;
    if(c[idx].qty <= 0) c.splice(idx,1);
    saveCart(c); renderCart();
  }
  function removeLine(idx){ const c = getCart(); c.splice(idx,1); saveCart(c); renderCart(); }

  function renderCart(){
    const c = getCart();
    const body = document.getElementById('cartBody');
    const foot = document.getElementById('cartFoot');
    if(!c.length){
      body.innerHTML = `<div class="cart-empty"><p>Your bag is empty</p><span>Discover our handwoven couture collections.</span><br><a class="cart-empty-btn" href="couture-collection.html">Explore Collections</a></div>`;
      foot.style.display = 'none'; return;
    }
    body.innerHTML = c.map((i, idx) => `
      <div class="cart-line">
        <div class="cart-line-img"><img src="${i.img}" alt="${i.name}" onerror="this.parentElement.style.background='var(--charcoal)';this.style.display='none'"></div>
        <div>
          <p class="cart-line-name">${i.name}</p>
          <p class="cart-line-size">Size: ${i.size}</p>
          <div class="cart-line-bottom">
            <div class="cart-qty">
              <button onclick="changeQty(${idx},-1)" aria-label="Decrease">−</button>
              <span>${i.qty}</span>
              <button onclick="changeQty(${idx},1)" aria-label="Increase">+</button>
            </div>
            <span class="cart-line-price">${fmtMoney(i.price * i.qty)}</span>
          </div>
          <button class="cart-line-remove" onclick="removeLine(${idx})">Remove</button>
        </div>
      </div>`).join('');
    document.getElementById('cartSubtotal').textContent = fmtMoney(c.reduce((s,i)=>s + i.price*i.qty,0));
    foot.style.display = '';
  }
  function openCart(){ renderCart(); document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartScrim').classList.add('open'); document.body.style.overflow='hidden'; }
  function closeCart(){ document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartScrim').classList.remove('open'); document.body.style.overflow=''; }

  let toastTimer;
  function vsToast(msg){
    const t = document.getElementById('vsToast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
  }

  /* ── expose + init ── */
  window.getCart = getCart; window.saveCart = saveCart;
  window.addToCart = addToCart; window.changeQty = changeQty; window.removeLine = removeLine;
  window.renderCart = renderCart; window.openCart = openCart; window.closeCart = closeCart;
  window.updateCartCount = updateCartCount; window.vsToast = vsToast; window.vsFmtMoney = fmtMoney;

  if(document.readyState !== 'loading') updateCartCount();
  else document.addEventListener('DOMContentLoaded', updateCartCount);
})();
