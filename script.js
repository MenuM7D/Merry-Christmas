// عرض رسالة الترحيب
const welcomeMessage = document.getElementById('welcome-message');
const welcomeMessageWords = document.querySelectorAll('.word');
const lightsContainer = document.body;

// إنشاء الفراشات
// إنشاء فراشة جديدة
function createButterfly() {
  const butterfly = document.createElement('div');
  butterfly.classList.add('butterfly');
  butterfly.style.left = Math.random() * 100 + 'vw'; // تحديد مكان عشوائي أفقياً
  butterfly.style.top = Math.random() * 100 + 'vh'; // تحديد مكان عشوائي عمودياً
  butterfly.style.animationDuration = Math.random() * 3 + 3 + 's'; // وقت عشوائي للطيران

  document.body.appendChild(butterfly);

  // حذف الفراشة بعد انتهاء تأثير الطيران
  butterfly.addEventListener('animationend', () => {
    butterfly.remove();
  });
}

// إنشاء مجموعة من الفراشات
function releaseButterflies(count = 20) {
  for (let i = 0; i < count; i++) {
    createButterfly();
  }
}

// عرض الفراشات بعد اختفاء النصوص
setTimeout(() => {
  releaseButterflies();
}, 7000); // بعد انتهاء النصوص بـ 7 ثوانٍ
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
