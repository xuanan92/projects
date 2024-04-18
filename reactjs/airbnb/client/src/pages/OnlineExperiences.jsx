import Avagroup from "../components/Header/Avagroup";
import Logo from "../components/Logo";

const OnlineExperiences = () => {
  return (
    <div>
      <div className="flex justify-between py-2 px-32">
        <Logo />
        <Avagroup />
      </div>
      <hr />
      <div>
        <h3>New this week</h3>
        <div>
          <img src="" alt="" />
          <p>Collection</p>
          <h5>Most popular arround the world</h5>
          <button>Show all</button>
        </div>
        <div>
          <img src="" alt="" />
          <p>Collection</p>
          <h5>Easy for itinerary planning</h5>
          <button>Show all</button>
        </div>
        <div>
          <img src="" alt="" />
          <p>Collection</p>
          <h5>Great for team building</h5>
          <button>Show all</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineExperiences;
