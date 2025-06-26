// JavaScript для переключення щомісячних/щорічних цін
document.getElementById('billingToggle').addEventListener('change', function() {
  const container = document.querySelector('.pricing');
  if (this.checked) {
    container.classList.add('yearly-active');
  } else {
    container.classList.remove('yearly-active');
  }
});


// JavaScript для FAQ функціональності
document.addEventListener('DOMContentLoaded', function() {
  // Переключення категорій
  const categoryBtns = document.querySelectorAll('.category-btn');
  const faqLists = document.querySelectorAll('.faq-list');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetCategory = this.getAttribute('data-category');
      
      // Зняти активний клас з усіх кнопок та списків
      categoryBtns.forEach(b => b.classList.remove('active'));
      faqLists.forEach(list => list.classList.remove('active'));
      
      // Додати активний клас до поточної кнопки та списку
      this.classList.add('active');
      document.querySelector(`[data-category="${targetCategory}"].faq-list`).classList.add('active');
    });
  });
  
  // Акордеон для питань
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');
      
      // Закрити всі інші питання
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
        }
      });
      
      // Переключити поточне питання
      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });
});

// JavaScript для обробки форми
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Отримання даних форми
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Показати індикатор завантаження
    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Відправляємо...</span>';
    submitBtn.disabled = true;
    
    // Симуляція відправки (замінити на реальний API)
    setTimeout(() => {
      // Успішна відправка
      submitBtn.innerHTML = '<span>✓ Надіслано!</span>';
      submitBtn.style.background = '#10B981';
      
      // Скинути форму через 2 секунди
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '#FF0050';
        submitBtn.disabled = false;
      }, 2000);
    }, 1000);
  });
});

// Мобільне меню
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }
  
  // Закрити меню при кліку на посилання
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileToggle.textContent = '☰';
    });
  });
});
