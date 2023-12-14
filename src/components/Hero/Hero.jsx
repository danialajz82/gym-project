import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the twon</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body </span>
          </div>
          <div className="span">
            <span>
              ideal body in here we will help you to shape and build your ideal
              body and live up your life to fuilest
            </span>
          </div>
        </div>
        <div className="figuers">
          <div>
            <span>+140 </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joine</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>166 bmp</span>
        </div>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />


        <div className="calories">
            <img src={calories } alt="" />
            <div className="div-colores">
            <span>Calories Burned</span>
            <span>200 Kacl</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
