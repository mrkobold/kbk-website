import LandingPage from './pages/LandingPage';

const App = () => {

  const processContactClick = () => {
    console.log("clicked");
  }

  return (
    <div className="page">
      <div className="header">
        <div className="logo">
          <div className="logo-kbk">KBK</div>
          <div className="logo-softare-solutions">software solutions</div>
        </div>
        <div className="menu">
          <div className="menu-button"><p>Home</p></div>
          <div className="menu-button"><p>Portfolio</p></div>
          <div className="menu-button"><p>Contact</p></div>
        </div>
      </div>
      <div className="body">
        <div className="text-wrapper">
          <div className="smart">
            "was ist nicht gut, ist schlecht"
        </div>
        We believe that high quality solutions and short time notices aren’t mutually exclusive. Let’s keep it simple.
        <div name="button-div">
            <button className="contact-button" onClick={processContactClick}>Contact us</button>
          </div>
        </div>
      </div>
      <div className="footer">
        © Copyright 2021 KBK Software Solutions
    </div>
    </div>
  );
}

export default App;