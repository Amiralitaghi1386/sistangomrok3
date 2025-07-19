function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  // دریافت پلاک
  const p1 = document.getElementById("part1").value;
  const letter = document.getElementById("letter").value;
  const p2 = document.getElementById("part2").value;
  const province = document.getElementById("province").value;
  const plate = `${p1} ${letter} ${p2} - ${province}`;

  // بارگذاری لوگو
  const img = new Image();
  img.src = "logo-rustam.png";
  img.onload = function () {
    // پس‌زمینه سیستانی
    doc.setFillColor(237, 235, 220); // رنگ گرم خاکی
    doc.rect(0, 0, 210, 297, "F");

    // لوگو و تیتر طلایی
    doc.addImage(img, "PNG", 80, 10, 50, 50);
    doc.setFontSize(16);
    doc.setTextColor(180, 140, 30); // طلایی
    doc.setFont("times", "bold");
    doc.text("سامانه صف کامیون‌های مرز میرجاوه", 105, 70, { align: "center" });
    doc.text("سیستان کوبنده", 105, 78, { align: "center" });

    // محتوا با قلم رسمی
    doc.setFontSize(12);
    doc.setTextColor(40, 40, 40);
    doc.setFont("helvetica", "normal");
    let y = 95;
    doc.text(`📋 شماره پلاک: ${plate}`, 20, y); y += 10;
    doc.text("نوع بار: مصالح ساختمانی", 20, y); y += 10;
    doc.text("تاریخ ورود: ۱۴۰۳/۴/۲۲", 20, y); y += 10;
    doc.text("ماشین‌های جلوتر: ۳۱", 20, y); y += 10;
    doc.text("کد رهگیری: 123456789", 20, y); y += 15;

    // جمله پایانی سیستانی
    doc.setFont("courier", "italic");
    doc.setFontSize(11);
    doc.setTextColor(0, 80, 60); // سبز جنوبی
    doc.text("💬 خسته نباشید و خدا قوت به شما رانندگان زحمتکش", 20, y); y += 10;
    doc.text("🌄 امید است از سفر به استان سیستان خشنود باشید", 20, y);

    // ذخیره PDF
    doc.save("sistangomrok_result.pdf");
  };
}