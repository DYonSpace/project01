
function BackMovie() {


  return (
    <div className="backMovie">
      <video muted autoPlay loop>
        <source src="http://127.0.0.1:8898/video/sky.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default BackMovie;