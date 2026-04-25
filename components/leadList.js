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
        ${leads.map(lead => `
          <li>
            <strong>${lead.name}</strong> - ${lead.contact}
            <em>(${lead.status || "novo"})</em>
          </li>
        `).join("")}
      </ul>
    `;
  }

  // 🔥 ESSA LINHA QUE FALTA
  render(getState());

  subscribe(render);
}