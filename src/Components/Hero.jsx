
const Hero = () => {
  return (
    <main className="hero container">

      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
        <div className="hero-btn">

        <button className="btn-one">Shop Now</button>

        <button className="btn-two">Category</button>

        </div>

        <div className="hero-shop">
          <p>Also Availabel On</p>

          <div className="brand-icons">
          <img id='logos' src="/images/amazon.png" alt="" />
          <img id="logos" src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  )

}

export default Hero;