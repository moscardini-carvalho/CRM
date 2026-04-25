const STORAGE_KEY = "crm_leads";

export function saveLeads(leads) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function getLeads() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler LocalStorage:", error);
    return [];
  }
}
