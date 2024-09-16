//Importing images
import python from "../assets/images/python.jpg"
import data from "../assets/images/data.jpg"
import java from "../assets/images/java.jpg"
import eh from "../assets/images/eh.jpg"


function Recommended(){

    return(

        <div class="recommended">

        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the course for you</p>

        <div class="recommended__container">

            <div class="course-card">
                <img src={python} alt="one"></img>
                <h3>Python Data Visualization Masterclass 2024</h3>
                <p>Col Steel </p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>999 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={data} alt="one"></img>
                <h3>Data Science Masterclass 2024</h3>
                <p>Col Steel </p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>699 <del>1399</del></p>
            </div>

            <div class="course-card">
                <img src={java} alt="one"></img>
                <h3>JAVA PROGRAMMING 2024</h3>
                <p>Col Steel </p>
                <p>3.9 ⭐⭐⭐</p>
                <p>599 <del>999</del></p>
            </div>

            <div class="course-card">
                <img src={eh} alt="one"></img>
                <h3>Ethical Hacking for Beginner </h3>
                <p>Col Steel </p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>999 <del>1999</del></p>
            </div>

        </div>

    </div>
    )
}

export default Recommended