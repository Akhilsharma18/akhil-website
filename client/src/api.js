// Central API base URL — uses env var in production, empty string in dev (Vite proxy handles it)
const API_BASE = import.meta.env.VITE_API_URL || '';

export default API_BASE;
