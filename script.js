const buttons = document.querySelectorAll('.menu-button');
const toggleFiltros = document.getElementById('toggle-filtros');
const filtrosMobile = document.getElementById('filtros-mobile');
const views = document.querySelectorAll('[data-view]');
const sectionAgenda = document.getElementById('Agenda');

const eventosAgenda = [
  { titulo: "Prova de Java", tipo: "Prova", componente: "S.I - Programação de Sistemas I", data: "09/12/2025 às 21:10" },
  { titulo: "Trabalho de Web Mobile", tipo: "Entrega", componente: "S.I - Web Mobile", data: "15/12/2025 às 23:59" },
  { titulo: "Seminário de S.O", tipo: "Apresentação", componente: "S.I - S.O", data: "20/12/2025 às 19:30" },
  { titulo: "Revisão PS I", tipo: "Aula", componente: "S.I - Programação de Sistemas I", data: "05/12/2025 às 20:00" },
  { titulo: "Lista de Exercícios", tipo: "Entrega", componente: "S.I - Cálculo", data: "12/12/2025 às 23:59" },
  { titulo: "Prova de Algoritimos", tipo: "Prova", componente: "S.I - Algoritimos", data: "22/12/2025 às 20:40" },
];

function renderAgenda(items) {
  sectionAgenda.innerHTML = '';
  items.forEach((evento) => {
    const card = document.createElement('article');
    card.className = "w-full border border-[#B01C1C]/80 rounded-lg p-4 sm:p-5 flex flex-col justify-between min-h-32 bg-white";
    card.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-2 flex-wrap">
          <h3 class="font-bold text-base sm:text-lg">${evento.titulo}</h3>
          <span class="bg-[#B01C1C] rounded-xl px-2 py-0.5 text-white font-medium text-xs sm:text-sm">${evento.tipo}</span>
        </div>
        <p class="text-gray-600 text-sm">${evento.componente}</p>
        <span class="text-gray-500 text-sm">${evento.data}</span>
      </div>
      <div class="pt-3">
        <button class="w-full sm:w-auto px-3 py-2 rounded-lg border border-gray-300 font-medium text-sm inline-flex items-center justify-center gap-2 hover:border-[#B01C1C]">
          <i class="fa-regular fa-bell"></i><span>Lembrete</span>
        </button>
      </div>
    `;
    sectionAgenda.appendChild(card);
  });
}

function setActiveButton(active) {
  buttons.forEach((btn) => {
    btn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm', 'border-gray-200');
    btn.classList.add('text-gray-600', 'border-transparent');
    btn.setAttribute('aria-selected', 'false');
  });
  active.classList.add('bg-white', 'text-gray-900', 'shadow-sm', 'border-gray-200');
  active.classList.remove('text-gray-600', 'border-transparent');
  active.setAttribute('aria-selected', 'true');
}

function showView(name) {
  views.forEach(v => v.classList.toggle('hidden', v.dataset.view !== name));
}

function handleSimulador() {
  const form = document.getElementById('sim-form');
  if (!form || form.dataset.bound === 'true') return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const n1 = parseFloat(document.getElementById('n1').value || '0');
    const p1 = parseFloat(document.getElementById('p1').value || '0');
    const n2 = parseFloat(document.getElementById('n2').value || '0');
    const p2 = parseFloat(document.getElementById('p2').value || '0');
    const totalPeso = p1 + p2;
    const media = totalPeso > 0 ? ((n1 * p1) + (n2 * p2)) / totalPeso : 0;
    document.getElementById('sim-res').textContent = `Média: ${media.toFixed(2)}`;
  });

  form.dataset.bound = 'true';
}


function toggleMobileFilters() {
  const expanded = toggleFiltros.getAttribute('aria-expanded') === 'true';
  toggleFiltros.setAttribute('aria-expanded', String(!expanded));
  filtrosMobile.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  renderAgenda(eventosAgenda);
  setActiveButton(buttons[0]);
  showView('agenda');
  handleSimulador();

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveButton(button);
      const tab = button.dataset.tab;
      showView(tab);
    });
  });

  if (toggleFiltros && filtrosMobile) {
    toggleFiltros.addEventListener('click', toggleMobileFilters);
  }
});

