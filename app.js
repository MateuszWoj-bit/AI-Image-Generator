
const API_KEY = "";
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".images-section");

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);

const galleryItems = [
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
];

const getImages = async () => {
  console.log(inputElement.value);
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 1,
      size: "1024x1024",
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json();
    console.log(data);
    imageSection.innerHTML = "";
    const markup = galleryItems
      .map(
        (
          imageObject
        ) => `<div class="image-container"><a class="gallery__item" href=${imageObject.url}>
  <img class="gallery__image" src=${imageObject.url} alt="description}" />
</a></div>`
      )
      .join("");
    imageSection.insertAdjacentHTML("beforeend", markup);

    console.log("refresh");
    var lightbox = new SimpleLightbox(".gallery a", {
      captionDelay: 250,
      captionsData: "alt",
    });
  } catch (error) {
    console.error(error);
  }
};
submitIcon.addEventListener("click", getImages);
