$(document).ready(function () {
    $('#portfolio-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#portfolio-section').offset().top
        }, 1500);
    });
});

const card = document.querySelector(".img0");
card.onclick = function () {
    window.location.href = 'https://conways-game-of-life-christine.netlify.app'
};

const card1 = document.querySelector(".img1");
card1.onclick = function () {
    window.location.href = 'https://nasa-photo-day.netlify.com/'
};

const card2 = document.querySelector(".img2");
card2.onclick = function () {
    window.location.href = 'https://nychols-sweets.netlify.com/'
};

const card3 = document.querySelector(".img3");
card3.onclick = function () {
    window.location.href = "https://swaap.co/"
};
