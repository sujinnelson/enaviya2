document.querySelector(".mc-footer__scroll-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

$(function () {
    $(".mc-news__tab").on("click", function () {
        const tabId = $(this).data("tab");

        $(".mc-news__tab").removeClass("mc-news__tab--active");
        $(this).addClass("mc-news__tab--active");

        $(".mc-news__panel").removeClass("mc-news__panel--active");
        $("#" + tabId).addClass("mc-news__panel--active");
    });
});
