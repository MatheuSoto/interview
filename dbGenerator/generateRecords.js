const fs = require("fs");

const result = [];
function generateRandomID() {
  // Generar un número aleatorio entre 0 y 99999
  const randomNum = Math.floor(Math.random() * 100000);
  // Convertir el número a una cadena de texto y rellenarla con ceros a la izquierda hasta que tenga 5 dígitos
  const randomID = String(randomNum).padStart(5, "0");
  return randomID;
}

function generateRecords() {
  const categories = 16;
  const productsPerCategory = 12;
  const names = Array.from(
    { length: 26 },
    (_, i) => `Product ${String.fromCharCode(i + 65)}`
  );
  let categoryCount = 0;
  let monthIndex = 0;
  const randomAmounts = new Set();
  while (randomAmounts.size < categories * productsPerCategory) {
    randomAmounts.add(Math.floor(Math.random() * 10000) + 1);
  }
  for (let i = 0; i < categories * productsPerCategory; i++) {
    const categoryIndex = Math.floor(i / productsPerCategory);
    const nameIndex = i % names.length;
    const date = new Date(`2022-${monthIndex + 1}-01`);
    const month = date.toLocaleString("en-US", { month: "short" });
    const amount = randomAmounts.values().next().value;
    randomAmounts.delete(amount);

    result.push({
      id: parseInt(generateRandomID()),
      category_id: categoryIndex + 1,
      name: names[nameIndex],
      description: `${names[nameIndex]} description`,
      date: `${date.getDate().toString().padStart(2, "0")}/${(monthIndex + 1)
        .toString()
        .padStart(2, "0")}/2022`,
      amount: amount,
      month: month,
      year: 2022,
    });

    if (i % productsPerCategory === productsPerCategory - 1) {
      categoryCount++;
      monthIndex = 0;
    } else {
      monthIndex++;
    }
  }
}
generateRecords();
generateRecords();
generateRecords();

const productsJson = JSON.stringify(result, null, 2);
fs.writeFileSync("./db/records.json", productsJson);
console.log("Archivo generado correctamente.");
