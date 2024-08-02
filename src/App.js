import React, { useEffect } from 'react';
import './App.css';

const App = () => {
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

export default App;