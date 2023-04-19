import React from "react";
import "./../styles/animation.css";

function Telephone() {
  const [isCalling, setIsCalling] = React.useState(false);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsCalling(true);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsCalling(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <section className="relative w-screen h-screen">
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Contact%20Us%20by%20%5Bi-smokestack%5D.png"
        alt=""
        className="object-cover h-full m-auto"
      />
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Telephone%20Bottom%20by%20%5Bi-smokestack%5D.png"
        alt=""
        className="absolute z-10 -translate-x-1/2 w-72 bottom-12 left-1/2"
      />
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/Files%20for%20Developer/Contact%20us%20Page/Web/Ringing%20Slide/2.%20Reciever%20by%20%5Bi-smokestack%5D.png"
        alt=""
        className={`absolute -ml-58 w-108 bottom-36 left-1/2 ${
          isCalling ? "vibrate_receiver" : ""
        }`}
      />
    </section>
  );
}

export default Telephone;
