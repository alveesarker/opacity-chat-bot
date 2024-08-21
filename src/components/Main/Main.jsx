import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import img2 from "../../assets/opacity.jpg";
import img3 from "../../assets/HOvVhE7.png";
import img4 from "../../assets/user icons.png";
import img5 from "../../assets/send.png";
import Loading from "../Loading/Loading";
import Cards from "../Cards/Cards";
import CardOne from "../CardOne/CardOne";
import CardTwo from "../CardTwo/CardTwo";

const Main = ({ setDisplayMenu }) => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <img
          className="menu2"
          src={assets.menu_icon}
          style={{ backgroundColor: "transparent" }}
          alt=""
          onClick={() => setDisplayMenu(true)}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p
            className="opacity-link"
            style={{ fontSize: "13px", color: "black" }}
          >
            Please{" "}
            <a
              href="https://opacitycreatives.com/"
              target="_black"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "black",
              }}
            >
              click here
            </a>{" "}
            to learn more about{" "}
            <a
              href="https://opacitycreatives.com/"
              target="_black"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "black",
              }}
            >
              Opacity Creatives
            </a>
          </p>
          <img className="opacity-logo" src={img2} alt="" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello!</span>
              </p>
              <p>
                <span>How can I help you?</span>
              </p>

              <p style={{ fontSize: "14px" }}>
                OC Chat AI, brought to you by Opacity Creatives. it's your
                personal assistant in the digital world. It's a smart chatting
                app that helps you do things better and faster. Whether it's
                organizing stuff, setting up meetings, or just chatting, OC Chat
                AI makes it all super easy. Say hello to smoother communication
                and getting things done hassle-free!
              </p>
            </div>
            <div className="cards">
              <Cards setInput={setInput} />
              <CardOne />
              <CardTwo setInput={setInput} />
              <CardTwo />
              <Cards />
              <CardOne />
              <CardTwo />
              <Cards />
              <CardOne />
              <CardTwo />
              <Cards />
              <CardOne />
              <CardTwo />
              <CardOne />
              <CardOne />
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={img4} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={img3} alt="" />
              {loading ? (
                <Loading />
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="What is in your mind?..."
            />
            <div>
              {input ? (
                <img onClick={() => onSent()} src={img5} alt="" />
              ) : (
                <img src={img5} style={{ filter: "grayscale(100%)" }} alt="" />
              )}
            </div>
          </div>
          <p className="bottom-info">
            OC chat AI may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
