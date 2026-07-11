# Dashboard Sync — Gustavo Personal

Painel profissional de gestão de clientes para controle de aulas, protocolos e contratos.

## 📁 Estrutura do Projeto

```
Dashboard-Sync/
├── index.html              # HTML principal (limpo e organizado)
├── css/
│   └── styles.css          # Estilos separados (tema dark moderno)
├── js/
│   └── app.js              # Lógica da aplicação (Estado, renderização)
├── data/                   # Pasta para dados futuros (backup, export)
└── README.md               # Este arquivo
```

## ✨ Features

### ✅ Implementadas
- **Dashboard** com KPIs em tempo real (faturamento, clientes ativos, etc.)
- **Gestão de Clientes** com CRUD completo
- **Filtros avançados** por status, período, busca
- **Cards de clientes** com progresso de protocolos
- **Tabela de registros** com edição rápida
- **Gestão de faltas** com sincronização manual
- **Configurações** personalizáveis (programas, períodos, protocolo)
- **Alertas inteligentes** (protocolo, renovações, encerrados)
- **WhatsApp** integrado para reativação
- **Dados persistentes** com localStorage
- **📥 Exportação CSV** para backup e análise

### 🎨 Design
- Dark theme moderno (esquema de cores profissional)
- Interface responsiva (mobile, tablet, desktop)
- Animações suaves
- Componentes bem estruturados

## 🚀 Como Usar

### Abrir o Dashboard
1. Abra `index.html` em um navegador moderno
2. Os dados são carregados automaticamente (localStorage)
3. Comece a gerenciar seus clientes!

### Principais Actions

**Dashboard**
- Visualize KPIs em tempo real
- Clique em alertas para ver detalhes
- Filtre por mês e busque clientes

**Novo Cliente**
- Clique em "+ Novo Cliente"
- Preencha programa, período, valor mensal, datas
- Adicione tags e observações

**Editar Cliente**
- Clique no nome do cliente em qualquer tabela
- Modifique dados e salve

**Registrar Falta**
- Abra a aba "Faltas & Ausências"
- Selecione aluno, data e motivo
- Clique em "Registrar"

**Exportar Dados**
- Abra "Todos os Registros"
- Clique em "📥 Exportar CSV"
- Arquivo será baixado automaticamente

## 🔧 Configurações

Na aba **Configurações** você pode:
- **Data de referência**: Congelar o painel em uma data específica
- **Protocolo**: Definir duração de ciclos (4, 8 ou 12 semanas)
- **Programas**: Adicionar/remover tipos de programa
- **Períodos**: Adicionar/remover períodos de contrato
- **Restaurar dados**: Voltar aos dados originais

## 💾 Dados

Os dados são salvos automaticamente no **localStorage** do navegador:
- Clientes (nome, status, programa, valor, datas, etc.)
- Faltas e ausências
- Configurações personalizadas

### Backup e Restauração
- Exporte em CSV para backup
- Use "Restaurar dados originais" em Configurações para resetar

## 📊 Alertas Inteligentes

### ⚡ Atualizar Protocolo
Clientes na última semana do ciclo atual — hora de preparar o próximo treino.

### 📆 Renovações
Contratos vencendo em até 30 dias.

### 🔁 Ciclos Encerrados
Alunos que finalizaram o contrato — considere reativar via WhatsApp.

## 🎯 Roadmap

Futuras melhorias:
- [ ] Gráficos (Chart.js) para análises
- [ ] Sincronização com Google Calendar
- [ ] API backend para dados na nuvem
- [ ] Relatórios em PDF
- [ ] Sistema de mensagens agendadas
- [ ] Análise de tendências

## 🛠️ Desenvolvimento

### Modificar Estilos
Edite `css/styles.css` — todas as cores estão em `:root` no topo.

### Adicionar Features
Edite `js/app.js` — código bem comentado e organizado por seção.

### Enviar Dados para Servidor (Futuro)
Modifique `saveState()` e `loadState()` em `js/app.js` para usar API.

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Smartphones (responsivo)

## ⚠️ Limitações Atuais

- Dados salvos apenas no navegador local (não sincronizam entre dispositivos)
- Máximo de caracteres em campos: sem limite (validação de entrada)
- CSV export: simples (sem formatação avançada)

## 🎓 Autor

Dashboard desenvolvido para **Gustavo Personal** — Consultoria e Personal Training

---

**Versão**: 2.0  
**Última atualização**: Julho 2026  
**Licença**: Privado
