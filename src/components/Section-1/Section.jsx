import intro from "../../assets/illustration-intro.png";
import cury from "../../assets/bg-curvy-desktop.svg";
export const Section1 = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="container-image">
          <img src={intro} alt="" />
        </div>
        <div className="container-info">
          <h2>
            All your files in one secure location
            <br /> accessible anywhere.
          </h2>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      
      
        <img src={cury} alt=""className="curvy" />
      
    </div>
  );
};
