document.addEventListener("DOMContentLoaded", function () {
    const teaForm = document.getElementById("teaForm");
    const teaList = document.getElementById("teaList");
    
    // Load saved teas from local storage
    const teas = JSON.parse(localStorage.getItem("teaLog")) || [];

    function renderTeas() {
        teaList.innerHTML = "";
        teas.forEach((tea, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${tea.name} - ${tea.type} - ⭐ ${tea.rating} 
                <button onclick="removeTea(${index})">❌</button>`;
            teaList.appendChild(li);
        });
    }

    teaForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("teaName").value.trim();
        const type = document.getElementById("teaType").value.trim();
        const rating = document.getElementById("teaRating").value;

        if (name && type && rating) {
            teas.push({ name, type, rating });
            localStorage.setItem("teaLog", JSON.stringify(teas));
            renderTeas();
            teaForm.reset();
        }
    });

    window.removeTea = function(index) {
        teas.splice(index, 1);
        localStorage.setItem("teaLog", JSON.stringify(teas));
        renderTeas();
    };

    renderTeas();
});
