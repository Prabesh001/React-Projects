import './App.css'
import Accordian from './Components/Accordian'
import RandomColor from './Components/Random-Color'
import StarRating from './Components/Star-Rating'
import ImageSlider from './Components/Image-Slider'
import Dictionary from './Components/Dictionary'
import AnimeApi from './Components/AnimeApi'
import Layout from './Components/Layout'
import GenerateRandomPassword from './Components/GenerateRandomPassword'
import Inventory from './Components/Inventory'

function App() {

  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={5}/>
      { <ImageSlider 
        url={"https://api.jikan.moe/v4/anime?q="}
        page={"1"}
        limit={"10"}
      /> }
      <Dictionary />
      <AnimeApi />
      <Layout />
      <GenerateRandomPassword />
      <Inventory />
    </>
  )
}

export default App
