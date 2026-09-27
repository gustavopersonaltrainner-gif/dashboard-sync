/* ============================================================
   GUSTAVO PERSONAL — Dashboard Application
   Core logic and state management for Painel de Gestão de Clientes
============================================================ */

// --- DATA SEED ---
const SEED_CLIENTES = [{"id": 1, "nome": "Ana Paula", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 25, "aulas_por_mes": {"2026-04": 9, "2026-05": 8, "2026-06": 7, "2026-07": 1}, "ultima_aula": "02/07/2026"}, {"id": 2, "nome": "Andre", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 11, "aulas_por_mes": {"2026-04": 4, "2026-05": 4, "2026-06": 2, "2026-07": 1}, "ultima_aula": "01/07/2026"}, {"id": 3, "nome": "Anna Lucia", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 41, "aulas_por_mes": {"2026-04": 13, "2026-05": 12, "2026-06": 14, "2026-07": 2}, "ultima_aula": "09/07/2026"}, {"id": 4, "nome": "Bárbara", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 17, "aulas_por_mes": {"2026-04": 7, "2026-05": 7, "2026-06": 3}, "ultima_aula": "22/06/2026"}, {"id": 5, "nome": "Cecília", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 64, "aulas_por_mes": {"2026-04": 22, "2026-05": 20, "2026-06": 20, "2026-07": 2}, "ultima_aula": "02/07/2026"}, {"id": 6, "nome": "Claudete", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 24, "aulas_por_mes": {"2026-04": 8, "2026-05": 7, "2026-06": 7, "2026-07": 2}, "ultima_aula": "09/07/2026"}, {"id": 7, "nome": "Claudio", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 8, "aulas_por_mes": {"2026-04": 3, "2026-05": 2, "2026-06": 2, "2026-07": 1}, "ultima_aula": "08/07/2026"}, {"id": 8, "nome": "Cláudia", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 15, "aulas_por_mes": {"2026-04": 5, "2026-05": 5, "2026-06": 5}, "ultima_aula": "30/06/2026"}, {"id": 9, "nome": "Daniele", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 19, "aulas_por_mes": {"2026-04": 7, "2026-05": 6, "2026-06": 6}, "ultima_aula": "28/06/2026"}, {"id": 10, "nome": "Fabiana", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 21, "aulas_por_mes": {"2026-04": 8, "2026-05": 7, "2026-06": 6}, "ultima_aula": "26/06/2026"}, {"id": 11, "nome": "Gabriel", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 12, "aulas_por_mes": {"2026-04": 4, "2026-05": 4, "2026-06": 3, "2026-07": 1}, "ultima_aula": "09/07/2026"}, {"id": 12, "nome": "Gustavo", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 32, "aulas_por_mes": {"2026-04": 10, "2026-05": 10, "2026-06": 10, "2026-07": 2}, "ultima_aula": "09/07/2026"}, {"id": 13, "nome": "Ione", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 28, "aulas_por_mes": {"2026-04": 9, "2026-05": 9, "2026-06": 9, "2026-07": 1}, "ultima_aula": "07/07/2026"}, {"id": 14, "nome": "João Batista e Mabel", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 30, "aulas_por_mes": {"2026-04": 10, "2026-05": 10, "2026-06": 8, "2026-07": 2}, "ultima_aula": "09/07/2026"}, {"id": 15, "nome": "Kátia", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 18, "aulas_por_mes": {"2026-04": 6, "2026-05": 6, "2026-06": 6}, "ultima_aula": "30/06/2026"}, {"id": 16, "nome": "Luiza", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 24, "aulas_por_mes": {"2026-04": 8, "2026-05": 8, "2026-06": 6, "2026-07": 2}, "ultima_aula": "10/07/2026"}, {"id": 17, "nome": "Mari", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 19, "aulas_por_mes": {"2026-04": 7, "2026-05": 6, "2026-06": 5, "2026-07": 1}, "ultima_aula": "10/07/2026"}, {"id": 18, "nome": "Marilda", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 16, "aulas_por_mes": {"2026-04": 5, "2026-05": 5, "2026-06": 6}, "ultima_aula": "02/07/2026"}, {"id": 19, "nome": "Marta", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 22, "aulas_por_mes": {"2026-04": 8, "2026-05": 7, "2026-06": 7}, "ultima_aula": "26/06/2026"}, {"id": 20, "nome": "Newton", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 14, "aulas_por_mes": {"2026-04": 5, "2026-05": 5, "2026-06": 4}, "ultima_aula": "24/06/2026"}, {"id": 21, "nome": "Patrícia", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 20, "aulas_por_mes": {"2026-04": 7, "2026-05": 7, "2026-06": 6}, "ultima_aula": "25/06/2026"}, {"id": 22, "nome": "Paulo", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 11, "aulas_por_mes": {"2026-04": 4, "2026-05": 4, "2026-06": 3}, "ultima_aula": "23/06/2026"}, {"id": 23, "nome": "Regina", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 24, "aulas_por_mes": {"2026-04": 8, "2026-05": 8, "2026-06": 6, "2026-07": 2}, "ultima_aula": "10/07/2026"}, {"id": 24, "nome": "Renata", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 15, "aulas_por_mes": {"2026-04": 5, "2026-05": 5, "2026-06": 4, "2026-07": 1}, "ultima_aula": "09/07/2026"}, {"id": 25, "nome": "René", "programa": "A definir", "contrato": "A definir", "valor": 0, "inicio": null, "fim": null, "status": "Ativo", "whatsapp": "", "obs": "", "tags": [], "aulas_total": 18, "aulas_por_mes": {"2026-04": 6, "2026-05": 6, "2026-06": 5, "2026-07": 1}, "ultima_aula": "09/07/2026"}];

