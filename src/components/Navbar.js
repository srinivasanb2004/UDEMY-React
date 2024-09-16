

function Navbar() {
    return (
  
      <div className="navbar">
  
        <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
        </div>
  
        <div className="navbar__s2">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search here for courses...Tech,Science,Business..."></input>
        </div>
  
        <div className="navbar__s3">
  
          <p>Courses</p>
  
          <div className="mylearning">
  
            <p>My Learning</p>
  
            <div className="mylearning__popup">
              <p>You did not purchased anything yet!</p>
            </div>
  
          </div>
  
          <i className="fa-solid fa-cart-shopping" style={{ color: "#04010e;" }}></i>
          <i className="fa-solid fa-bell" style={{ color: "#010813;" }}></i>
          <i className="fa-solid fa-user" style={{ color: "#000714;" }}></i>
          
        </div>
  
        <div className="navbar__s4">
          <i className="fa-solid fa-bars"></i>
        </div>
  
      </div>
  
    )
  }

  export default Navbar