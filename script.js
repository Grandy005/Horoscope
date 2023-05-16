const person = {
    name: "",
    birth: {
        year: 0,
        month: 0,
        day: 0
    }
};

function calculateZodiacSign() {
    let date = document.querySelector("input[type=date]");
    let name = document.querySelector("input");

    person.name = name.value;
    person.birth.year = parseInt(date.value.substring(0, 4));
    person.birth.month = parseInt(date.value.substring(5, 7));
    person.birth.day = parseInt(date.value.substring(8, 11));

    document.querySelectorAll(".row").forEach(item => {
        item.style.display = "none";
    });
    document.querySelector("button").style.display = "none";

    let zodiacDiv = document.querySelector(".zodiac");
    let zodiacImg = document.querySelector("img");
    let zodiacH3 = zodiacDiv.querySelector("h3");
    let zodiacH4 = zodiacDiv.querySelectorAll("h4")[1];
    zodiacH3.innerHTML += person.name + "!";

    var personZodiac = parseInt(`${person.birth.month}${person.birth.day}`);
    if (personZodiac.toString().length == 2) {
        personZodiac = parseInt(`${person.birth.month}${person.birth.day}${0}`);
    }

    if (321 <= personZodiac && personZodiac <= 419) {
        zodiacImg.src += "aries.png";
        zodiacH4.innerHTML = "Kos";
        console.log("Aries");
    }
    else if (420 <= personZodiac && personZodiac <= 520) {
        zodiacImg.src += "taurus.png";
        zodiacH4.innerHTML = "Bika";
        console.log("Taurus");
    }
    else if (521 <= personZodiac && personZodiac <= 620) {
        zodiacImg.src += "gemini.png";
        zodiacH4.innerHTML = "Ikrek";
        console.log("Gemini");
    }
    else if (621 <= personZodiac && personZodiac <= 722) {
        zodiacImg.src += "cancer.png";
        zodiacH4.innerHTML = "Rák";
        console.log("Cancer");
    }
    else if (723 <= personZodiac && personZodiac <= 822) {
        zodiacImg.src += "leo.png";
        zodiacH4.innerHTML = "Oroszlán";
        console.log("Leo");
    }
    else if (823 <= personZodiac && personZodiac <= 922) {
        zodiacImg.src += "virgo.png";
        zodiacH4.innerHTML = "Szűz";
        console.log("Virgo");
    }
    else if (923 <= personZodiac && personZodiac <= 1022) {
        zodiacImg.src += "libra.png";
        zodiacH4.innerHTML = "Mérleg";
        console.log("Libra");
    }
    else if (1023 <= personZodiac && personZodiac <= 1121) {
        zodiacImg.src += "scorpio.png";
        zodiacH4.innerHTML = "Skorpió";
        console.log("Scorpio");
    }
    else if (1121 <= personZodiac && personZodiac <= 1221) {
        zodiacImg.src += "sagittarius.png";
        zodiacH4.innerHTML = "Nyilas";
        console.log("Sagittarius");
    }
    else if (1222 <= personZodiac && personZodiac <= 119) {
        zodiacImg.src += "capricorn.png";
        zodiacH4.innerHTML = "Bak";
        console.log("Capricorn");
    }
    else if (120 <= personZodiac && personZodiac <= 218) {
        zodiacImg.src += "aquarius.png";
        zodiacH4.innerHTML = "Vízöntő";
        console.log("Aquarius");
    }
    else if (219 <= personZodiac && personZodiac <= 320) {
        zodiacImg.src += "pisces.png";
        zodiacH4.innerHTML = "Halak";
        console.log("Pisces");
    }
    zodiacDiv.style.display = "unset";
}
function check() {
    if (document.querySelector("input").value.length != 0 && document.querySelector("input[type=date]").value.length > 8) {
        calculateZodiacSign();
    }
    else {
        alert("Tölts ki minden mezőt a továbblépéshez!")
    }
}