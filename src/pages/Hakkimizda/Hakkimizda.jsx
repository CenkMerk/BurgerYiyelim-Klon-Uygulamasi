import React from "react";
import HakkimizdaImg from "./hakkimizdaimg.png";

export const Hakkimizda = () => {
  return (
    <div className="container bg-white py-3 px-3 mt-5 rounded-1 bg-white animate__animated animate__fadeIn">
      <div className="position-relative">
        <img src={HakkimizdaImg} alt="HakkimizdaImg" width="100%" loading="lazy"/>
        <h1 className="position-absolute bottom-0 end-0 fw-bolder text-white text-center">
          HAKKIMIZDA
        </h1>
      </div>
      <div className="pt-3 fst-italic">
        <h1>Burger Yiyelim</h1>
        <br />
        <p>
          Keban Et 1976 yılında Keban Kasap olarak kuruldu. Butik bir kasap
          olmasına rağmen müşterilerine sunmuş olduğu ürünlerin katkısız ve
          lezzetli olmasından dolayı kısa sürede 'Et Ustası' ünvanının aldı. 41
          yıldır iş hacmi, ürün yelpazesi, müşteriler, çalışanlar kısacası bir
          çok şey değişti. Ancak değişmeyen tek şey Keban Et'in sunduğu et ve et
          ürünlerinin lezzeti idi.
        </p>
        <br />
        <p>
          Keban Kasap müşterilerinden aldığı talepler ile kalitesini hiç
          bozmadan büyüyebilen nadir et üreticilerindendir. İlerleyen yıllarda
          gücünü müşterilerinin sadakat ve övgülerinden alarak üretim bandını
          genişletti.
        </p>
        <br />
        <p>
          İstanbul'un en köklü kasapları arasında yer alan Keban Kasap şu anda
          üretimine 1500m2 kapalı alana sahip Keban Et Entegre tesislerinde
          devam etmekte.
        </p>
        <br />
        <p>
          Yakın zamana kadar sadece pişirmeye hazır et ürünleri üretmesine
          rağmen 'Et Ustası' ünvanına yakışır bir şekilde tüketime hazır,
          pişirilmiş et ürünleri üretmeye başladı. Halkımızın gerçek et,
          katkısız lezzeti tatması için Et Yiyelim markasını oluşturdu. Bu marka
          çok kısa sürede halkın beğenisini kazandı. Et Yiyelim lokantalarında,
          kendine has lezzetleri içerisinde barındıran ürünleri ile müşterilerin
          vazgeçilmezi arasında yer aldı.
        </p>
        <br />
        <p>
          Keban Et her zaman samimi aile kasabı çizgisinin yanında, modern
          gelişimlere de önem veren bir firma olmuştur. Bu kimliğiyle 2016
          yılında yerli burger projesi ile Burger Yiyelim markasını oluşturdu.
          Burger Yiyelim'in farkı %100 katkısız %100 dana etinden yapılan
          burgerleri oldu.
        </p>
        <br />
        <h6>NEDEN UYGUN FİYAT?</h6>
        <br />
        <p>
          Burger Yiyelim'in nefis köfteleri Keban Et 'in hijyenik ve son
          teknoloji üretim tesislerinde üretilip oradan damaklarınıza kadar
          ulaşmakta. Köftelerimizi ana markamız olan Keban Entegre Et
          Tesisleri'nde hazırladığımız için sizlere daha uygun fiyata daha
          kaliteli burgerler sunabiliyoruz.
        </p>
        <br />
        <h6>KÖFTELERİNİZ HELAL Mİ?</h6>
        <br />
        <p>Köftelerimiz TSE Helal belgelidir.</p>
      </div>
    </div>
  );
};
