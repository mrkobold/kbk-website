import { NavLink } from "react-router-dom";
import "../App.css"


const LandingPage = () => {
    const processContactClick = () => {

        console.log("clicked");
    }

    return (
        <div className="body">
            <div className="text-wrapper">
                <div className="smart">"was ist nicht gut, ist schlecht"</div>
                We believe that high quality solutions and short time notices aren’t mutually exclusive. Let’s keep it simple.
            </div>
            <div name="button-div">
                <NavLink to="/contact">
                    <button className="contact-button" onClick={processContactClick}>Contact us</button>
                </NavLink>
            </div>
        </div>
    );
}
export default LandingPage;