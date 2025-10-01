const buttons = document.querySelectorAll('.menu-button');
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
              <h2 class="font-bold text-lg">${evento.titulo}</h2> 
              <span class="bg-[#B01C1C] rounded-xl px-2 text-white font-medium text-sm">${evento.tipo}</span>
          </div>
          <p class="text-gray-500">${evento.componente}</p>
          <span class="text-gray-500">${evento.data}</span>
      </div>
      <div class="mx-10">
          <button class="p-2 rounded-lg border border-gray-300 font-medium text-sm"><i class="fa-regular fa-bell mx-1"></i><span>Lembrete</span></button>
      </div>
    </div>`; 
    sectionAgenda.innerHTML += sectionAgendacontent;
  });

  buttons.forEach(btn => btn.classList.remove('bg-white'));

  buttons[0].classList.add('bg-white');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('bg-white'));
      button.classList.add('bg-white');
      });
    });




  buttons.forEach(btn => {
    btn.classList.remove('text-black');
    btn.classList.add('text-gray-400');
  });

  buttons[0].classList.remove('text-gray-400');
  buttons[0].classList.add('text-black');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.classList.remove('text-black');
        btn.classList.add('text-gray-400');
      });
      button.classList.remove('text-gray-400');
      button.classList.add('text-black');
    });
  });
});

