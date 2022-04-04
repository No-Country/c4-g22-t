export function AddNavbar() {
  return (
    <div class="header__menu-container">
      <div class="header__nav-container">
        <nav class="header__nav">
          <ul class="header__ul">
            <a class="header__a" href="/">
              Home Page
            </a>
            <a class="header__a" href="">
              No funciono
            </a>
            <a class="header__a" href="">
              Yo tampoco
            </a>
            <a class="header__a" href="">
              Yo menos
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default AddNavbar;

//     headerContainerEl.appendChild(newEl);
//     const menuListaEl = newEl.querySelector(".header__nav-container");
//     const menuEl = newEl.querySelector(".header__menu");
//     const closeMenuEl = newEl.querySelector(".header__nav--close-menu-container");

//     menuEl.addEventListener("click", () => {
//       const cantidadClasesMenuEl = menuListaEl.classList.length;
//       for (let x = 0; x < cantidadClasesMenuEl; x++) {
//         if (menuListaEl.classList[x] == "header__nav-container--on-off") {
//           menuListaEl.classList.remove("header__nav-container--on-off");
//         } else {
//           menuListaEl.classList.add("header__nav-container--on-off");
//         }
//       }
//     });
//     closeMenuEl.addEventListener("click", () => {
//       const cantidadClasesMenuEl = menuListaEl.classList.length;
//       for (let x = 0; x < cantidadClasesMenuEl; x++) {
//         if (menuListaEl.classList[x] == "header__nav-container--on-off") {
//           menuListaEl.classList.remove("header__nav-container--on-off");
//         } else {
//           menuListaEl.classList.add("header__nav-container--on-off");
//         }
//       }
//     });
//   }
