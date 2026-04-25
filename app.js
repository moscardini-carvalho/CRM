import { subscribe, getState, setState } from "./state/state.js";
import { getLeads, saveLeads } from "./services/storage.js";
import { addLead } from "./services/crmService.js";
import { LeadList } from "./components/leadList.js";
import { changeStatus } from "./services/crmService.js";
import { Pipeline } from "./components/pipeline.js";

//Outro método de inserção de dados
// a cada 2s depois de reiniciar o site
//Sobrescreve todo o array anterior com o novo dado do array
/*
setTimeout(() => {
  addLead({
    name: "João Pedro Moscardini Carvalho",
    contact: "(16)98100-0548",
  });
}, 2000);
*/
function render(state) {}

function init() {
  window.updateStatus = (id, status) => {
    changeStatus(id, status);
  };

  subscribe((state) => {
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
