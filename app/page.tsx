export default function Home() {
  return (
    <main style={{ maxWidth: 760, margin: "64px auto", padding: 24, lineHeight: 1.9 }}>
      <p style={{ color: "#8ca8ff" }}>YASSER · MCP SERVER</p>
      <h1 style={{ fontSize: 38, marginBottom: 8 }}>ECC MCP Bridge</h1>
      <p>خادم MCP لقراءة مهارات ووكلاء وقواعد مشروع Everything Claude Code الرسمي.</p>
      <section style={{ border: "1px solid #293554", borderRadius: 14, padding: 20, marginTop: 28 }}>
        <h2 style={{ marginTop: 0 }}>حالة الخادم</h2>
        <p>مسار MCP: <code dir="ltr">/api/mcp</code></p>
        <p>فحص الصحة: <a style={{ color: "#9db6ff" }} href="/api/health">/api/health</a></p>
        <p>المصدر: <a style={{ color: "#9db6ff" }} href="https://github.com/affaan-m/ECC">github.com/affaan-m/ECC</a></p>
        <p style={{ color: "#aab6d2" }}>الإصدار الأول للقراءة والتحليل فقط. لا ينفّذ أوامر ولا يعدّل ملفات ECC.</p>
      </section>
    </main>
  );
}