import React, { useEffect } from 'react';

const ScrollAuto = ({ items }) => {
  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    const buttons = document.querySelectorAll('.button');

    function createInfiniteCarousel() {
      const buttonWidth = buttons[0].offsetWidth;
      const carouselWidth = carousel.offsetWidth;
      let totalWidth = 0;

      buttons.forEach(button => {
        totalWidth += buttonWidth;
        const clone = button.cloneNode(true);
        carousel.appendChild(clone);
      });

      if (totalWidth < carouselWidth) {
        const additionalClones = Math.ceil((carouselWidth - totalWidth) / buttonWidth);

        for (let i = 0; i < additionalClones; i++) {
          buttons.forEach(button => {
            const clone = button.cloneNode(true);
            carousel.appendChild(clone);
          });
        }
      }
    }

    createInfiniteCarousel();

    setInterval(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        carousel.style.transition = '';
        carousel.style.transform = 'translateX(-200%)';
      }, 10);
    }, 20000);
  }, [items]);

  return (
    <div className="carousel-container">
      <div className='overlay-btnf'></div>
      <div className='overlay-btns'></div>
      <div className="carousel">
        {items.map((item, index) => (
          <button className="button" key={index}>
            {item.image && <img src={item.image} alt={item.alt} className='btncarouimg' />}
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollAuto;
