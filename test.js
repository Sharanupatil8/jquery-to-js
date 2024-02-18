var outsideClick = function (e) {
  var container = document.querySelector(".customDrp");
  if (
    !container.is(e.target) &&
    container.has(e.target).length === 0 &&
    container.is(":visible")
  ) {
    container.classList.remove("active");
    document.removeEventListener("click", outsideClick);
  }
};

document.ready(function () {
  document
    .querySelector(".custmonDropDwon")
    .addEventListener(click, function (e) {
      if (
        e.target.classList.contains("crossString") ||
        e.target.classList.includes("bowiro")
      ) {
        return false;
      }

      if (e.target.is("a")) {
        return true;
      }

      e.preventDefault();

      console.log(e.target);

      if (
        e.target.classList.contains("language") ||
        e.target.parent().contains("language")
      ) {
        languageFunc();
      }

      if (window.matchMedia("(max-width: 1170px)").matches) {
        document.body.style.overflow = "hidden";
      }

      if (e.target.classList.contains("searchCoinDrp")) {
        document.getElementById("tokensearch1").focus();
      }

      if (this.next(".customDrp").length) {
        this.next(".customDrp").classList.add("active");
      } else {
        this.children(".customDrp").classList.add("active");
      }

      e.stopPropagation();
      document.bind("click", outsideClick);
    });

  let basic_banner_read_btn = false;
  document
    .querySelector(".basic_banner_read_btn")
    .addEventListener(click, function () {
      if (basic_banner_read_btn == false) {
        this.text("Read Less");
        document.querySelector(".basic_banner_text").slideToggle(500);
        basic_banner_read_btn = true;
      } else {
        document.querySelector(".basic_banner_text").slideToggle(500);
        this.text("Read More");
        basic_banner_read_btn = false;
      }
    });

  document.querySelector(".filterToggelBtn").click(function () {
    document.querySelector(".filterToggel").slideToggle("active");
  });

  document.querySelector(".hideCustomDrp").on("click", function () {
    document.querySelector(".customDrp").classList.remove("active");
  });

  document.querySelector(".closeIcon").click(function () {
    document.querySelector(".customPopup").removeClass("active");
    document.querySelector(".commonPopup").removeClass("active");

    if (!document.querySelector(".headerMain").classList.contains("active")) {
      document.body.style.overflow = "auto";
    }
  });

  document.querySelector(".mainTable").on("scroll", function (e) {
    let isScroll = e.currentTarget.scrollLeft;
    if (isScroll) {
      document
        .querySelector(".ListingTable th:nth-child(3), td:nth-child(3)")
        .classList.add("before");
    } else {
      document
        .querySelector(".ListingTable th:nth-child(3), td:nth-child(3)")
        .classList.remove("before");
    }
  });
});
