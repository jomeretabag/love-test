const slider = document.getElementById("loveSlider");
const percentage = document.getElementById("percentage");
const meterFill = document.getElementById("meterFill");
const testButton = document.getElementById("testButton");


// LOVE SLIDER

slider.addEventListener("input", function () {

    let value = slider.value;

    percentage.textContent = value + "%";

    meterFill.style.width = value + "%";

    if (value >= 100) {

        testButton.disabled = false;

        testButton.textContent = "Open My Surprise 💗";

    }

});


// CHECK LOVE

function checkLove() {

    if (slider.value < 100) {

        alert("The test is not finished yet! 💗");

        return;
    }

    goToPage(2);
}


// CHANGE PAGE

function goToPage(pageNumber) {

    document.querySelectorAll(".page").forEach(function(page) {

        page.classList.remove("active");

    });

    document
        .getElementById("page" + pageNumber)
        .classList.add("active");

    window.scrollTo(0, 0);
}


// OPEN GIFT

function openGift(giftNumber) {

    if (giftNumber === 1) {

        goToPage(3);

    }

    else if (giftNumber === 2) {

        goToPage(4);

    }

    else if (giftNumber === 3) {

        goToPage(5);

    }

}