const SEED_FALTAS = [{"aluno": "Claudete", "data": "09/07/2026", "motivo": ""}, {"aluno": "Renata", "data": "09/07/2026", "motivo": ""}, {"aluno": "Luiza", "data": "09/07/2026", "motivo": ""}, {"aluno": "Gabriel", "data": "09/07/2026", "motivo": ""}, {"aluno": "Cecília", "data": "09/07/2026", "motivo": ""}, {"aluno": "René", "data": "09/07/2026", "motivo": ""}, {"aluno": "João Batista e Mabel", "data": "09/07/2026", "motivo": ""}, {"aluno": "Cecília", "data": "10/07/2026", "motivo": ""}, {"aluno": "Regina", "data": "10/07/2026", "motivo": ""}, {"aluno": "Luiza", "data": "10/07/2026", "motivo": ""}, {"aluno": "Mari", "data": "10/07/2026", "motivo": ""}];

const SEED_CONFIG = { protocoloSemanas: 8, dataReferencia: null, programas: ["A definir", "Personal Training", "Consultoria Online", "Consultoria Premium"], periodos: ["A definir", "Mensal", "Trimestral", "Quadrimestral", "Semestral", "Anual"] };

// --- CONSTANTS ---
const MESES = ["2026-04","2026-05","2026-06","2026-07"];
const MESES_LABEL = {"2026-04":"Abr","2026-05":"Mai","2026-06":"Jun","2026-07":"Jul"};
const CORES = {"2026-04":"#4f8ef755","2026-05":"#4f8ef788","2026-06":"#4f8ef7bb","2026-07":"#4f8ef7"};

const LS_KEY = 'gp_gestao_clientes_v1';

// Atualizações pontuais aplicadas uma única vez sobre os dados salvos (e sobre o seed)
const MIGRACOES = [
  { id: 'viagem-2026-09-v2', aplicar: (st) => {
    // Corrige a versão anterior, que marcou Ana Paula por engano
    if ((st.migracoes || []).includes('viagem-2026-09')) {
      const ana = st.clientes.find(c => c.nome === 'Ana Paula');
      if (ana && ana.viagem && ana.viagem.retorno === '2026-10-12') ana.viagem = null;
    }
    const marcar = (nome, retorno) => {
      let c = st.clientes.find(c => c.nome === nome);
      if (!c) {
        const id = Math.max(0, ...st.clientes.map(c => c.id)) + 1;
        c = { id, nome, programa: 'A definir', contrato: 'A definir', valor: 0, inicio: null, fim: null, status: 'Ativo', whatsapp: '', obs: '', tags: [], aulas_total: 0, aulas_por_mes: {}, ultima_aula: '—' };
        st.clientes.push(c);
      }
      c.viagem = { retorno };
    };
    marcar('Paula', '2026-10-12');
    marcar('René', null);
    marcar('Claudete', null);
  }},
];

// --- STATE ---
let STATE = aplicarMigracoes(loadState());
let editingClientId = null;
let currentAlertKind = null;
let mesSel = "2026-07";
let statusCardsSel = "Ativo";
let statusTableSel = "todos";
let reativarClienteId = null;

