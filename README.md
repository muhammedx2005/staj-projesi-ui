# Staj Projesi - UI Bileşen Kütüphanesi

Bu proje, Bilgisayar Mühendisliği zorunlu yaz stajı kapsamında; **Semantik HTML, modern SCSS (BEM yapısı)** ve **Vanilla JavaScript** kullanılarak, dış kütüphanelere bağımlı kalmadan geliştirilmiştir.

## 🚀 Teknik Yetkinlikler
* **Mimari:** Modüler BEM (Block Element Modifier) yapısı ile sürdürülebilir CSS.
* **Responsive Tasarım:** Mobil-öncelikli (320px-1440px) yaklaşım ve grid/flex kullanımı.
* **Erişilebilirlik:** `aria-*` etiketleri ve klavye ile erişim uyumluluğu.
* **Performans:** Lighthouse (Performance, Accessibility, Best Practices, SEO) skorlarında **100/100** tam puan.
* **Versiyon Kontrolü:** Conventional Commits standartlarına uygun Git iş akışı.

## 🛠 Kullanılan Teknolojiler
* Vite (Build Tool)
* Vanilla JavaScript (DOM Manipulation)
* SCSS (Modular CSS)

## 📊 Performans Raporu
Projenin Lighthouse analiz sonuçları, üretim (production) modunda **100/100** olarak optimize edilmiştir.

![Lighthouse Performans Raporu](docs/lighthouse-report.png)

## 📦 Kurulum
```bash
# Projeyi klonla
git clone [https://github.com/muhammedx2005/staj-projesi-ui.git](https://github.com/muhammedx2005/staj-projesi-ui.git)

# Bağımlılıkları yükle
npm install

# Geliştirme modunda çalıştır
npm run dev

# Üretim için build al
npm run build
