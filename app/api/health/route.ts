export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    status: "ok",
    service: "ecc-mcp-bridge",
    source: "https://github.com/affaan-m/ECC",
    mode: "read-only",
    mcpEndpoint: "/api/mcp",
    authConfigured: Boolean(process.env.ECC_MCP_TOKEN)
  });
}