(function initMesSel() {
  const mesAtual = isoHoje().slice(0,7);
  mesSel = MESES.includes(mesAtual) ? mesAtual : MESES[MESES.length-1];
})();

// --- STORAGE ---
function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.clientes)) return parsed;
    }
  } catch(e) { }
  return { 
    clientes: JSON.parse(JSON.stringify(SEED_CLIENTES)), 
    faltas: JSON.parse(JSON.stringify(SEED_FALTAS)), 
    config: JSON.parse(JSON.stringify(SEED_CONFIG)) 
  };
}

function aplicarMigracoes(st) {
  st.migracoes = st.migracoes || [];
  let mudou = false;
  MIGRACOES.forEach(m => {
    if (st.migracoes.includes(m.id)) return;
    m.aplicar(st);
    st.migracoes.push(m.id);
    mudou = true;
  });
  if (mudou) { try { localStorage.setItem(LS_KEY, JSON.stringify(st)); } catch(e) { } }
  return st;
}

function saveState() {
  localStorage.setItem(LS_KEY, JSON.stringify(STATE));
}

function resetDados() {
  if (!confirm('Isso vai apagar todas as edições feitas neste navegador (cadastros, status, faltas) e voltar aos dados originais importados da agenda. Continuar?')) return;
  STATE = { 
    clientes: JSON.parse(JSON.stringify(SEED_CLIENTES)), 
    faltas: JSON.parse(JSON.stringify(SEED_FALTAS)), 
    config: JSON.parse(JSON.stringify(SEED_CONFIG)) 
  };
  aplicarMigracoes(STATE);
  saveState();
  initAll();
}

// --- DATE HELPERS ---
function getHoje() {
  if (STATE.config.dataReferencia) return parseISO(STATE.config.dataReferencia);
  return new Date();
}

function isoHoje(d) {
  const dt = d || getHoje();
  return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
}

function parseBR(d) {
  if (!d) return null;
  const [dd,mm,yy] = d.split('/');
  return new Date(+yy, +mm-1, +dd);
}

function parseISO(d) {
  if (!d) return null;
  const [yy,mm,dd] = d.split('-');
  return new Date(+yy, +mm-1, +dd);
}

function fmtBR(dateObj) {
  if (!dateObj) return '—';
  const d = String(dateObj.getDate()).padStart(2,'0');
  const m = String(dateObj.getMonth()+1).padStart(2,'0');
  return `${d}/${m}/${dateObj.getFullYear()}`;
}

function diasEntre(a,b) {
  return Math.floor((b-a)/86400000);
}

// --- CLIENT STATUS ---
function diasSemAula(c) {
  const d = parseBR(c.ultima_aula);
  if (!d) return 9999;
  return diasEntre(d, getHoje());
}

function statusClass(s) {
  return { Ativo:'tag-ativo', Congelado:'tag-congelado', Encerrado:'tag-encerrado', Cancelado:'tag-cancelado' }[s] || 'tag-cancelado';
}

// --- VIAGEM ---
// Em viagem até o dia anterior ao retorno; sem data de retorno = até desmarcar
function emViagem(c) {
  if (!c.viagem) return false;
  if (!c.viagem.retorno) return true;
  return diasEntre(getHoje(), parseISO(c.viagem.retorno)) > 0;
}

function viagemTagHTML(c) {
  if (!emViagem(c)) return '';
  const volta = c.viagem.retorno ? ` · volta ${fmtBR(parseISO(c.viagem.retorno)).slice(0,5)}` : '';
  return `<span class="tag tag-viagem">✈️ Viagem${volta}</span>`;
}

function getFaltasAluno(nome) {
  return STATE.faltas.filter(f => f.aluno === nome);
}

function fmtMoeda(v) {
  if (!v) return '—';
  return 'R$ ' + Number(v).toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
}

// --- PROTOCOLO ---
function protocoloInfo(c) {
  const semanas = STATE.config.protocoloSemanas;
  if (!c.inicio) return null;
  const inicio = parseISO(c.inicio);
  const diasDecorridos = diasEntre(inicio, getHoje());
  if (diasDecorridos < 0) return null;
  const diasCiclo = semanas * 7;
  const cicloAtual = Math.floor(diasDecorridos / diasCiclo) + 1;
  const diaNoCiclo = diasDecorridos % diasCiclo;
  const pct = Math.min(100, Math.round((diaNoCiclo / diasCiclo) * 100));
  const totalCiclos = c.fim ? Math.max(1, Math.round(diasEntre(inicio, parseISO(c.fim)) / diasCiclo)) : null;
  const diasRestantesCiclo = diasCiclo - diaNoCiclo;
  return { cicloAtual, pct, totalCiclos, diasRestantesCiclo, semanas };
}

