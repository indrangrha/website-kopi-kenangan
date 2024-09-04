const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
const searchButton = document.querySelector("#search-button");
const cartButton = document.querySelector("#shopping-cart-button");
// Toggle class active untuk hamburger menu
hamburgerMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Toggle class active untuk shopping cart
const cart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  cart.classList.toggle("active");
  e.preventDefault();
};

//Klik diluar elemen
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cartButton.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

//Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// itemDetailButtons.forEach(function (btn) {
//   btn.onclick = function (e) {
//     itemDetailModal.style.display = "flex";
//     e.preventDefault();
//   };
// });

//Klik tombol close modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("item-detail-modal");
  const closeIcon = modal.querySelector(".close-icon");

  document.querySelectorAll(".item-detail-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      // Update konten modal sesuai dengan produk yang diklik
      const productCard = button.closest(".product-card");
      const productName = productCard.querySelector("h3").innerText;
      const productDesc = productCard.querySelector("p").innerText;
      const productImage = productCard.querySelector("img").src;
      const productPrice = productCard.querySelector(".product-price").innerText;

      modal.querySelector("#modal-product-name").innerText = productName;
      modal.querySelector("#modal-product-description").innerText = productDesc;
      modal.querySelector("#modal-product-image").src = productImage;
      modal.querySelector("#modal-product-price").innerText = productPrice;

      // modal ditampilkan
      modal.style.display = "flex";
    });
  });

  closeIcon.addEventListener("click", (event) => {
    event.preventDefault();
    const itemDetailModal = document.querySelector("#item-detail-modal");
    // Tambahkan kelas animasi
    itemDetailModal.classList.add("modal-closing");

    // Setelah animasi selesai, sembunyikan modal
    itemDetailModal.addEventListener(
      "animationend",
      () => {
        itemDetailModal.style.display = "none";
        itemDetailModal.classList.remove("modal-closing");
      },
      { once: true }
    );
  });

  //Klik diluar modal untuk menutup modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      const itemDetailModal = document.querySelector("#item-detail-modal");
      // Tambahkan kelas animasi
      itemDetailModal.classList.add("modal-closing");

      // Setelah animasi selesai, sembunyikan modal
      itemDetailModal.addEventListener(
        "animationend",
        () => {
          itemDetailModal.style.display = "none";
          itemDetailModal.classList.remove("modal-closing");
        },
        { once: true }
      );
    }
  });
});
