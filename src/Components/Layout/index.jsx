import { useState } from 'react';
import './styles.css'

function Layout(){
  const [searchItem, setSearchItem] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navComponents = ['Main Pages', 'Landing Page' , 'Blog', 'System']
  
  function handleSearchItem(event){
    setSearchItem(event.target.value);
  }
  
  return(
    <div className='container'>
      <nav>
        <div className="logo">MyWebsite</div>
        <ul>
          {
            navComponents.map((navEle, index)=>(
              <>
                <li key={index} onClick={()=>setSelectedIndex(index)}
                className={
                  selectedIndex === index ? 'active' : ''
                } 
                
                >{navEle} {
                  selectedIndex === index ? <hr/> : ''
                }</li>
              </>
            ))
          }
          
        </ul>
        <div className="search">
          <input placeholder='Search' type='text' value={searchItem} onChange={handleSearchItem}/>
          <div className='magnifying-glass'> 🔍</div>
        </div>
      </nav>

      <div className="box">
        <div>
          <b style={{fontSize: '1.9em'}}>Atomic Lite- Home</b>
        </div>
        <span className='intro'>I am atomic by Cid Kagenou. Or it may be atomic by oppenheimer. Or May be from Japan.</span>
        <button onClick={()=>setSelectedIndex((selectedIndex+1)%4)}>Call to Action</button>
        <span></span>
      </div>

      <footer>
        <div className="first-segment segment"><b>At a Glance</b></div>
        
        <div className="second-segment segment">
          <div>
            <b>3250 </b> <span>Active Clients</span> <hr />
          </div>
          <div className='footer-description'>
            Its just a random bullshit which i do not want to write so i am just typing randomly.
          </div>
        </div>

        <div className="third-segment segment">
          <div>
            <b>25 </b> <span>Years Experience</span> <hr />
          </div>
          <div className='footer-description'>
            Its just a random bullshit which i do not want to write so i am just typing randomly.
          </div>
        </div>

        <div className="forth-segment segment">
          <div>
            <b>70 </b> <span>Awards Won</span> <hr />
          </div>
          <div className='footer-description'>
              Its just a random bullshit which i do not want to write so i am just typing randomly.
          </div>
        </div>

      </footer>
    </div>
  );
}

export default Layout;