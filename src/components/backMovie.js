import bgVideo from "../video/sky.mp4";


function BackMovie() {


  return (
    <div className="backMovie">
      <video muted autoPlay loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackMovie;