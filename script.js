
function openSurprise() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("celebration").classList.remove("hidden");
}

function showMemories() {
    document.getElementById("celebration").classList.add("hidden");
    document.getElementById("memories").classList.remove("hidden");
}

function showLetter() {
    document.getElementById("memories").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
}

function blowCandles() {
    const cake = document.getElementById("birthdayCake");
    const message = document.getElementById("wishMessage");

    cake.textContent = "🍰";
    cake.classList.add("cake-blown");

    message.classList.remove("hidden");
}

function openLetter() {
    document.querySelector(".envelope").style.display = "none";

    document.getElementById("letterContent")
        .classList.remove("hidden");
}
function showFinale() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("finale").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
