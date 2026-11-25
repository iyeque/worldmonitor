// MCP is hosted separately on the Hobby deployment.
// Keep this lightweight endpoint so the dashboard deployment stays within
// Vercel Hobby's Edge Function size limit.

export const config = { runtime: 'edge' };

export default function handler(): Response {
  return new Response(
    JSON.stringify({ error: 'MCP endpoint is hosted separately.' }),
    {
      status: 503,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    },
  );
}
