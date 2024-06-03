document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function showItem(n) {
        items.forEach(item => item.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        items[n].classList.add("active");
        dots[n].classList.add("active");
    }

    function nextItem() {
        index++;
        if (index >= items.length) {
            index = 0;
        }
        showItem(index);
    }

    dots.forEach((dot, dotIndex) => {
        dot.addEventListener("click", function() {
            index = dotIndex;
            showItem(index);
        });
    });

    showItem(index);
    setInterval(nextItem, 3000); // Change d'image toutes les 3 secondes
});

