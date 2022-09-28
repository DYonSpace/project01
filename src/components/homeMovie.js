import bgVideo from "../video/sky.mp4";


function HomeMovie() {


  return (
    <div className="homeMovie">
      <video muted autoPlay loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeMovie;