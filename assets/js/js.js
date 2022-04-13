window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById("navHeader").style.padding = "0 0.5rem 0 0";
      document.getElementById("navHeader").style.backgroundColor =
        "rgba(0, 0, 0, 0.9)";
    } else {
      document.getElementById("navHeader").style.padding = "1.5rem  1rem 1rem 0.3rem";
      document.getElementById("navHeader").style.transition = "1s";
      document.getElementById("navHeader").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
    }
  }

let toggle = document.getElementById("toggle")
let show = document.getElementById("show")

toggle.addEventListener("click", () => {

    if(show.classList.contains("hide")) {
        show.classList.remove("hide")
        show.classList.add("show")
    } else {
        show.classList.add("hide")
        show.classList.remove("show")
    }
})
