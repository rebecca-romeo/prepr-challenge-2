import Splash_1 from '../assets/Splash_1.png'
const Carousel = () => {
  return (
    <div className='carouselContainer'>
      <div>
        <i class="bi bi-chevron-left"></i>
        <img src={Splash_1} alt="" className='carouselImg' />
        <i class="bi bi-chevron-right"></i>
      </div>

      <div className='dots'>
        <i class="bi bi-dot"></i>
        <i class="bi bi-dot"></i>
        <i class="bi bi-dot"></i>
      </div>
    </div>





  )
}

export default Carousel;