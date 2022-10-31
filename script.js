window.addEventListener("DOMContentLoaded", () => {
  let yashil = document.querySelector(".yashil");
  let qzil = document.querySelector(".qzil");
  let sariq = document.querySelector(".sariq");

  let soat = document.querySelector(".soat");
  let minut = document.querySelector(".minut");
  let secund = document.querySelector(".sekund");
  let milsecund = document.querySelector(".msecund");
  console.log(secund);

  let Vsoat = 0;
  let Vminut = 0;
  let Vsecund = 0;
  let Vmilsecund = 0;

  yashil.addEventListener("click", () => {
    let interval = setInterval(() => {
      Vmilsecund++;
      if (Vmilsecund == 100) {
        Vsecund++;
        Vmilsecund = 0;
      }
      if (Vsecund == 60) {
        Vminut++;
        Vsecund = 0;
      }
      if (Vminut == 60) {
        Vsoat++;
        Vminut = 0;
      }


      milsecund.innerHTML = Vmilsecund;

      secund.innerHTML = Vsecund;

      minut.innerHTML = Vminut;

      soat.innerHTML = Vsoat;
    }, 10);
    qzil.addEventListener("click", () => {
      clearInterval(interval);
    });

    sariq.addEventListener("click", () => {
      clearInterval(interval);

      milsecund.innerHTML = "00";

      secund.innerHTML = "00";

      minut.innerHTML = "00";

      soat.innerHTML = "00";

      Vmilsecund = 0;

      Vsecund = 0;

      Vminut = 0;

      Vsoat = 0;
    });
  });
});
