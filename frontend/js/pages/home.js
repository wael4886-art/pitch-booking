const root=document.getElementById("page-content");
const pitches=MockAPI.getPitches();
root.innerHTML=`<div class="card"><h2>احجز ملعبك بسهولة</h2><p>ابحث عن ملعب مناسب واختر الموعد اللي يناسبك.</p><a class="btn" href="search.html">ابدأ البحث</a></div>
<div class="grid" style="margin-top:16px">${pitches.map(p=>`<article class="card"><h3>${p.name}</h3><p>${p.location} · ⭐ ${p.rating}</p><p>${p.price} د.ل / ساعة</p><a class="btn" href="pitch.html?pitchId=${p.id}">التفاصيل</a></article>`).join("")}</div>`;