function precisaAtualizarProtocolo(c) {
  const info = protocoloInfo(c);
  if (!info) return false;
  return c.status === 'Ativo' && info.diasRestantesCiclo <= 7;
}

function diasParaVencer(c) {
  if (!c.fim) return null;
  return diasEntre(getHoje(), parseISO(c.fim));
}

function precisaRenovar(c) {
  const d = diasParaVencer(c);
  return c.status === 'Ativo' && d !== null && d <= 30 && d >= 0;
}

// --- EXPORT TO CSV ---
function exportToCSV() {
  const headers = ['Nome', 'Status', 'Programa', 'Período', 'Valor Mensal', 'Início', 'Fim', 'Aulas Total', 'Última Aula', 'WhatsApp', 'Tags', 'Observações', 'Em viagem', 'Retorno viagem'];
  const rows = STATE.clientes.map(c => [
    c.nome,
    c.status,
    c.programa,
    c.contrato,
    c.valor,
    c.inicio || '',
    c.fim || '',
    c.aulas_total,
    c.ultima_aula,
    c.whatsapp || '',
    (c.tags || []).join('; '),
    c.obs || '',
    emViagem(c) ? 'Sim' : 'Não',
    emViagem(c) && c.viagem.retorno ? c.viagem.retorno : ''
  ]);
  
  let csv = headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',') + '\n';
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `clientes-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- KPIs ---
function updateKPIs() {
  const ativos = STATE.clientes.filter(c => c.status === 'Ativo');
  const faturamento = ativos.reduce((s,c) => s + (Number(c.valor)||0), 0);
  document.getElementById('kpi-faturamento').textContent = faturamento > 0 ? fmtMoeda(faturamento) : '—';
  document.getElementById('kpi-faturamento-sub').textContent = faturamento > 0 ? 'soma dos clientes ativos' : 'cadastre o valor mensal de cada cliente';
  document.getElementById('kpi-ativos').textContent = ativos.length;
  document.getElementById('kpi-congelados').textContent = STATE.clientes.filter(c => c.status === 'Congelado').length;
  document.getElementById('kpi-encerrados').textContent = STATE.clientes.filter(c => c.status === 'Encerrado').length;
  document.getElementById('kpi-cancelados').textContent = STATE.clientes.filter(c => c.status === 'Cancelado').length;

  const protocolo = STATE.clientes.filter(precisaAtualizarProtocolo);
  const renovacao = STATE.clientes.filter(precisaRenovar);
  const encerrados = STATE.clientes.filter(c => c.status === 'Encerrado');
  document.getElementById('alert-protocolo-count').textContent = protocolo.length;
  document.getElementById('alert-renovacao-count').textContent = renovacao.length;
  document.getElementById('alert-encerrados-count').textContent = encerrados.length;
  document.getElementById('alert-viagem-count').textContent = STATE.clientes.filter(emViagem).length;
}

// --- TABLE RENDERING ---
function sparkHTML(c) {
  const mx = Math.max(...MESES.map(m => c.aulas_por_mes[m]||0), 1);
  return MESES.map(m => {
    const h = Math.round(((c.aulas_por_mes[m]||0)/mx)*28);
    return `<div class="bar" style="height:${Math.max(h,2)}px;background:${CORES[m]};width:12px;border-radius:3px 3px 0 0"></div>`;
  }).join('');
}

function filtrarMes(mes) {
  mesSel = mes;
  document.querySelectorAll('#tab-dashboard .month-btn').forEach(b => b.classList.toggle('active', b.dataset.mes === mes));
  renderTable();
}

function renderTable() {
  const q = (document.getElementById('search-dash')?.value || '').toLowerCase();
  const tbody = document.getElementById('tbody-dash');
  const lista = STATE.clientes.filter(c => c.nome.toLowerCase().includes(q));
  const sorted = [...lista].sort((a,b) => {
    const va = mesSel==='total' ? a.aulas_total : (a.aulas_por_mes[mesSel]||0);
    const vb = mesSel==='total' ? b.aulas_total : (b.aulas_por_mes[mesSel]||0);
    return vb - va;
  });
  tbody.innerHTML = sorted.map(c => {
    const val = mesSel==='total' ? c.aulas_total : (c.aulas_por_mes[mesSel]||0);
    const ff = getFaltasAluno(c.nome).length;
    return `<tr>
      <td><div class="aluno-name" onclick="openClientModal(${c.id})">${c.nome}</div></td>
      <td><span class="tag ${statusClass(c.status)}">${c.status}</span> ${viagemTagHTML(c)}</td>
      <td><strong style="font-size:18px">${val}</strong> <span style="color:var(--muted);font-size:12px">aulas</span></td>
      <td><div class="sparkline">${sparkHTML(c)}</div></td>
      <td style="color:var(--muted);font-size:13px">${c.ultima_aula}</td>
      <td>${ff > 0 ? `<span class="tag tag-encerrado">${ff} falta${ff>1?'s':''}</span>` : '<span style="color:var(--muted);font-size:12px">—</span>'}</td>
    </tr>`;
  }).join('');
}

// --- CARDS ---
function filtrarStatusCards(s) {
  statusCardsSel = s;
  document.querySelectorAll('#status-filter-cards .status-btn').forEach(b => b.classList.toggle('active', b.dataset.status === s));
  renderCards();
}

function renderCards() {
  const q = (document.getElementById('search-cards')?.value || '').toLowerCase();
  const grid = document.getElementById('cards-grid');
  let lista = STATE.clientes.filter(c => c.nome.toLowerCase().includes(q));
  if (statusCardsSel !== 'todos') lista = lista.filter(c => c.status === statusCardsSel);
  if (lista.length === 0) { grid.innerHTML = '<div class="empty-msg">Nenhum cliente encontrado.</div>'; return; }
  grid.innerHTML = lista.map(c => {
    const info = protocoloInfo(c);
    const dias = c.inicio ? diasEntre(parseISO(c.inicio), getHoje()) : null;
    return `<div class="client-card" onclick="openClientModal(${c.id})">
      <div class="cc-head">
        <div class="cc-name">${c.nome}</div>
        <div class="cc-programa">${c.programa}${info ? ` · Protocolo ${info.cicloAtual}${info.totalCiclos?'/'+info.totalCiclos:''}` : ''}</div>
      </div>
      <div class="cc-body">
        ${info ? `
          <div class="cc-progress-label"><span>Progresso do ciclo</span><span>${info.pct}%</span></div>
          <div class="cc-progress-bar"><div class="fill" style="width:${info.pct}%"></div></div>
        ` : `<div class="cc-placeholder">Sem data de início cadastrada — clique para configurar o contrato.</div>`}
        <div class="cc-metrics">
          <div class="cc-metric"><div class="val">${c.contrato}</div><div class="lbl">Contrato</div></div>
          <div class="cc-metric"><div class="val">${fmtMoeda(c.valor)}</div><div class="lbl">Mensal</div></div>
          <div class="cc-metric"><div class="val">${dias!==null ? dias+'d' : '—'}</div><div class="lbl">No contrato</div></div>
        </div>
        <div class="cc-footer">
          <div class="cc-tags">${(c.tags||[]).map(t=>`<span class="cc-tag">${t}</span>`).join('') || '<span class="cc-tag">sem tags</span>'}</div>
          <span>${viagemTagHTML(c)} <span class="tag ${statusClass(c.status)}">${c.status}</span></span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// --- REGISTROS TABLE ---
