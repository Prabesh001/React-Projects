import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inventory from "./Components/Inventory";
import StarRating from "./Components/Star-Rating";
import AnimeApi from "./Components/AnimeApi";
import GeneratePassword from "./Components/GenerateRandomPassword";
import RandomColor from "./Components/Random-Color";
import Accordian from "./Components/Accordian";
import Dictionary from "./Components/Dictionary";
// import ImageSlider from "./Components/Image-Slider";
import Pdf from "./Components/Pdf";
import ToDoList from "./Components/To-Do-List";

function App() {
  return (
    <Router>
      <div className="routing" style={{ display: "flex", flexWrap: "wrap" }}>
        {[
          { path: "/React-Projects/Star-Rating", label: "Star Rating" },
          { path: "/React-Projects/Generate-Password", label: "Generate Password" },
          { path: "/React-Projects/Random-Color", label: "Random Color" },
          { path: "/React-Projects/Inventory", label: "Inventory" },
          { path: "/React-Projects/Anime-Api", label: "My Anime" },
          { path: "/React-Projects/Accordian", label: "Accordian" },
          { path: "/React-Projects/Dictionary", label: "Dictionary" },
          { path: "/React-Projects/ToDoList", label: "To-Do-List" },
          // { path: "/React-Projects/Image-Slider", label: "Image Slider" },
        ].map((link) => (
          <span key={link.path} style={{ margin: "10px" }}>
            <Link to={link.path}>{link.label}</Link>
          </span>
        ))}
      </div>

      <Routes>
        <Route path="/React-Projects/Star-Rating" element={<StarRating noOfStars={10} />} />
        <Route path="/React-Projects/Anime-Api" element={<AnimeApi />} />
        <Route path="/React-Projects/Generate-Password" element={<GeneratePassword />} />
        <Route path="/React-Projects/Random-Color" element={<RandomColor />} />
        <Route path="/React-Projects/Inventory" element={<Inventory />} />
        <Route path="/React-Projects/Accordian" element={<Accordian />} />
        <Route path="/React-Projects/Dictionary" element={<Dictionary />} />
        <Route path="/React-Projects/ToDoList" element={<ToDoList />} />
        <Route path="/React-Projects/Pdf" element={<Pdf />} />
      </Routes>
    </Router>
  );
}

export default App;
