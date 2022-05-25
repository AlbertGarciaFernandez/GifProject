import React from "react";
import "./Home.scss";

export default function Home({ images }) {
  console.log("images", images);
  return (
    <div>
      <h1>home</h1>
      <h1>images</h1>

      <section>
        <ul className="">
          {images.map((image) => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div className="">
                    <image
                      width={image.width}
                      height={image.height}
                      src={image.image}
                      alt=""
                    />
                  </div>
                  <h3 className="">{image.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,

    {
      headers: {
        Autorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());
  console.log("heloooo");
  const { resources } = results;

  const images = resources.map((resource) => {
    const { width, height } = resource;

    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });

  return {
    props: {
      images,
    },
  };
}
