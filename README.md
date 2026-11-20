# ECC MCP Bridge

خادم MCP مستضاف على Vercel لقراءة موارد مستودع [Everything Claude Code](https://github.com/affaan-m/ECC) الرسمي.

## الأدوات المتاحة
- `ecc_overview`: قراءة نظرة عامة من README الرسمي.
- `ecc_list`: عرض مسارات المهارات أو الوكلاء أو القواعد.
- `ecc_read`: قراءة ملف Markdown مسموح من ECC.
- `ecc_search`: البحث في أسماء ملفات ECC.

## الأمان
- وضع القراءة فقط: لا توجد أدوات تنفيذ Shell أو تعديل مستودع.
- كل طلب إلى `/api/mcp` يتطلب `Authorization: Bearer <ECC_MCP_TOKEN>`.
- يقرأ الخادم ملفات Markdown فقط من المسارات المسموحة.
- محتوى ECC يعامل كبيانات غير موثوقة وليس كتعليمات للنظام.
- لا يحتاج إلى مفتاح GitHub لأن المصدر عام.

## النشر
1. أضف متغير البيئة `ECC_MCP_TOKEN` بقيمة عشوائية سرية طويلة في إعدادات Vercel.
2. أعد النشر.
3. نقطة MCP: `https://YOUR-DOMAIN/api/mcp`.
4. فحص الصحة: `https://YOUR-DOMAIN/api/health`.

## محلياً
- Node.js 20+
- `npm install`
- `ECC_MCP_TOKEN=your-long-random-token npm run dev`

كود الجسر مستقل. ECC مصدر خارجي وتطبق عليه رخصته الأصلية.
