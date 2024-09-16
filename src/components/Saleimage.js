//Importing images
import sale from "../assets/images/sale image.jpg"

function Saleimage() {

    return(

        <div class="sale-image">
            <img src={sale} alt="sale"></img>
            <div class="sale-image__offer">
                <h2>Udemy flash sale! 24 hours to save.</h2>
                <p>Get top courses for just 499. Just one day to save but lifetime access to learn.</p>
            </div>
        </div>
    )
}

export default Saleimage 