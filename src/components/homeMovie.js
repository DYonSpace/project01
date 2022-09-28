
function HomeMovie() {

  return (
    <div className="homeMovie">
      <video muted autoPlay loop>
        <source src="http://127.0.0.1:8898/video/sky.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeMovie;