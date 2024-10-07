/* PRVY PRIKLAD
const hodinovka = 300
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance", "160"))
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc")) // "Nepíšete oddelene: 10 000 → 10000"
const plat = hodinovka * pocetHodin

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"
*/

const Meno = prompt("Napíšte svoje meno")
const Vek = Number(prompt("Zadajte svoj vek"))

document.body.innerHTML = Meno + " ," + " vek: " + Vek
