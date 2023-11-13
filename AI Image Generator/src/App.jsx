import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MySVGComponent from "./svg";


const API_KEY = "";

const GalleryItem = ({ preview, url, description }) => (
  <div className="image-container">
    <a className="gallery__item" href={url}>
      <img className="gallery__image" src={url} alt={description} />
    </a>
  </div>
);

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [galleryItems, setGalleryItems] = useState([
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
      url: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      url: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      url: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      url: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
  ]);

  const getImages = async () => {

  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <MySVGComponent></MySVGComponent>
      <header>
        <h1>AI Image Generator</h1>
      </header>

      <div className="gallery images-section">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
      <section className="bottom-section">
        <div className="input-container">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <div id="submit-icon" onClick={getImages}>
            ➢
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
