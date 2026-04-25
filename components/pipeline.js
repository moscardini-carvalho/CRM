import { subscribe, getState } from "../state/state.js";
import { changeStatus } from "../services/crmService.js";

export function Pipeline() {
  const container = document.getElementById("pipeline");

  function render(state) {
    const { leads } = state;

    const columns = {
      novo: [],
      contato: [],
      negociacao: [],
      fechado: [],
    };

    leads.forEach((lead) => {
      columns[lead.status]?.push(lead);
    });

    container.innerHTML = `
    <h2>Funil de Leads</h2>
      <div class="pipeline">
        ${Object.keys(columns)
          .map(
            (status) => `
          <div class="column">
            <h3>${status.toUpperCase()}</h3>
            ${columns[status]
              .map(
                (lead) => `
              <div class="card">
                <strong>${lead.name}</strong>
                <p>${lead.contact}</p>

                <select onchange="window.updateStatus('${lead.id}', this.value)">
                  <option value="novo" ${lead.status === "novo" ? "selected" : ""}>Novo</option>
                  <option value="contato" ${lead.status === "contato" ? "selected" : ""}>Contato</option>
                  <option value="negociacao" ${lead.status === "negociacao" ? "selected" : ""}>Negociação</option>
                  <option value="fechado" ${lead.status === "fechado" ? "selected" : ""}>Fechado</option>
                </select>
              </div>
            `,
              )
              .join("")}
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  }

  render(getState());
  subscribe(render);
}
