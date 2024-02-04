// script.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('card-shopping').addEventListener('click', function() {
     window.location.href = 'order.html';
    });
  });

function showAlert() {
    alert("ขออภัย ยังไม่มีสินค้าให้บริการ");
}

function showAlert_2() {
    alert("ขออภัย ไม่สามารถกดซื้อสินค้าได้ เนื่องจากไม่มีสินค้าในรถเข็น");
}