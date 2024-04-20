const btns = document.querySelectorAll(".nav__link");
btns.forEach((btn) =>
  btn.addEventListener("click", (event) => setActive(event))
);

function setActive(event) {
  if ([...event.target.classList].includes("nav__link_active")) {
    return;
  }
  const clickedBtn = event.target;
  const currentActiveBtn = document.querySelector(".nav__link_active");

  const activeBlock = document.querySelector(".content__card_active");
  const newActiveBlock = document.querySelector(`#card-${clickedBtn.id}`);
  const disabledClass = [...newActiveBlock.classList].find((str) =>
    str.startsWith("content__card_disabled")
  );
  currentActiveBtn.classList.remove("nav__link_active");
  clickedBtn.classList.add("nav__link_active");
  newActiveBlock.classList.replace(disabledClass, "content__card_active");
  activeBlock.classList.replace("content__card_active", disabledClass);
}
