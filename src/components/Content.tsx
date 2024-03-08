import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";

const sponsorsImg = [databiz, audiophile, meet, maker];

const Content = () => {
  return (
    <section className="font-default text-default grid grid-cols-2 grid-rows-1 py-6 px-24">
      <div className="grid px-12">
        <h1 className=" text-7xl font-bold mt-auto">
          Make <span className="block">remote work</span>
        </h1>
        <p className="my-auto w-3/4 text-mediumGray">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="place-self-start px-6 py-3 bg-almostBlack font-medium text-almostWhite rounded-2xl hover:bg-almostWhite hover:text-almostBlack border-2 border-almostBlack transition-all">
          Learn more
        </button>
        <div className="flex items-center justify-between">
          {sponsorsImg.map((item, i) => (
            <img key={i} src={item} alt={item} />
          ))}
        </div>
      </div>
      <picture className="flex justify-center">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="hero image"
          className="w-full h-auto max-w-[400px]"
        />
      </picture>
    </section>
  );
};

export default Content;
