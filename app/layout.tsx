import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ECC MCP Bridge",
  description: "Read-only MCP bridge to the official Everything Claude Code repository."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, background: "#0b1020", color: "#eef2ff", fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}