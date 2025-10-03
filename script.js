
    // دالة لتغيير وتشغيل الأغنية
  
function playSong(file) {
      let player = document.getElementById('player'); // نجيب عنصر <audio>
      player.src = file; // نغير المسار للأغنية المختارة
      player.play();     // نشغل الأغنية
    }
