// Vercel-edge route entry. The implementation lives under ./mcp/;
// this file stays here so the deployed route URL (`/api/mcp`) doesn't move.

import handler from './mcp/handler';

export const config = { runtime: 'edge' };

export default handler;
