

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function MainSlide() {
  return (  
    <div>
      <Carousel className='z-0' responsive={responsive}>
  <div>
    <img className="h-[220px] w-[230px]" src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711529146781-636e9de3d3f67efb57d93844339adcf4.png?tr=q-75,w-247" alt="" />
  </div>
  <div>
    <img className="h-[220px] w-[230px]" src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711529151463-428d86c96ad07d3c0d7dc304f68c9322.png?tr=q-75,w-247" alt="" />
  </div>
  <div>
    <img className="h-[220px] w-[230px]" src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711529155553-11c77f53a83b846d71edd21beb48e8d2.png?tr=q-75,w-247" alt="" />
  </div>
  <div>
    <img className="h-[220px] w-[230px]" src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/27/1711529159728-6bd46bc9af80ee57f2246d4976a0de65.png?tr=q-75,w-247" alt="" />
  </div>
  <div>
    <img className="h-[220px] w-[230px]" src="https://ik.imagekit.io/tvlk/image/imageResource/2024/04/23/1713842977179-70898b47ee9da049c253c89914c51e5d.png?tr=q-75,w-247" alt="" />
  </div>
  <div>
    <img className="h-[220px] w-[230px]" src="https://ik.imagekit.io/tvlk/image/imageResource/2024/04/08/1712538838198-31acb0facca997e95f2ba31fe2a0a191.png?tr=q-75,w-247" alt="" />
  </div>
 
</Carousel>
    </div>
  );
}

export default MainSlide ;