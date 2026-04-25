import { subscribe, getState } from "../state/state.js";

export function LeadList() {
  const container = document.getElementById("lead-list");

  function render(state) {
    const { leads } = state;

    console.log("Renderizando leads:", leads);

    if (!leads.length) {
      container.innerHTML = "<p>Nenhum lead cadastrado.</p>";
      return;
    }

    container.innerHTML = `
      <h2>Leads</h2>
      <ul>
        ${leads
          .map(
            (lead) => `
          <li>
            <strong>${lead.name}</strong> - ${lead.contact}
            <em>(${lead.status})</em>

            <button onclick="window.editLead('${lead.id}')">
            Editar
            </button>
            <button onclick="window.deleteLead('${lead.id}')">
             Excluir
            </button>
          </li>
        `,
          )
          .join("")}
      </ul>
    `;
  }

  render(getState());

  subscribe(render);
}
