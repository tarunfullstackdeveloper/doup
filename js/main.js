document.addEventListener("DOMContentLoaded", function () {

    const headers = document.querySelectorAll(".accordionheader");

    headers.forEach((header, index) => {
        header.addEventListener("click", function () {

            const content = this.nextElementSibling;

            // Close all
            document.querySelectorAll(".accordioncontent").forEach(item => {
                item.style.display = "none";
                item.previousElementSibling.classList.remove("active");
            });

            // Open current (toggle logic)
            if (content.style.display === "block") {
                content.style.display = "none";
                this.classList.remove("active");
            } else {
                content.style.display = "block";
                this.classList.add("active");
            }

        });
    });

});


document.addEventListener("DOMContentLoaded", function () {

  const minusBtn = document.querySelector(".minus");
  const plusBtn = document.querySelector(".plus");
  const input = document.querySelector(".qty-input");

  minusBtn.addEventListener("click", function () {
    let value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
  });

  plusBtn.addEventListener("click", function () {
    let value = parseInt(input.value);
    input.value = value + 1;
  });

});



$('.pdimageslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pdthumbslider'
});

$('.pdthumbslider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pdimageslider',
  focusOnSelect: true,
  vertical: true
});


document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector(".readmoreaction .read-more");
  const reviews = document.querySelectorAll(".reviewcard");

  let currentIndex = 0;

  btn.addEventListener("click", function () {

    // hide current
    // reviews[currentIndex].classList.remove("active");

    // next index
    currentIndex++;

    // loop back
    if (currentIndex >= reviews.length) {
      currentIndex = 0;
    }

    // show next
    reviews[currentIndex].classList.add("active");

  });

});