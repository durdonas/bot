const cards = document.querySelector(".cards");

let data = [
  {
    id: 1,
    name: "pepperoni",
    price: "5$",
    img: "https://ellisdownhome.com/wp-content/uploads/2020/09/9.20.Pizza_-1920x1200.jpg",
  },
  {
    id: 2,
    name: "margherita",
    price: "5$",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1602486/pub_5f208947d804e145b8de829b_5f2091a59c71bf02d597a08a/scale_1200",
  },
  {
    id: 3,
    name: "chicken",
    price: "5$",
    img: "https://dashboard.supermama.me/photos/93984/5e7285c075385.jpg",
  },
  {
    id: 4,
    name: "chicago",
    price: "5$",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4944693/pub_6274c4e6e6f01078bf043378_6274c809e6f01078bf0c5457/scale_1200",
  },
  {
    id: 5,
    name: "assorti",
    price: "5$",
    img: "https://kartinki.pics/uploads/posts/2022-08/thumbs/1660952201_3-kartinkin-net-p-pitstsa-kapricheza-yeda-8.jpg",
  },
  {
    id: 6,
    name: "americana",
    price: "5$",
    img: "https://s.inyourpocket.com/gallery/227304.jpg",
  },
  {
    id: 7,
    name: "sezar",
    price: "5$",
    img: "https://burgerpizza.su/thumb/2/1aVQzGZEcrjStpZSPKOXhg/r/d/cezar_picca_cr.jpg",
  },
  {
    id: 8,
    name: "zotman",
    price: "5$",
    img: "https://avatars.mds.yandex.net/get-altay/11244149/2a0000018becc50e8f5315614785840d6b4d/XXL_height",
  },
  {
    id: 9,
    name: "kfc",
    price: "5$",
    img: "http://www.upakovano.ru/upload/iblock/04a/phpK5wlmG.jpg",
  },
  {
    id: 10,
    name: "qazili",
    price: "5$",
    img: "https://sun6-21.userapi.com/impg/WuSrBQm2AQ6RaJWV4rKQ_sWPXeUR5AYLVuEv3g/visk1GlkGVU.jpg?size=0x400&crop=0.227,0.016,0.545,0.973&quality=95&sign=e88067467417980dcae40ac8b7396bd6&c_uniq_tag=pG-VFOOBluFEeci69zg0x1tZRQ2IEx88Zt4yR8KjCaE",
  },
];

function dataWriteHtml() {
  for (let key in data) {
    cards.innerHTML += `
      <div class="card">
        <img src="${data[key].img}" alt="" />
        <article>
          <p>${data[key].name}</p>
          <p>${data[key].price}</p>
        </article>
        <button>add</button>
      </div>`;
  }
}
dataWriteHtml();
