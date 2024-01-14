import React, { useState, useEffect } from 'react';
import slaid1 from './img/slaid1.svg';
import slaid2 from './img/slaid3.svg';
import nov from './img/nov1.svg';
import elka from './img/elka.svg';
import zirka from './img/zirka.svg';
import Prosmm from './prom';
import lil from './img/mafia.svg'
import pi from './img/M02.svg'
import p from './img/m03.svg'
import maf from './img/mafia2.svg'
import gen from './img/gena.svg'
import pandd from './img/pandd.svg'
const Slider = () => {
  const [images, setImages] = useState([slaid1, slaid2]); // Пути к изображениям
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Интервал смены слайдов в миллисекундах (здесь 2 секунды)

    return () => clearInterval(interval);
  }, [currentImageIndex]); // Зависимость от currentImageIndex для перезапуска интервала при изменении индекса

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <section className='avtslaid'>
      <div className='section2-h'>Простые правила, быстрые <br />  и интересные партии и постоянно<br/> пополняющийся каталог</div>
      <div className='slaider'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className="novinki"> 
        <div className="zagalv">Новинки</div>
        <div className="nastol-gamess-mass">
          <img src={nov} alt="" />
          <img src={maf} alt="" />
          <img src={pandd} alt="" />
          <img src={gen} alt="" />
          </div>
      </div>
    <div className="container-elka">
      <div className="elka">
        <div className="elka-izb">
          <img src={elka} alt="" />
          </div>
        <div className="elka-txt">Беплатно</div>
         <div className="elka-txt-p">Пробная версия бесплатна</div>
      </div>
      <div className="zirka">
        <div className="zirka-izb">
          <img src={zirka} alt="" />
        </div>
        <div className="zirka-txt">Всего за 120$</div>
         <div className="elka-txt-pp">Пробная версия бесплатна</div>
      </div>
    </div>
    <div className="punkt-container">
      <Prosmm title="01" name="Можно играть на Smart-tv или PC" opisanie="Собери друзей перед экраном ТВ и можно начинать вечеринку!" src={lil} />
      <Prosmm title="02" name="Мобильный телефон в качестве контроллера" opisanie="с их помощью можно выбирать правильные ответы, управлять событиями на большом экране" src={pi} />
      <Prosmm title="03" name="Новые игры каждую пятницу" opisanie="Простые правила, быстрые и интересные партии" src={p} />
    </div>
    
    </section>
  );
};

export default Slider;
