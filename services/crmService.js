import { getState, setState } from "../state/state.js";

function generateId() {
  return Date.now().toString();
}

export function addLead({ name, contact, status = "novo" }) {
  if (!name || !contact) {
    console.error("Nome e contato são obrigatórios");
    return;
  }

  const { leads } = getState();

  const newLead = {
    id: generateId(),
    name,
    contact,
    status,
    createdAt: Date.now(),
  };

  setState({
    leads: [...leads, newLead],
  });
}

export function removeLead(id) {
  const { leads } = getState();

  const updatedLeads = leads.filter((lead) => lead.id !== id);

  setState({
    leads: updatedLeads,
  });
}

export function changeStatus(id, status) {
  const { leads } = getState();

  const updatedLeads = leads.map((lead) =>
    lead.id === id ? { ...lead, status } : lead,
  );

  setState({
    leads: updatedLeads,
  });
}
