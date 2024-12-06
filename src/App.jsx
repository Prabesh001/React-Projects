import "./App.css";
// import Accordian from './Components/Accordian'
// import RandomColor from './Components/Random-Color'
// import StarRating from './Components/Star-Rating'
// import ImageSlider from './Components/Image-Slider'
// import Dictionary from './Components/Dictionary'
// import AnimeApi from './Components/AnimeApi'
// import Layout from './Components/Layout'
// import GenerateRandomPassword from './Components/GenerateRandomPassword/gpt'
// import Inventory from "./Components/Inventory";
import RouteIndex from './Components/Component-Routers';

function App() {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={5}/>
      <Dictionary />
      <AnimeApi />
      <Layout /> */}
      {/* <GenerateRandomPassword /> */}
      {/* <Inventory /> */}
      {/* { <ImageSlider 
        url={"https://api.unsplash.com/photos"}
        page={"1"}
        limit={"10"}
      /> } */}
      <RouteIndex />
    </>
  );
}

export default App;
