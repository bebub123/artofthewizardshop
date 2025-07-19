const produkte = [
  { name: "Handgemaltes Bild", preis: "40€", bild: "bild1.jpg" },
  { name: "Kerze", preis: "10€", bild: "kerze.jpg" }
];

const container = document.getElementById("produkte");
produkte.forEach(p => {
  const el = document.createElement("div");
  el.className = "produkt";
  el.innerHTML = `
    <img src="${p.bild}" alt="${p.name}" style="width:100px;"><br>
    <strong>${p.name}</strong><br>
    <span>${p.preis}</span><br>
    <button onclick="alert('Bestellung per E-Mail angeben')">Kaufen</button>
  `;
  container.appendChild(el);
});