function filtrarStatusTable(s) {
  statusTableSel = s;
  document.querySelectorAll('#status-filter-table .status-btn').forEach(b => b.classList.toggle('active', b.dataset.status === s));
  renderRegistros();
}

function renderRegistros() {
  const q = (document.getElementById('search-registros')?.value || '').toLowerCase();
  const tbody = document.getElementById('tbody-registros');
  let lista = STATE.clientes.filter(c => c.nome.toLowerCase().includes(q));
  if (statusTableSel !== 'todos') lista = lista.filter(c => c.status === statusTableSel);
  tbody.innerHTML = lista.map(c => `<tr>
    <td><div class="aluno-name" onclick="openClientModal(${c.id})">${c.nome}</div> ${viagemTagHTML(c)}</td>
    <td>
      <select class="status-select" onchange="quickStatus(${c.id}, this.value)">
        ${['Ativo','Congelado','Encerrado','Cancelado'].map(s => `<option value="${s}" ${s===c.status?'selected':''}>${s}</option>`).join('')}
      </select>
    </td>
    <td>${c.programa}</td>
    <td>${c.contrato}</td>
    <td>${fmtMoeda(c.valor)}</td>
    <td style="color:var(--muted);font-size:13px">${c.inicio ? fmtBR(parseISO(c.inicio)) : '—'}</td>
    <td style="color:var(--muted);font-size:13px">${c.fim ? fmtBR(parseISO(c.fim)) : '—'}</td>
    <td>
      <button class="btn-icon" title="Editar" onclick="openClientModal(${c.id})">✏️</button>
      <button class="btn-icon del" title="Excluir" onclick="quickDelete(${c.id})">🗑️</button>
    </td>
  </tr>`).join('');
}

