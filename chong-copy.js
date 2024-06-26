// chong-copy.js

// Thêm CSS để vô hiệu hóa chọn văn bản
const style = document.createElement('style');
style.textContent = `
    body {
        -webkit-user-select: none;  /* Safari */
        -moz-user-select: none;     /* Firefox */
        -ms-user-select: none;      /* Internet Explorer/Edge */
        user-select: none;          /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
`;
document.head.appendChild(style);

// Vô hiệu hóa menu ngữ cảnh chuột phải
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Vô hiệu hóa chọn văn bản
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Vô hiệu hóa các tổ hợp phím cụ thể
document.addEventListener('keydown', function(e) {
    // Ngăn chặn Ctrl+C, Ctrl+U, Ctrl+S
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) {
        e.preventDefault();
    }
});
