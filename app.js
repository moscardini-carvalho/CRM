console.log("CRM Iniciado");

import { subscribe, getState } from "./state/state.js";
import { setState } from "./state/state.js";
import { getLeads, saveLeads } from "./services/storage.js";

setTimeout(() => {
  setState({
    leads: [{ name: "Gumercindo", contato: "(16)99999-9999" }],
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
