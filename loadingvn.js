document.addEventListener("DOMContentLoaded", function () {
    // Tạo phần tử loading
    var loader = document.createElement("div");
    loader.id = "loading-screen";
    loader.innerHTML = `
        <img src="https://cdn.jsdelivr.net/gh/duyvinh09/30-04-1975@59c1018/img/vn-flag-full.gif" alt="VN Flag">
    `;
    document.body.appendChild(loader);

    // Thêm CSS trực tiếp bằng JS
    var style = document.createElement("style");
    style.innerHTML = `
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.8s ease;
        }

        #loading-screen img {
            width: 180px;
            height: auto;
            animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);

    // Khi trang load xong thì ẩn loading
    window.addEventListener("load", function () {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => loader.remove(), 800);
        }, 1000); // giữ màn hình loading 1 giây
    });
});
