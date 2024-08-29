document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brazil",
        desc: "Kopi Robusta Brazil kami dikenal dengan kekuatan dan kepekatannya yang khas. Setiap tegukan memberikan dorongan energi dengan rasa yang kaya dan berani, ideal untuk memulai hari atau sebagai teman setia di sore hari. Rasakan kombinasi rasa intens dari kopi Robusta Brazil, termasuk nuansa cokelat yang pekat, rempah yang hangat, dan sentuhan kacang yang menggugah selera.",
        img: "1.jpg",
        price: 20000,
      },
      {
        id: 2,
        name: "Arabica Blend",
        desc: "Masuki dunia kopi yang penuh rasa dan aroma dengan Kopi Arabika Blend Premium kami. Dirancang untuk pecinta kopi yang menghargai kualitas dan kompleksitas, blend ini menggabungkan biji kopi Arabika dari beberapa daerah terbaik di dunia, menciptakan pengalaman menikmati kopi yang luar biasa.",
        img: "2.jpg",
        price: 25000,
      },
      {
        id: 3,
        name: "Primo Passo",
        desc: "Rasakan keunggulan sejati dengan Primo Passa, blend kopi premium yang dirancang untuk memanjakan setiap pencinta kopi. Menggabungkan biji kopi Arabika dan Robusta pilihan dari perkebunan terbaik di dunia, Primo Passa menawarkan harmoni rasa yang sempurna dengan sentuhan keasaman lembut, kekuatan yang berani, dan aroma yang memikat.",
        img: "3.jpg",
        price: 30000,
      },
      {
        id: 4,
        name: "Aceh Gayo",
        desc: "Temukan keajaiban kopi nusantara dengan Aceh Gayo dan Sumatra Mandheling, dua permata dari tanah Sumatra yang menawarkan pengalaman kopi yang tak tertandingi. Aceh Gayo dikenal dengan karakteristik rasa yang kompleks, memadukan keasaman yang halus dengan nuansa cokelat dan rempah yang mendalam, serta aroma floral yang memikat.",
        img: "4.jpg",
        price: 35000,
      },
      {
        id: 5,
        name: "Sumatra Mandheling",
        desc: "Sumatra Mandheling menghadirkan kekuatan rasa yang kuat dan bersahaja, dengan profil rasa tanah, rempah, dan sentuhan manis yang memanjakan lidah. Kedua kopi ini berasal dari perkebunan terkemuka di Sumatra, menggunakan metode pemrosesan tradisional yang mempertahankan kualitas dan keaslian rasa.",
        img: "5.jpg",
        price: 40000,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [], // array yang menampung product di cart
    total: 0, // total harga keseluruhan
    quantity: 0, //quantity keseluruhan
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barangnya udah ada, cek apakah barangnya sama atau beda dengan ada yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, maka tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      //  ambil item yang akan diremove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          // jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

//Konversi harga ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
