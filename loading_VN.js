document.addEventListener("DOMContentLoaded", function() {
    // Tạo thẻ link để import CSS
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/gh/Hoanganh999/Hi@main/1.css";
    document.head.appendChild(link);

    // Tạo div hiển thị hiệu ứng
    var elemDiv = document.createElement('div');
    elemDiv.setAttribute('id', 'gpmn-body-load');
    elemDiv.innerHTML = `
        <div class="bl-logo">
            <div class="tank-wrap">
                <div class="vn-sun">
                    <img src="https://cdn.jsdelivr.net/gh/duyvinh09/30-04-1975@59c1018/img/vn-flag-full.gif" />
                </div>
                <div class="tank-simu">
                    <div class="wheels"><span></span><span></span><span></span><span></span><span></span></div>
                    <div class="fence"></div>
                    <div class="fence2"></div>
                </div>
                <div class="gate"></div>
                <div class="gate2"></div>
            </div>
        </div>
    `;
    document.body.appendChild(elemDiv);

    // Ẩn sau 3.1 giây
    setTimeout(function() {
        document.getElementById('gpmn-body-load').style.display = 'none';
    }, 3100);
});
