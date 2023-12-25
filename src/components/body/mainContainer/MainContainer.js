import ButtonList from "./buttonList/ButtonList";
import VideoContainer from "./videoContainer/VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
