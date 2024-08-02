Dikey hizalama sorununu çözmek için CSS'inizi ve `Owl Carousel` yapılandırmanızı kontrol etmelisiniz. Ayrıca, `Owl Carousel`'in doğru şekilde çalışmasını sağlamak için gerekli CSS dosyalarının yüklendiğinden emin olmalısınız.

Aşağıda, `Owl Carousel`'i yatay hizalamak için CSS ve JavaScript yapılandırmanızı nasıl ayarlayacağınızı gösteren bir örnek bulabilirsiniz:

1. React bileşenini oluşturun ve `Owl Carousel` ve `jQuery`'yi kullanmak için `CDN`'leri dahil edin:

```jsx
import React, { useEffect } from 'react';
import './App.css';

const OwlCarouselComponent = () => {
  useEffect(() => {
    const scriptJQuery = document.createElement('script');
    scriptJQuery.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    scriptJQuery.async = true;
    document.body.appendChild(scriptJQuery);

    const linkOwlCarouselCss = document.createElement('link');
    linkOwlCarouselCss.rel = 'stylesheet';
    linkOwlCarouselCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css';
    document.head.appendChild(linkOwlCarouselCss);

    const linkOwlCarouselThemeCss = document.createElement('link');
    linkOwlCarouselThemeCss.rel = 'stylesheet';
    linkOwlCarouselThemeCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css';
    document.head.appendChild(linkOwlCarouselThemeCss);

    scriptJQuery.onload = () => {
      const scriptOwlCarousel = document.createElement('script');
      scriptOwlCarousel.src = 'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js';
      scriptOwlCarousel.async = true;
      scriptOwlCarousel.onload = () => {
        window.$('.owl-carousel').owlCarousel({
          items: 4, // Number of items you want to show
          margin: 10, // Margin between items
          loop: true, // Infinite loop
          autoplay: true, // Autoplay
          autoplayTimeout: 3000, // Autoplay interval (ms)
          autoplayHoverPause: true, // Pause on hover
          nav: true, // Show navigation arrows
          dots: true // Show pagination dots
        });
      };
      document.body.appendChild(scriptOwlCarousel);
    };

    // Clean up scripts on unmount
    return () => {
      document.body.removeChild(scriptJQuery);
      const owlCarouselScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"]');
      if (owlCarouselScript) {
        document.body.removeChild(owlCarouselScript);
      }
      const owlCarouselCss = document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"]');
      if (owlCarouselCss) {
        document.head.removeChild(owlCarouselCss);
      }
      const owlCarouselThemeCss = document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css"]');
      if (owlCarouselThemeCss) {
        document.head.removeChild(owlCarouselThemeCss);
      }
    };
  }, []);

  return (
    <div className="owl-carousel owl-theme">
      <div className="item">Slide 1</div>
      <div className="item">Slide 2</div>
      <div className="item">Slide 3</div>
      <div className="item">Slide 4</div>
      <div className="item">Slide 5</div>
      <div className="item">Slide 6</div>
      <div className="item">Slide 7</div>
      <div className="item">Slide 8</div>
    </div>
  );
};

export default OwlCarouselComponent;
```

2. Stil dosyasını ekleyin:

`App.css` dosyasına CSS kodlarınızı ekleyin:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f7f7f7;
}
.owl-carousel {
  max-width: 800px;
}
.owl-carousel .item {
  background: #4DC7A0;
  padding: 40px;
  border-radius: 3px;
  text-align: center;
  color: white;
  margin: 5px;
  height: 300px; /* Yüksekliği azaltıldı */
}
.owl-theme .owl-controls .owl-buttons div {
  color: #FFF;
  display: inline-block;
  zoom: 1;
  display: inline; /* IE7 life-saver */
  margin: 5px;
  padding: 3px 10px;
  font-size: 12px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background: #869791;
  filter: Alpha(Opacity=50); /* IE7 fix */
  opacity: 0.5;
}
.owl-theme .owl-controls .owl-buttons .owl-prev {
  left: -45px;
}
.owl-theme .owl-controls .owl-buttons .owl-next {
  right: -45px;
}
```

3. React uygulamanızda bileşeni kullanın:

```jsx
import React from 'react';
import './App.css';
import OwlCarouselComponent from './OwlCarouselComponent';

function App() {
  return (
    <div className="App">
      <OwlCarouselComponent />
    </div>
  );
}

export default App;
```

Bu şekilde, `Owl Carousel`'i yatay olarak çalıştırabilir ve bileşenin düzgün çalışmasını sağlayabilirsiniz. `Owl Carousel` ve `jQuery`'yi CDN'lerden yüklemek ve doğru CSS dosyalarını dahil etmek, slider'ınızın yatay olarak çalışmasını sağlar.