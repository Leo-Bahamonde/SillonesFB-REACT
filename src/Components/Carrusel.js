import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
  {
    src: 'https://image.architonic.com/pfm3-3/2079051/770-level-divano-hd-02-fam-g-arcit18.jpg',
    altText: 'Encuentra tu estilo',
    header: 'Encuentra tu estilo',
    key: '1'
  },
  {
    src: 'https://mueblesysillones.com.ar/wp-content/uploads/2020/07/Foto-principal-home-1920x1080.jpg',
    altText: 'Personaliza tus espacios',
    header: 'Personaliza tus espacios',
    key: '2'
  },
  {
    src: 'https://data.1freewallpapers.com/download/armchairs.jpg',
    altText: 'LLAME YA !!',
    header: 'LLAME YA !!',
    key: '3'
  }
 
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;








/* import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: 'https://image.architonic.com/pfm3-3/2079051/770-level-divano-hd-02-fam-g-arcit18.jpg',
    altText: 'Encuentra tu estilo',
    header: 'Encuentra tu estilo',
    key: '1'
  },
  {
    src: 'https://mueblesysillones.com.ar/wp-content/uploads/2020/07/Foto-principal-home-1920x1080.jpg',
    altText: 'Personaliza tus espacios',
    header: 'Personaliza tus espacios',
    key: '2'
  },
  {
    src: 'https://data.1freewallpapers.com/download/armchairs.jpg',
    altText: 'LLAME YA !!',
    header: 'LLAME YA !!',
    key: '3'
  }
 
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Anterior" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Siguiente" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Example; */