function quickStatus(id, status) {
  const c = STATE.clientes.find(c=>c.id===id);
  if (!c) return;
  c.status = status;
  saveState();
  initAll();
}

function quickDelete(id) {
  const c = STATE.clientes.find(c=>c.id===id);
  if (!c) return;
  if (!confirm(`Excluir ${c.nome} do painel? O histórico de aulas será perdido.`)) return;
  STATE.clientes = STATE.clientes.filter(c=>c.id!==id);
  saveState();
  initAll();
}

// --- CLIENT MODAL ---
function populateSelects() {
  const pSel = document.getElementById('c-programa');
  const cSel = document.getElementById('c-contrato');
  pSel.innerHTML = STATE.config.programas.map(p => `<option value="${p}">${p}</option>`).join('');
  cSel.innerHTML = STATE.config.periodos.map(p => `<option value="${p}">${p}</option>`).join('');
}

function openClientModal(id) {
  populateSelects();
  editingClientId = id;
  const del = document.getElementById('btn-delete-client');
  if (id === null) {
    document.getElementById('client-modal-title').textContent = 'Novo Cliente';
    document.getElementById('c-nome').value = '';
    document.getElementById('c-programa').value = STATE.config.programas[0];
    document.getElementById('c-contrato').value = STATE.config.periodos[0];
    document.getElementById('c-valor').value = '';
    document.getElementById('c-status').value = 'Ativo';
    document.getElementById('c-inicio').value = '';
    document.getElementById('c-fim').value = '';
    document.getElementById('c-whatsapp').value = '';
    document.getElementById('c-tags').value = '';
    document.getElementById('c-obs').value = '';
    document.getElementById('c-viagem').checked = false;
    document.getElementById('c-viagem-retorno').value = '';
    del.style.display = 'none';
  } else {
    const c = STATE.clientes.find(c=>c.id===id);
    if (!c) return;
    document.getElementById('client-modal-title').textContent = c.nome;
    document.getElementById('c-nome').value = c.nome;
    document.getElementById('c-programa').value = c.programa;
    document.getElementById('c-contrato').value = c.contrato;
    document.getElementById('c-valor').value = c.valor || '';
    document.getElementById('c-status').value = c.status;
    document.getElementById('c-inicio').value = c.inicio || '';
    document.getElementById('c-fim').value = c.fim || '';
    document.getElementById('c-whatsapp').value = c.whatsapp || '';
    document.getElementById('c-tags').value = (c.tags||[]).join(', ');
    document.getElementById('c-obs').value = c.obs || '';
    document.getElementById('c-viagem').checked = emViagem(c);
    document.getElementById('c-viagem-retorno').value = emViagem(c) ? (c.viagem.retorno || '') : '';
    del.style.display = 'inline-block';
  }
  openModal('modal-client');
}

function saveClient() {
  const nome = document.getElementById('c-nome').value.trim();
  if (!nome) { alert('Informe o nome do cliente.'); return; }
  const data = {
    nome,
    programa: document.getElementById('c-programa').value,
    contrato: document.getElementById('c-contrato').value,
    valor: Number(document.getElementById('c-valor').value) || 0,
    status: document.getElementById('c-status').value,
    inicio: document.getElementById('c-inicio').value || null,
    fim: document.getElementById('c-fim').value || null,
    whatsapp: document.getElementById('c-whatsapp').value.trim(),
    tags: document.getElementById('c-tags').value.split(',').map(t=>t.trim()).filter(Boolean),
    obs: document.getElementById('c-obs').value.trim(),
    viagem: document.getElementById('c-viagem').checked
      ? { retorno: document.getElementById('c-viagem-retorno').value || null }
      : null,
  };
  if (editingClientId === null) {
    const nextId = Math.max(0, ...STATE.clientes.map(c=>c.id)) + 1;
    STATE.clientes.push(Object.assign({ id: nextId, aulas_total: 0, aulas_por_mes: {}, ultima_aula: '—' }, data));
  } else {
    const c = STATE.clientes.find(c=>c.id===editingClientId);
    Object.assign(c, data);
  }
  saveState();
  closeModal('modal-client');
  initAll();
}

