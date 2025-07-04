# 🚀 Mixed Encoder - Next.js Web & Android Mobile App

![GitHub last commit](https://img.shields.io/github/last-commit/Karexell/mixed-encoder)
![GitHub repo size](https://img.shields.io/github/repo-size/Karexell/mixed-encoder)
![GitHub top language](https://img.shields.io/github/languages/top/Karexell/mixed-encoder)

**تطبيق شامل متاح على الويب والجوال - Next.js مع Android APK جاهز لمتجر Google Play**

## 📱 المنصات المتاحة

- 🌐 **Web App**: تطبيق ويب باستخدام Next.js + React
- 📱 **Android App**: تطبيق موبايل جاهز لمتجر Google Play
- 🔄 **Capacitor Integration**: تحويل سلس من Web إلى Mobile

## ✨ المميزات

- ⚡ **Next.js 15** مع App Router
- 🎨 **TailwindCSS** للتصميم
- 📱 **Capacitor** للتطبيق المحمول
- 🔧 **TypeScript** للتطوير الآمن
- 📦 **APK Ready** جاهز للنشر
- 🐙 **GitHub Integration** مع توثيق شامل

## 🚀 البدء السريع

### للتطوير على الويب:

```bash
# استنساخ المشروع
git clone https://github.com/Karexell/mixed-encoder.git
cd mixed-encoder

# تثبيت التبعيات
pnpm install

# تشغيل الخادم المحلي
pnpm dev
```

افتح [http://localhost:3000](http://localhost:3000) في متصفحك.

### لبناء تطبيق Android:

```bash
# بناء تطبيق الويب
pnpm build

# مزامنة مع Capacitor
npx cap sync android

# بناء APK
cd android
./gradlew assembleRelease
```

📋 **للتفاصيل الكاملة**: راجع [`APK_BUILD_SUMMARY.md`](APK_BUILD_SUMMARY.md)

## 📁 بنية المشروع

```
mixed-encoder/
├── 🌐 app/                  # تطبيق Next.js الرئيسي
├── 🎨 components/           # مكونات React القابلة لإعادة الاستخدام
├── 📱 android/              # تطبيق Android Capacitor
├── 🎨 styles/               # ملفات TailwindCSS
├── 📁 public/               # الأصول العامة
├── ⚙️ capacitor.config.ts   # إعدادات Capacitor
├── 📋 APK_BUILD_SUMMARY.md  # دليل بناء APK
├── 🐙 GITHUB_SETUP.md       # دليل إعداد GitHub
└── 🎊 PROJECT_COMPLETE.md   # ملخص إنجازات المشروع
```

## 📱 تطبيق Android

### الحالة الحالية:
- ✅ **APK مُصحح**: تم حل مشكلة "app not installed"
- ✅ **جاهز للتثبيت**: `my-app-final-ready.apk` يعمل بشكل صحيح
- ✅ **متجر Google Play**: APK جاهز للرفع والنشر
- ✅ **توقيع متقدم**: apksigner v1+v2+v3 schemes
- ✅ **Capacitor**: تكامل كامل مع تطبيق الويب

### 🛠️ مشكلة التثبيت محلولة:
إذا واجهت مشكلة "app not installed" مع الإصدارات السابقة، استخدم الملف الجديد `my-app-final-ready.apk`. راجع [`APK_FIXED_RELEASE.md`](APK_FIXED_RELEASE.md) للتفاصيل.

### معلومات التطبيق:
- **Package ID**: `com.myapp.mobile`
- **App Name**: `My Mobile App`
- **Target SDK**: Android API 34
- **Min SDK**: Android API 22

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام | الحالة |
|---------|----------|--------|
| ⚡ Next.js 15 | إطار العمل الرئيسي | ✅ |
| ⚛️ React 19 | مكتبة واجهة المستخدم | ✅ |
| 🎨 TailwindCSS | تصميم وتنسيق | ✅ |
| 📱 Capacitor | تطبيق الموبايل | ✅ |
| 🔷 TypeScript | تطوير آمن | ✅ |
| 📦 pnpm | إدارة الحزم | ✅ |

## 📚 التوثيق

- 📋 **[APK Build Guide](APK_BUILD_SUMMARY.md)** - دليل شامل لبناء APK
- �️ **[APK Fixed Release](APK_FIXED_RELEASE.md)** - حل مشكلة "app not installed"
- 📱 **[APK Release Notes](APK_RELEASE_NOTES.md)** - تعليمات تحميل واستخدام APK
- �🐙 **[GitHub Setup](GITHUB_SETUP.md)** - إرشادات إعداد GitHub
- 🎊 **[Project Complete](PROJECT_COMPLETE.md)** - ملخص إنجازات المشروع

## 🔄 سير العمل

### للمطورين:
1. Fork المشروع
2. إنشاء branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى branch (`git push origin feature/amazing-feature`)
5. فتح Pull Request

### للنشر:
1. **Web**: Deploy باستخدام Vercel أو Netlify
2. **Android**: رفع APK إلى Google Play Console

## 🏪 النشر على متجر Google Play

للنشر على متجر Google Play:

1. إنشاء حساب [Google Play Developer](https://play.google.com/console) ($25)
2. اتباع دليل [`APK_BUILD_SUMMARY.md`](APK_BUILD_SUMMARY.md)
3. رفع APK إلى Play Console
4. إضافة وصف وصور التطبيق
5. نشر للجمهور

## 📞 الدعم والمساهمة

- 🐛 **تقرير مشاكل**: [GitHub Issues](https://github.com/Karexell/mixed-encoder/issues)
- 💡 **طلب مميزات**: [GitHub Discussions](https://github.com/Karexell/mixed-encoder/discussions)
- 🤝 **المساهمة**: راجع [Contributing Guidelines](CONTRIBUTING.md)

## 📜 الترخيص

هذا المشروع مرخص تحت [MIT License](LICENSE).

## 🎯 الحالة الحالية

- ✅ **تطبيق الويب**: جاهز ويعمل
- ✅ **تطبيق Android**: APK جاهز للنشر
- ✅ **GitHub**: مرفوع ومُوثق بالكامل
- ✅ **متجر Google Play**: جاهز للرفع

---

**تم بواسطة**: [Karexell](https://github.com/Karexell)  
**آخر تحديث**: July 2025  
**الحالة**: ✅ **جاهز للاستخدام والنشر**
