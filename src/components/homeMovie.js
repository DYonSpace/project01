
function HomeMovie() {

  return (
    <div className="homeMovie">
      <video muted autoPlay loop>
        <source src={process.env.PUBLIC_URL + '/video/sky.mp4'} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeMovie;