export const env = {
  N8N_WEBHOOK_URL: process.env.N8N_WEBHOOK_URL || "",
  GOOGLE_PROJECT_EMAIL: process.env.GOOGLE_PROJECT_EMAIL || "",
  GOOGLE_PRIVATE_KEY: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID || "",
}; 