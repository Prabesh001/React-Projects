import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Inventory from "./Components/Inventory";
import StarRating from "./Components/Star-Rating";
import AnimeApi from "./Components/AnimeApi";
import GeneratePassword from "./Components/GenerateRandomPassword";
import RandomColor from "./Components/Random-Color";
import Accordian from "./Components/Accordian";
import Dictionary from "./Components/Dictionary";
import ImageSlider from "./Components/Image-Slider";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="routing" style={{ display: "flex" }}>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Star-Rating">Star Rating</Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Generate-Password">
              Generate Password
            </Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Random-Color">Random Color</Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Inventory">Inventory</Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Anime-Api">My Anime</Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Accordian">Accordian</Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Dictionary">Dictionary</Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/React-Projects/Image-Slider">Image Slider</Link>
          </span>
        </div>

        <Routes>
          <Route
            path="/React-Projects/Star-Rating"
            element={<StarRating noOfStars={10} />}
          />
          <Route path="/React-Projects/Anime-Api" element={<AnimeApi />} />
          <Route
            path="/React-Projects/Generate-Password"
            element={<GeneratePassword />}
          />
          <Route
            path="/React-Projects/Random-Color"
            element={<RandomColor />}
          />
          <Route path="/React-Projects/Inventory" element={<Inventory />} />
          <Route path="/React-Projects/Accordian" element={<Accordian />} />
          <Route path="/React-Projects/Dictionary" element={<Dictionary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