function deleteClient() {
  if (editingClientId === null) return;
  quickDelete(editingClientId);
  closeModal('modal-client');
}

// --- ALERTS ---
function openAlertModal(kind) {
  currentAlertKind = kind;
  let lista = [], title = '', sub = '';
  if (kind === 'protocolo') {
    lista = STATE.clientes.filter(precisaAtualizarProtocolo);
    title = '⚡ Atualizar Protocolo';
    sub = 'Clientes na última semana do ciclo atual.';
  } else if (kind === 'renovacao') {
    lista = STATE.clientes.filter(precisaRenovar);
    title = '📆 Renovações';
    sub = 'Contratos vencendo em até 30 dias.';
  } else if (kind === 'encerrados') {
    lista = STATE.clientes.filter(c => c.status === 'Encerrado');
    title = '🔁 Ciclos Encerrados';
    sub = 'Alunos que encerraram o contrato — considere reativar.';
  } else if (kind === 'viagem') {
    lista = STATE.clientes.filter(emViagem);
    title = '✈️ Em Viagem';
    sub = 'Alunos viajando — sem aulas até o retorno.';
  }
  document.getElementById('alert-modal-title').textContent = title;
  document.getElementById('alert-modal-sub').textContent = sub;
  const box = document.getElementById('alert-modal-list');
  if (lista.length === 0) {
    box.innerHTML = '<div class="empty-msg">Nenhum cliente nessa situação no momento.</div>';
  } else if (kind === 'encerrados') {
    box.innerHTML = lista.map(c => `<div class="list-editable-item"><span>${c.nome}</span><button class="btn-add secondary" onclick="closeModal('modal-alert');openReativar(${c.id})">Reativar</button></div>`).join('');
  } else if (kind === 'viagem') {
    box.innerHTML = lista.map(c => `<div class="list-editable-item"><span>${c.nome} <span style="color:var(--muted);font-size:12px">${c.viagem.retorno ? '— volta ' + fmtBR(parseISO(c.viagem.retorno)) : '— retorno a definir'}</span></span><button class="btn-icon" onclick="closeModal('modal-alert');openClientModal(${c.id})">→</button></div>`).join('');
  } else {
    box.innerHTML = lista.map(c => `<div class="list-editable-item"><span>${c.nome}</span><button class="btn-icon" onclick="closeModal('modal-alert');openClientModal(${c.id})">→</button></div>`).join('');
  }
  openModal('modal-alert');
}

// --- REATIVATION ---
function openReativar(id) {
  const c = STATE.clientes.find(c=>c.id===id);
  if (!c) return;
  reativarClienteId = id;
  document.getElementById('reativar-sub').textContent = `Envie um convite de volta para ${c.nome}.`;
  document.getElementById('reativar-msg').value = `Oi ${c.nome.split(' ')[0]}! Tudo bem? Faz um tempinho que a gente não treina juntos — bateu vontade de voltar? Consigo montar um novo protocolo pra você quando quiser. 💪`;
  openModal('modal-reativar');
}

function abrirWhatsapp() {
  const c = STATE.clientes.find(c=>c.id===reativarClienteId);
  const msg = encodeURIComponent(document.getElementById('reativar-msg').value);
  const numero = (c && c.whatsapp) ? c.whatsapp.replace(/\D/g,'') : '';
  const url = numero ? `https://wa.me/${numero}?text=${msg}` : `https://wa.me/?text=${msg}`;
  window.open(url, '_blank');
}

function copiarMensagem() {
  const el = document.getElementById('reativar-msg');
  el.select();
  document.execCommand('copy');
}

// --- ABSENCES ---
function populateFaltaSelect() {
  const sel = document.getElementById('f-aluno');
  sel.innerHTML = STATE.clientes.map(c => `<option value="${c.nome}">${c.nome}</option>`).join('');
  document.getElementById('f-data').value = isoHoje();
}

