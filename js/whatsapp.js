// ============================
// whatsapp.js
// ============================

// Número de WhatsApp
const phoneNumber = "573106948018"; // cámbialo por el tuyo

// Crear contenedor flotante
const container = document.createElement("div");
container.classList.add("floating-buttons");

// Mensaje emocional y persuasivo usando neuromarketing
const mensaje = `¡Hola! 👋 Estoy explorando tu catálogo de maquillaje y me encantó lo que vi🌟`;

// Botón de WhatsApp
const btnWhatsapp = document.createElement("a");
btnWhatsapp.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;
btnWhatsapp.target = "_blank";
btnWhatsapp.classList.add("btn-whatsapp");
btnWhatsapp.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48a11.9 11.9 0 0 0-16.87 0c-4.66 4.66-4.66 12.21 0 16.87a11.9 11.9 0 0 0 13.77 2.25l3.72 1.22-1.22-3.72a11.9 11.9 0 0 0 2.6-7.1c0-3.22-1.25-6.25-3.52-8.52zM12 20c-1.77 0-3.5-.46-5-1.34l-.36-.21-2.98.98.98-2.98-.21-.36A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8 2.14 0 4.15.83 5.66 2.34A7.96 7.96 0 0 1 20 12c0 4.41-3.59 8-8 8zm4.31-5.69c-.25-.13-1.47-.73-1.7-.81s-.39-.13-.55.13-.63.81-.77.97-.28.19-.53.06a6.48 6.48 0 0 1-1.91-1.18 7.16 7.16 0 0 1-1.32-1.64c-.14-.25 0-.38.11-.5.12-.12.25-.31.38-.47.12-.16.16-.28.25-.47.08-.19.03-.34-.02-.47s-.55-1.33-.75-1.82c-.2-.48-.41-.42-.55-.43h-.47c-.16 0-.41.06-.63.28s-.83.81-.83 1.98  .85 2.3.97 2.46c.12.16 1.67 2.55 4.05 3.58.57.25 1.02.4 1.37.51.57.18 1.09.16 1.5.1.46-.07 1.41-.58 1.61-1.14.2-.55.2-1.02.14-1.13-.05-.11-.23-.18-.48-.31z"/>
  </svg>
`;

// Botón de Carrito
const btnCarrito = document.createElement("a");
btnCarrito.href = "carrito.html"; // Ajusta la ruta según tu proyecto
btnCarrito.classList.add("btn-carrito");
btnCarrito.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
             0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
             14h9.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21 
             5H5.21L4.27 3H1v2h2l3.6 7.59-1.35 
             2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"/>
  </svg>
`;

// Insertar botones en el contenedor
container.appendChild(btnCarrito);
container.appendChild(btnWhatsapp);

// Agregar al body
document.body.appendChild(container);