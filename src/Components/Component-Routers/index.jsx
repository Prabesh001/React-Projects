import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inventory from '../Inventory'
import StarRating from '../Star-Rating'
import AnimeApi from '../AnimeApi'
import GeneratePassword from '../GenerateRandomPassword'
import RandomColor from '../Random-Color'
import Accordian from '../Accordian'
import Dictionary from '../Dictionary'
import Layout from '../Layout'

function RouteIndex() {
  return (
    <>
      <Router>
        <div className="routing"style={{display: "flex"}}>
          <span style={{margin: "10px"}}>
            <Link to="/Star-Rating">Star Rating</Link>
          </span>
          <span style={{margin: "10px"}}>
            <Link to="/Generate-Password">Generate Password</Link>
          </span>
          <span style={{margin: "10px"}}>
            <Link to="/Random-Color">Random Color</Link>
          </span>
          <span style={{margin: "10px"}}>
            <Link to="/Inventory">Inventory</Link>
          </span>
          <span style={{margin: "10px"}}>
            <Link to="/Anime-Api">My Anime</Link>
          </span>
          <span style={{margin: "10px"}}>
            <Link to="/Accordian">Accordian</Link>
          </span>
          <span style={{margin: "10px"}}>
            <Link to="/Dictionary">Dictionary</Link>
          </span>
          <span style={{margin: "10px"}}>
            <Link to="/Layout">Layout</Link>
          </span>
        </div>

        <Routes>
          <Route path="/Star-Rating" element={<StarRating noOfStars={10}/>} />
          <Route path="/Anime-Api" element={<AnimeApi />} />
          <Route path="/Generate-Password" element={<GeneratePassword />} />
          <Route path="/Random-Color" element={<RandomColor />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Accordian" element={<Accordian />} />
          <Route path="/Dictionary" element={<Dictionary />} />
          <Route path="/Layout" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}
export default RouteIndex;
