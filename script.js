document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("dropdownDefaultButton");
    const dropdown = document.getElementById("dropdown");

    button.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
    });

  document.addEventListener("click", (event) => {
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
      }
    });
});

const sectionAgenda = document.getElementById("Agenda");

let eventosAgenda = [
  {titulo: "Prova de java", tipo:"Prova" ,componente: "S.I - Programação de Sistemas I", data: "09/12/2025 ás 21:10"},
  {titulo: "Prova de java", tipo:"Prova" ,componente: "S.I - Programação de Sistemas I", data: "09/12/2025 ás 21:10"},
  {titulo: "Prova de java", tipo:"Prova" ,componente: "S.I - Programação de Sistemas I", data: "09/12/2025 ás 21:10"}
];

document.addEventListener("DOMContentLoaded", () => {
  eventosAgenda.map(evento => {
    let sectionAgendacontent = `
    <div class="h-32 w-full flex justify-between items-center border border-[#B01C1C] rounded-lg">
      <div class="mx-10">
          <div class="flex items-center gap-2">
              <h2 class="font-bold">${evento.titulo}</h2> 
              <span class="bg-red-500 rounded-xl px-2 text-white font-medium text-sm">${evento.tipo}</span>
          </div>
          <p>${evento.componente}</p>
          <span>${evento.data}</span>
      </div>
      <div class="mx-10">
          <button class="p-2 rounded-lg border border-gray-300"><i class="fa-regular fa-bell mx-1"></i><span>Lembrete</span></button>
      </div>
    </div>`; 
    sectionAgenda.innerHTML += sectionAgendacontent;
  });
});
