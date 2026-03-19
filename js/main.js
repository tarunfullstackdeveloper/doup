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