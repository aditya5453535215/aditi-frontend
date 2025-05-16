// Slider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://framerusercontent.com/images/IVjhugdKeUyBlNRm5YPJdeLTP0.jpeg?scale-down-to=2048',
    heading: 'Built on Quality',
    subtext: 'Delivering excellence in every project we touch.',
  },
  {
    image: 'https://framerusercontent.com/images/J9qsivwmpjfx4JIWOD5Pd3QUI.jpeg?scale-down-to=1024',
    heading: 'Visionary Construction',
    subtext: 'Innovating for a better tomorrow.',
  },
  {
    image: 'https://framerusercontent.com/images/TCIMF6OoI2ATAcfVSlpPd1at9U.png?scale-down-to=1024',
    heading: 'Sustainable Solutions',
    subtext: 'Eco-conscious builds for a greener future.',
  },
];

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="hero-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="slider-bg"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: ' 100vh',
              position: 'relative',
            }}
          >
            <div className="slider-content">
              <h1>{slide.heading}</h1>
              <p>{slide.subtext}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  );
}