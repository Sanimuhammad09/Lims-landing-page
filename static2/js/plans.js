for (let i = 0; i < 3; i++) {
  let show = document?.getElementById("institute-plans-show-" + i);
  let hide = document?.getElementById("institute-plans-hide-" + i);

  show?.addEventListener(
    "click",
    (e) => {
      let i = e.currentTarget.index;
      let show = document.getElementById("institute-plans-show-" + i);
      let hide = document.getElementById("institute-plans-hide-" + i);
      let planCon = document.getElementById("institute-plans-con-" + i);

      show.style.display = "none";
      hide.style.display = "block";
      planCon.style.display = "block";
    },
    false
  );
  if (show)
  show.index = i;

  hide?.addEventListener(
    "click",
    (e) => {
      let i = e.currentTarget.index;
      let show = document.getElementById("institute-plans-show-" + i);
      let hide = document.getElementById("institute-plans-hide-" + i);
      let planCon = document.getElementById("institute-plans-con-" + i);

      show.style.display = "block";
      hide.style.display = "none";
      planCon.style.display = "none";
    },
    false
  );
  hide.index = i;
}   