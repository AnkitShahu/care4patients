import 'hero-slider/dist/index.css';
import HeroSlider, { Nav, Overlay, Slide } from 'hero-slider';

<HeroSlider 
    className='h-full w-full'
    height="100vh"
    autoplay
    controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide: 2) =>
        console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide: 2, nextSlide: 2) =>
        console.debug(
            'onBeforeSliding(previousSlide, nextSlide): ',
            previousSlide,
            nextSlide
        ),
        onAfterSliding: (nextSlide: 2) =>
        console.debug('onAfterSliding(nextSlide): ', nextSlide)
  }}>
</HeroSlider>