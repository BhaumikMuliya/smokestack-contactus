import React from "react";
import "./../styles/animation.css";

function Telephone() {
  const [isCalling, setIsCalling] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsCalling(true);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsCalling(false);
      setShowHint(false);
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
        className="fixed z-0 object-cover h-full m-auto -translate-x-1/2 left-1/2"
      />
      {showHint ? (
        <img
          src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Spotlight%20by%20%5Bi-smokestack%5D.png"
          alt=""
          className="fixed z-10 object-cover h-full m-auto -translate-x-1/2 left-1/2"
        />
      ) : null}
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Telephone%20Bottom%20by%20%5Bi-smokestack%5D.png"
        alt=""
        className="absolute z-10 -translate-x-1/2 w-72 bottom-12 left-1/2"
      />
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/Files%20for%20Developer/Contact%20us%20Page/Web/Ringing%20Slide/2.%20Reciever%20by%20%5Bi-smokestack%5D.png"
        alt=""
        className={`absolute -ml-58 w-108 bottom-36 left-1/2 z-10 ${
          isCalling ? "vibrate_receiver" : ""
        }`}
      />
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Disclaimer%20by%20%5Bi-smokestack%5D.png"
        alt=""
        className={`absolute w-12 ml-56 left-1/2 top-106 z-20 ${
          isCalling ? "disclaimer" : "hidden"
        }`}
        onClick={() => setShowHint(true)}
      />
      <div className="absolute z-0 text-center -translate-x-1/2 bottom-106 left-1/2 font-yfs">
        <p
          className={`pl-10 text-60 rotate-6 ${
            isCalling ? "xl_text" : "hidden"
          }`}
        >
          Tring..
        </p>
        <p
          className={`pr-5 text-50 -rotate-3 ${
            isCalling ? "lg_text" : "hidden"
          }`}
        >
          Tring..
        </p>
        <p className={`pl-10 text-40 ${isCalling ? "md_text" : "hidden"}`}>
          Tring..
        </p>
        <p
          className={`pr-5 text-30 -rotate-3 ${
            isCalling ? "sm_text" : "hidden"
          }`}
        >
          Tring..
        </p>
      </div>
    </section>
  );
}

export default Telephone;
