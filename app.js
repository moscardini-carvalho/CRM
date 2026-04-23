console.log("CRM Iniciado");

import { subscribe, getState } from "./state/state.js";
import { setState } from "./state/state.js";

setTimeout(() => {
  setState({
    leads: [{ name: "Teste" }],
  });
}, 2000);

function render(state) {
  console.log("Estado atualizado: ", state);
}

function init() {
  subscribe(render);

  console.log("Estado inicial: ", getState());
}

init();
