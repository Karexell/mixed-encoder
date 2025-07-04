# 📚 دليل رفع المشروع إلى GitHub

## 🎯 نظرة عامة

تم إعداد مشروع Next.js مع تطبيق Android mobile جاهز للرفع على GitHub ومتجر Google Play.

## 📁 محتويات المشروع

### ✅ الملفات المُضافة إلى Git:
- 📱 **Android app**: مجلد `android/` كامل مع جميع ملفات التطبيق
- ⚙️ **Capacitor config**: `capacitor.config.ts`
- 📋 **APK build guide**: `APK_BUILD_SUMMARY.md`
- 🚫 **.gitignore**: محدث لاستبعاد الملفات الحساسة
- 🌐 **Next.js app**: جميع ملفات التطبيق الأساسية

### 🚫 الملفات المُستبعدة (لأسباب أمنية):
- 🔐 `my-release-key.keystore` (مفتاح التوقيع - يجب الاحتفاظ به محلياً)
- 📦 `my-app-release-signed.apk` (ملف APK - يمكن إعادة بناؤه)
- 💾 `android-tools.zip` (أدوات Android SDK - ملف كبير)

## 🚀 خطوات رفع المشروع إلى GitHub

### 1. إنشاء مستودع جديد على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. انقر على **"New repository"**
3. املأ التفاصيل:
   - **Repository name**: `my-mobile-app` (أو أي اسم تفضله)
   - **Description**: `Next.js web app with Android mobile version - Ready for Play Store`
   - **Visibility**: Public أو Private حسب تفضيلك
   - ✅ **لا تضع** علامة على "Add a README file" (لأن لديك README بالفعل)

### 2. ربط المستودع المحلي بـ GitHub

```bash
# إضافة remote origin (استبدل USERNAME و REPOSITORY-NAME)
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git

# أو إذا كان لديك SSH مُعَد:
git remote add origin git@github.com:USERNAME/REPOSITORY-NAME.git
```

### 3. رفع الكود إلى GitHub

```bash
# رفع الكود للمرة الأولى
git push -u origin cursor/export-application-as-publishable-apk-af91

# أو إذا كنت تريد رفعه إلى main branch
git checkout main  # أو git checkout -b main
git merge cursor/export-application-as-publishable-apk-af91
git push -u origin main
```

## 📊 بنية المشروع على GitHub

```
my-mobile-app/
├── 📱 android/              # تطبيق Android كامل
│   ├── app/                 # كود التطبيق الرئيسي
│   ├── gradle/              # إعدادات Gradle
│   └── ...                  # ملفات Android أخرى
├── 🌐 app/                  # تطبيق Next.js
├── 🎨 components/           # مكونات React
├── 📁 public/               # الملفات العامة
├── 🎨 styles/               # ملفات التنسيق
├── ⚙️ capacitor.config.ts   # إعدادات Capacitor
├── 📋 APK_BUILD_SUMMARY.md  # دليل بناء APK
├── 📚 GITHUB_SETUP.md       # هذا الملف
├── 📦 package.json          # تبعيات Node.js
└── 🚫 .gitignore           # ملفات مُستبعدة
```

## 🔄 سير العمل على GitHub

### للمطورين الجدد:

1. **Clone المستودع**:
   ```bash
   git clone https://github.com/USERNAME/REPOSITORY-NAME.git
   cd REPOSITORY-NAME
   ```

2. **تثبيت التبعيات**:
   ```bash
   pnpm install
   ```

3. **بناء التطبيق**:
   ```bash
   pnpm build
   ```

4. **بناء APK** (اتبع دليل `APK_BUILD_SUMMARY.md`):
   ```bash
   npx cap sync android
   cd android && ./gradlew assembleRelease
   ```

## 🛡️ الأمان والأفضل الممارسات

### ✅ ما تم فعله:
- 🔐 استبعاد مفاتيح التوقيع من Git
- 💾 استبعاد الملفات الكبيرة وغير الضرورية
- 📝 توثيق شامل للعملية
- 🏗️ بنية مشروع منظمة

### ⚠️ تذكيرات مهمة:
- 🔑 **احتفظ بـ `my-release-key.keystore` في مكان آمن محلياً**
- 🔄 أعد إنشاء APK من الكود عند الحاجة
- 🆕 أنشئ مفتاح توقيع جديد للإنتاج الفعلي
- 📱 اختبر التطبيق على أجهزة حقيقية قبل النشر

## 🎯 الخطوات التالية

1. ✅ **رفع إلى GitHub** (باستخدام الخطوات أعلاه)
2. 📱 **إعداد GitHub Actions** للبناء التلقائي (اختياري)
3. 🏪 **نشر على Google Play Store** (اتبع `APK_BUILD_SUMMARY.md`)
4. 👥 **دعوة المتعاونين** للمساهمة في المشروع

## 📞 المساعدة والدعم

- 📖 **دليل APK**: `APK_BUILD_SUMMARY.md`
- 🌐 **Capacitor Docs**: https://capacitorjs.com/docs
- 📱 **Android Docs**: https://developer.android.com
- 🐙 **GitHub Docs**: https://docs.github.com

---

**تم الإعداد في**: 4 يوليو 2025  
**حالة المشروع**: ✅ جاهز للرفع على GitHub  
**APK Status**: ✅ جاهز لمتجر Google Play