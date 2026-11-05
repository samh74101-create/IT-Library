const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

// إنشاء رسالة عند عدم وجود نتائج
const noResults = document.createElement("p");

noResults.textContent = "عذراً، لم يتم العثور على نتائج.";

noResults.style.textAlign = "center";
noResults.style.color = "#758397";
noResults.style.padding = "30px";
noResults.style.display = "none";

// وضع الرسالة أسفل مربع البحث
searchInput.parentElement.appendChild(noResults);

// تشغيل البحث
searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.trim().toLowerCase();

    let found = 0;

    cards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    noResults.style.display =
        found === 0 ? "block" : "none";

});