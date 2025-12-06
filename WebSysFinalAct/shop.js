// OPEN / CLOSE MODALS (buttons have data-target attr referencing modal id)
document.querySelectorAll('.open-modal-btn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const id = btn.getAttribute('data-target');
    const modal = document.getElementById(id);
    if(modal) modal.style.display = 'flex';
  });
});

// Close buttons
document.addEventListener('click', e=>{
  if(e.target.classList.contains('modal-close')) {
    e.target.closest('.modal').style.display = 'none';
  }
  // close modal when clicking overlay
  if(e.target.classList && e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Swap gallery main image
function swapImage(mainImgId, src) {
  const el = document.getElementById(mainImgId);
  if(el) el.src = src;
}

/* Color selection buttons: receive button element, mark selected */
function selectColor(btn) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.color-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

// get selected color from container (returns string or null)
function getSelectedColor(container) {
  if(!container) return null;
  const sel = container.querySelector('.color-btn.selected');
  return sel ? sel.dataset.color : null;
}

/* Add to cart helper (used by modals) */
/* Accepts an object with fields: id, name, price, image, size (opt), color/variant (opt), qty */
function addToCartFromModal(item) {
  // normalize qty
  item.qty = item.qty && Number(item.qty) > 0 ? Number(item.qty) : 1;

  // load cart
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // try match existing item by id + size + color/variant
  const sameIndex = cart.findIndex(ci => ci.id === item.id
    && (ci.size || '') === (item.size || '')
    && (ci.color || '') === (item.color || '')
    && (ci.variant || '') === (item.variant || ''));

  if(sameIndex > -1) {
    cart[sameIndex].qty += item.qty;
  } else {
    // create unique entry
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price || 0,
      qty: item.qty,
      size: item.size || '',
      color: item.color || '',
      variant: item.variant || '',
      image: item.image || ''
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  // close the modal that the add button sits in
  const openModal = document.querySelector('.modal[style*="display: flex"]');
  if(openModal) openModal.style.display = 'none';

  // redirect to cart page
  showToast("Item added to cart!");
}

// Generic addToCart for simple product cards (not used in modal but kept)
function addToCart(name, price, image){
  // find corresponding product card by name (rarely used now)
  const cards = document.querySelectorAll('.pro');
  let qty = 1, size = '', color = '', variant = '';
  cards.forEach(card=>{
    if(card.querySelector('h5') && card.querySelector('h5').innerText.trim() === name.trim()){
      const q = card.querySelector('.qty');
      if(q) qty = Number(q.value) || 1;
    }
  });
  addToCartFromModal({ id: name.toLowerCase().replace(/\s+/g,'_'), name, price, image, qty });
}

/* Accessibility: close modals on ESC */
document.addEventListener('keydown', evt=>{
  if(evt.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(m=>m.style.display='none');
  }
});

// Toast Notification Function

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
    }, 2000)
}





