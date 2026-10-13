document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Form");
    const dotaz = document.getElementById("dotaz");
    const email = document.getElementById("email");
    const odpoved = document.getElementById("odpoved");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const textDotazu = dotaz.value.trim();
        const textEmailu = email.value.trim();

        if (textDotazu === "") {
            alert("Napište svůj dotaz!");
            return;
        }

        // Vymažeme úvodní zprávu.
        odpoved.innerHTML = "";

        // Vytvoříme nový rámeček s dotazem.
        const vysledek = document.createElement("div");
        vysledek.className = "question-result";

        const nadpisDotazu = document.createElement("strong");
        nadpisDotazu.textContent = "Váš dotaz:";

        const text = document.createElement("p");
        text.textContent = textDotazu;

        const nadpisEmailu = document.createElement("strong");
        nadpisEmailu.textContent = "E-mail:";

        const emailText = document.createElement("p");
        emailText.textContent = textEmailu || "Neuveden";

        vysledek.appendChild(nadpisDotazu);
        vysledek.appendChild(text);
        vysledek.appendChild(nadpisEmailu);
        vysledek.appendChild(emailText);

        // Zobrazíme dotaz v rámečku Odpověď podpory.
        odpoved.appendChild(vysledek);

        // Vyčistíme vstupní pole.
        form.reset();
    });
});