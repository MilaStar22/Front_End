import { useEffect } from "react";
import MainSlider from "../layout/MainSlider";

function HomePage () {
  useEffect( () => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      <MainSlider />
    </div>
  )
}

export default HomePage;