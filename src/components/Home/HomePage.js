import homepage from "../../assets/video-homepage.mp4";
const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={homepage} type="video/mp4" />
      </video>
    </div>
  );
};
export default HomePage;
