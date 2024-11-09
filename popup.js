document.addEventListener("DOMContentLoaded", function() {
    // Sadece 'localhost/popup/hakkimizda.php' sayfasında popup'ı göster
    if (window.location.pathname === '/popup/hakkimizda.php') {
        // Pop-up'ın HTML içeriği
        var popupHtml = `
        <div id="myPopup" class="popup">
            <div class="popup-content">
                <span class="popup-close">&times;</span>
                <h2>Popup Başlık</h2>
                <p>Bu bir pop-up içeriğidir.</p>
            </div>
        </div>`;

        // HTML'i sayfaya ekle
        document.body.insertAdjacentHTML('beforeend', popupHtml);

        // Pop-up stilini ayarla
        var popupStyle = `
        <style>
            .popup {
                display: none; /* Başlangıçta gizli */
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }

            .popup-content {
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                width: 300px;
                margin: 15% auto;
            }

            .popup-close {
                color: #aaa;
                font-size: 28px;
                font-weight: bold;
                position: absolute;
                top: 10px;
                right: 10px;
            }

            .popup-close:hover,
            .popup-close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
        </style>`;

        // Stil bilgilerini sayfaya ekle
        document.head.insertAdjacentHTML('beforeend', popupStyle);

        // Pop-up elementini al
        var popup = document.getElementById('myPopup');
        var closeBtn = document.getElementsByClassName('popup-close')[0];

        // Pop-up'ı göster
        popup.style.display = "block";

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
