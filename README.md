# پروژه رمزگذاری و رمزگشایی پیام

این پروژه شامل سه فایل HTML است که برای رمزگذاری و رمزگشایی پیام‌ها با استفاده از کلیدهای امنیتی طراحی شده است. این پروژه به شما امکان می‌دهد تا پیام‌های خود را با استفاده از الگوریتم AES-GCM رمزگذاری و رمزگشایی کنید.

## فایل‌ها

### 1. `encode.html`

صفحه رمزگذاری پیام‌ها:

- **ورودی کلید امنیتی:** یک فیلد متنی `readonly` که کلید امنیتی را نمایش می‌دهد. این کلید برای رمزگذاری پیام‌ها استفاده می‌شود و باید پیش از استفاده ایجاد شده باشد.
- **ورودی پیام:** یک فیلد متنی برای وارد کردن پیام که قرار است رمزگذاری شود.
- **دکمه رمزگذاری:** با کلیک بر روی این دکمه، پیام رمزگذاری شده و به کلیپ‌بورد کپی می‌شود.

### 2. `decode.html`

صفحه رمزگشایی پیام‌ها:

- **ورودی کلید امنیتی:** یک فیلد متنی `readonly` که کلید امنیتی را از `localStorage` می‌خواند. این کلید باید پیش‌تر در صفحه `key.html` ذخیره شده باشد.
- **ورودی پیام رمزگذاری شده:** یک فیلد متنی برای وارد کردن پیام رمزگذاری شده که می‌خواهید رمزگشایی کنید.
- **دکمه رمزگشایی:** با کلیک بر روی این دکمه، پیام رمزگشایی شده و نمایش داده می‌شود.

### 3. `key.html`

صفحه برای وارد کردن و ذخیره کلید امنیتی:

- **ورودی کلید:** یک فیلد متنی برای وارد کردن کلید امنیتی که از دوستتان دریافت کرده‌اید. این کلید در `localStorage` ذخیره می‌شود و برای رمزگذاری و رمزگشایی پیام‌ها در صفحات دیگر استفاده می‌شود.

## فایل پیکربندی

در ریشه پروژه، یک فایل به نام `config.js` وجود دارد که شامل تنظیمات کلیدی است:

```javascript
const CONFIGS = {
  DATABASE_KEY: "pleaseEnterKey",
};
```

اگر می‌خواهید کلید امنیتی پیش‌فرض را تغییر دهید، می‌توانید مقدار DATABASE_KEY را در این فایل تغییر دهید. توجه داشته باشید که کاربران در صفحات encode.html و decode.html امکان تغییر کلید را ندارند و فقط می‌توانند کلید جدیدی از طریق key.html وارد کنند.
نحوه استفاده:

- **ایجاد کلید:** به صفحه `key.html` بروید و کلید امنیتی خود را وارد کنید. این کلید در `localStorage` ذخیره می‌شود.
- **رمزگذاری پیام:** به صفحه `encode.html` بروید، کلید امنیتی را که در مرحله قبل ذخیره شده است مشاهده خواهید کرد. پیام خود را وارد کنید و بر روی دکمه رمزگذاری کلیک کنید. پیام رمزگذاری شده به کلیپ‌بورد کپی می‌شود.
- **رمزگشایی پیام:** به صفحه `decode.html` بروید، کلید امنیتی را مشاهده خواهید کرد که از `localStorage` خوانده شده است. پیام رمزگذاری شده را وارد کنید و بر روی دکمه رمزگشایی کلیک کنید تا پیام رمزگشایی شده را مشاهده کنید.

# توجه

پشتیبانی مرورگر: این پروژه به طور خاص برای مرورگرهای مدرن طراحی شده است و ممکن است با مرورگرهای قدیمی سازگار نباشد.

برای هر گونه سؤال یا مشکلی، لطفاً با ما تماس بگیرید.
