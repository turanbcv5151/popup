<script>
document.addEventListener("DOMContentLoaded", function() {
    // Sadece belirli bir sayfada pop-up'ı göster
    if (window.location.pathname === '/urun/asg-steyr-m9-a1-havali-tabanca') {
        // Popup'ın HTML içeriğini oluştur
        var popupHtml = `
        <div id="myPopup" class="popup">
          <div class="popup-content">
            <span class="popup-close">&times;</span>
            <a href="https://www.kolayav.com/urun/asg-steyr-m9-a1-cift-renk-havali-tabanca">
            <img src="https://kolayav.myideasoft.com/dosya/asg-steyr-m9-a1-cift-renk.webp" alt="Pop-up Görsel" style="width: 100%;">
          </a>
          </div>
        </div>`;

        // HTML'i sayfaya ekle
        document.body.insertAdjacentHTML('beforeend', popupHtml);

        // Popup'ın stilini ayarla
        var popupStyle = `
        <style>
            .popup {
                display: flex; /* Görüntülemek için ayar */
                align-items: center;
                justify-content: center;
                position: fixed;
                z-index: 9999; /* Daha yüksek z-index değeri */
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7); /* Daha transparan arka plan */
            }

            .popup-content {
                background-color: transparent; /* Beyaz arka plan olmadan görüntü */
                padding: 0;
                border-radius: 8px;
                width: 100%; /* Daha büyük pop-up genişliği */
                max-width: 400px; /* Maksimum genişlik ayarı */
                position: relative;
            }

            .popup-close {
                color: #fff;
                font-size: 28px;
                font-weight: bold;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }

            .popup-close:hover,
            .popup-close:focus {
                color: #f00;
                text-decoration: none;
            }
        </style>`;

        // Stili sayfaya ekle
        document.head.insertAdjacentHTML('beforeend', popupStyle);

        // Popup elementini al
        var popup = document.getElementById('myPopup');
        var closeBtn = document.getElementsByClassName('popup-close')[0];

        // Popup'ı göster
        popup.style.display = "flex";

        // Kapatma butonuna tıklama işlemi
        closeBtn.onclick = function() {
            popup.style.display = "none";
        }

        // Popup dışında bir yere tıklanırsa popup'ı kapat
        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        }
    }
});
</script>
