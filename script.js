// عرض رسالة الترحيب
const welcomeMessage = document.getElementById('welcome-message');
const welcomeMessageWords = document.querySelectorAll('.word');
const lightsContainer = document.body;

// إنشاء الفراشات
function createButterfly() {
  const butterfly = document.createElement('div');
  butterfly.classList.add('butterfly');
  butterfly.style.left = Math.random() * 100 + 'vw';
  butterfly.style.top = Math.random() * 100 + 'vh';
  butterfly.style.animationDuration = Math.random() * 2 + 3 + 's';

  // إضافة صورة فراشة ملونة
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'];
  butterfly.style.background = colors[Math.floor(Math.random() * colors.length)];
  butterfly.style.backgroundImage =
    'url(https://i.ibb.co/5vHxDs4/christmas-butterfly.png)';
  butterfly.style.backgroundSize = 'cover';

  lightsContainer.appendChild(butterfly);

  setTimeout(() => {
    butterfly.remove();
  }, 5000);
}

// عرض الكلمات تدريجيًا
window.addEventListener('load', () => {
  let delay = 0;
  welcomeMessageWords.forEach((word, index) => {
    word.style.animationDelay = `${delay}s`;
    delay += 1.5; // تأخير بين الكلمات
  });

  // تشغيل الأنوار
  const lightInterval = setInterval(createLight, 200);

  // إخفاء الكلمات تدريجيًا بعد 7 ثوانٍ
  setTimeout(() => {
    welcomeMessageWords.forEach((word) => {
      word.style.animation = 'fadeOutWord 1.5s ease-in-out forwards';
    });

    // بعد اختفاء الكلمات، تشغيل الفراشات
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        createButterfly();
      }
    }, 1500);

    // إيقاف الأنوار بعد انتهاء الرسالة
    setTimeout(() => {
      clearInterval(lightInterval);
    }, 7000);
  }, 7000);
});
// تشغيل الموسيقى عند تدمير رجل الثلج
const music = document.getElementById('background-music');
music.volume = 0.3;

// تأثير تساقط الثلوج
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 100);

// تأثيرات تدمير رجل الثلج
let clicks = 0;
const snowman = document.getElementById('snowman');
const greeting = document.getElementById('greeting');

snowman.addEventListener('click', () => {
  clicks++;
  const snowmanImg = snowman.querySelector('img');

  // تقليل الشفافية تدريجياً
  snowmanImg.style.opacity = 1 - clicks * 0.2;

  // إضافة اهتزاز عند كل نقرة
  snowman.style.animation = 'shake 0.5s';

  // إعادة تعيين الاهتزاز
  setTimeout(() => {
    snowman.style.animation = '';
  }, 500);

  // إذا وصلت النقرات إلى 5، اختفِ وأظهر الرسالة وشغّل الموسيقى
  if (clicks >= 5) {
    snowman.style.display = 'none';
    greeting.classList.remove('hidden');
    music.play(); // تشغيل الأغنية
  }
});

// إضافة تساقط الثلوج في CSS
const style = document.createElement('style');
style.innerHTML = `
  .snowflake {
    position: fixed;
    top: -50px;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    animation: fall linear infinite;
  }
`;
document.head.appendChild(style);
