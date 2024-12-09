export function ItemsProductos({item}) {
  return (
    <article class="items__card">
      <img
        src={item.img}
        alt="items image"
        class="items__img"
      />

      <h3 href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Daniel+y+Mar%C3%ADa+Isabel&dates=20250223T200000Z/20250223T240000Z&details=Estamos+muy+emocionados+de+celebrar+este+d%C3%ADa+con+ustedes.&location=Loma+Linda-Sal%C3%B3n+Franc%C3%A9s,+9G8R%2BG4,+Girardota,+Antioquia,+Colombia&sf=true&output=xml
" class="items__name">{item.title}</h3>
      <span class="items__price">{item.precio}</span>

      <button class="items__button">
        <i class="ri-heart-3-line"></i>
      </button>
    </article>
  );
}
