console.log("CRM Iniciado");

import { subscribe, getState } from "./state/state.js";
import { setState } from "./state/state.js";
import { getLeads, saveLeads } from "./services/storage.js";
import { addLead } from "./services/crmServices.js";

//Outro método de inserção de dados
// a cada 2s depois de reiniciar o site
//Sobrescreve todo o array anterior com o novo dado do array

setTimeout(() => {
  addLead({
    name: "Genivaldo",
    contact: "(16)11111-1111",
  });
}, 2000);

function render(state) {
  console.log("Estado atualizado: ", state);
}

function init() {
  const leads = getLeads();
  //Debugador de erro no LocalStorage
  //Toda vez que tiver falha para armazenar
  //Inserção de dados direto pelo console
  /*window.setState = setState;*/

  setState({ leads });

  subscribe((state) => {
    saveLeads(state.leads);
    console.log("Salvo em LocalStorage: ", state.leads);
  });
}

init();
