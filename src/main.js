import './scss/main.scss';
// 1. TEMA DEĞİŞTİRİCİ (Light/Dark Mode)
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
});

// 2. MODAL BİLEŞENİ
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  // Modalı flex yaparak görünür hale getiriyoruz
  modal.style.display = 'flex'; 
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Modalı gizle
});

// Modal dışına (karanlık alana) tıklayınca kapatma
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 3. İLETİŞİM FORMU DOĞRULAMA (Basit Email Kontrolü)
const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Sayfanın yenilenmesini engelle (Yalancı submit)

  const emailValue = emailInput.value.trim();

  // Boş alan kontrolü ve basit format kontrolü
  if (emailValue === '') {
    emailError.textContent = 'E-posta alanı boş bırakılamaz!';
    emailError.style.color = 'red';
    emailError.style.display = 'block';
  } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
    emailError.textContent = 'Geçerli bir e-posta adresi giriniz!';
    emailError.style.color = 'red';
    emailError.style.display = 'block';
  } else {
    emailError.textContent = 'Tebrikler, form başarıyla gönderildi!';
    emailError.style.color = 'green';
    emailError.style.display = 'block';
    emailInput.value = ''; // Başarılı olunca inputu temizle
  }
});
// 4. ACCORDION (SSS) BİLEŞENİ
const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Tıklanan sorunun hemen altındaki içeriği bul
    const content = header.nextElementSibling;
    
    // Eğer içerik zaten açıksa kapat, kapalıysa aç
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});