function addFalta() {
  const aluno = document.getElementById('f-aluno').value;
  const data = document.getElementById('f-data').value;
  const motivo = document.getElementById('f-motivo').value;
  if (!aluno || !data) return;
  const [y,m,d] = data.split('-');
  STATE.faltas.push({aluno, data:`${d}/${m}/${y}`, motivo});
  document.getElementById('f-motivo').value = '';
  saveState();
  initAll();
}

function removeFalta(i) {
  STATE.faltas.splice(i,1);
  saveState();
  initAll();
}

function renderFaltas() {
  const el = document.getElementById('faltas-list');
  if (STATE.faltas.length === 0) {
    el.innerHTML = '<div class="empty-msg">Nenhuma falta registrada ainda.</div>';
    return;
  }
  const sorted = [...STATE.faltas].map((f,i)=>({...f,i})).sort((a,b)=>b.data.localeCompare(a.data));
  el.innerHTML = sorted.map(f => `<div class="absence-item">
    <span class="date">${f.data}</span>
    <strong>${f.aluno}</strong>
    ${f.motivo ? `<span class="motivo">— ${f.motivo}</span>` : ''}
    <button class="btn-remove" onclick="removeFalta(${f.i})">✕</button>
  </div>`).join('');
}

// --- CONFIG ---
function updateProtocoloConfig() {
  STATE.config.protocoloSemanas = Number(document.getElementById('cfg-protocolo').value);
  saveState();
  updateKPIs();
  renderCards();
}

function updateDataReferencia() {
  const val = document.getElementById('cfg-data-ref').value;
  STATE.config.dataReferencia = val || null;
  saveState();
  initAll();
}

function limparDataReferencia() {
  STATE.config.dataReferencia = null;
  document.getElementById('cfg-data-ref').value = '';
  saveState();
  initAll();
}

function renderConfig() {
  document.getElementById('cfg-protocolo').value = STATE.config.protocoloSemanas;
  document.getElementById('cfg-data-ref').value = STATE.config.dataReferencia || '';
  const status = document.getElementById('cfg-data-ref-status');
  status.textContent = STATE.config.dataReferencia
    ? `Painel congelado em ${fmtBR(parseISO(STATE.config.dataReferencia))}.`
    : `Usando a data de hoje automaticamente: ${fmtBR(getHoje())}.`;
  document.getElementById('programas-list').innerHTML = STATE.config.programas.map((p,i) => `<div class="list-editable-item"><span>${p}</span><button class="btn-icon del" onclick="removePrograma(${i})">✕</button></div>`).join('');
  document.getElementById('periodos-list').innerHTML = STATE.config.periodos.map((p,i) => `<div class="list-editable-item"><span>${p}</span><button class="btn-icon del" onclick="removePeriodo(${i})">✕</button></div>`).join('');
}

function addPrograma() {
  const val = document.getElementById('new-programa').value.trim();
  if (!val) return;
  STATE.config.programas.push(val);
  document.getElementById('new-programa').value = '';
  saveState();
  renderConfig();
}

function removePrograma(i) { STATE.config.programas.splice(i,1); saveState(); renderConfig(); }

function addPeriodo() {
  const val = document.getElementById('new-periodo').value.trim();
  if (!val) return;
  STATE.config.periodos.push(val);
  document.getElementById('new-periodo').value = '';
  saveState();
  renderConfig();
}

function removePeriodo(i) { STATE.config.periodos.splice(i,1); saveState(); renderConfig(); }

// --- MODALS ---
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

document.querySelectorAll('.modal-overlay').forEach(ov => {
  ov.addEventListener('click', (e) => { if (e.target === ov) ov.classList.remove('open'); });
});

// --- TABS ---
function switchTab(id) {
  ['dashboard','clientes','registros','faltas','config'].forEach(t => {
    document.getElementById('tab-'+t).classList.toggle('section-hidden', t !== id);
  });
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === id));
  if (id === 'clientes') renderCards();
  if (id === 'registros') renderRegistros();
  if (id === 'config') renderConfig();
}

// --- INIT ---
function initAll() {
  populateSelects();
  populateFaltaSelect();
  renderFaltas();
  updateKPIs();
  document.querySelectorAll('#tab-dashboard .month-btn').forEach(b => b.classList.toggle('active', b.dataset.mes === mesSel));
  renderTable();
  renderCards();
  renderRegistros();
  renderConfig();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
