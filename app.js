import { subscribe, getState, setState } from "./state/state.js";
import { getLeads, saveLeads } from "./services/storage.js";
import { addLead } from "./services/crmService.js";
import { LeadList } from "./components/leadList.js";
import { changeStatus } from "./services/crmService.js";
import { Pipeline } from "./components/pipeline.js";
import { updateLead } from "./services/crmService.js";
import { removeLead } from "./services/crmService.js";

window.deleteLead = (id) => {
  const confirmDelete = confirm("Tem certeza que quer remover esse Lead?");

  if (!confirmDelete) return;

  removeLead(id);
};

window.editLead = (id) => {
  const state = getState();
  const lead = state.leads.find((l) => l.id === id);

  if (!lead) return;

  const newName = prompt("Novo nome:", lead.name);
  const newContact = prompt("Novo contato:", lead.contact);

  if (newName === null && newContact === null) return;

  updateLead(id, {
    name: newName || lead.name,
    contact: newContact || lead.contact,
  });
};

window.updateStatus = (id, status) => {
  changeStatus(id, status);
};

//Outro método de inserção de dados
// a cada 2s depois de reiniciar o site
//Sobrescreve todo o array anterior com o novo dado do array
/*
setTimeout(() => {
  addLead({
    name: "Heber Carvalho",
    contact: "(16)98246-0112",
  });
}, 2000);
*/
function render(state) {}

function init() {
  subscribe((state) => {
    if (!state || !state.leads) return;

    saveLeads(state.leads);
  });

  const leads = getLeads();

  setState({ leads });

  LeadList();
  Pipeline();
}

init();

//Debugador de erro no LocalStorage
//Toda vez que tiver falha para armazenar
//Inserção de dados direto pelo console
/*window.setState = setState;*/
