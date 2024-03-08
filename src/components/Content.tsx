import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";

const sponsorsImg = [databiz, audiophile, meet, maker];

const Content = () => {
  return (
    <section className="font-default text-default grid grid-cols-1 md:grid-cols-2  grid-rows-[1fr_auto] md:grid-rows-1 md:py-6 lg:px-24">
      <div className="grid px-1 md:px-4 lg:px-12 row-start-2 md:row-start-1 row-end-3 md:row-end-1 gap-4 md:gap-0 mt-8 md:mt-0">
        <h1 className="text-3xl md:text-7xl font-bold mt-auto text-center md:text-left">
          Make <span className="md:block">remote work</span>
        </h1>

        <p className="my-auto w-3/4 text-mediumGray text-center md:text-left mx-auto md:mx-0 text-base md:text-default">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className="place-self-start mx-auto md:mx-0 px-3 md:px-6 py-2 md:py-3 bg-almostBlack font-medium text-almostWhite rounded-2xl hover:bg-almostWhite hover:text-almostBlack border-2 border-almostBlack transition-all">
          Learn more
        </button>

        <div className="flex items-center justify-between mt-4 md:mt-0">
          {sponsorsImg.map((item, i) => (
            <img key={i} src={item} alt={item} />
          ))}
        </div>
      </div>

      <picture className="flex md:justify-center">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="hero image"
          className="w-full h-[250px] md:h-auto md:max-w-[450px] "
        />
      </picture>
    </section>
  );
};

export default Content;
