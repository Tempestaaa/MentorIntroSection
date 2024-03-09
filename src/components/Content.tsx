import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";

const sponsorsImg = [databiz, audiophile, meet, maker];

const Content = () => {
  return (
    <section className="flex items-center flex-col-reverse md:flex-row">
      <div className="h-full w-full md:w-1/2 flex flex-col items-center py-8 md:py-14 lg:py-20 px-2 md:px-8 lg:px-24">
        <div className="flex flex-col gap-4 lg:gap-8 flex-grow text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-almostBlack font-bold text">
            Make <span className="inline-block md:block">remote work</span>
          </h1>
          <p className="w-full md:w-[80%] text-sm lg:text-default">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="mx-auto md:mx-0 md:mr-auto py-1 md:py-2 px-4 md:px-6 text-base md:text-default bg-almostBlack border-2 border-almostBlack text-almostWhite font-bold rounded-xl hover:bg-almostWhite hover:text-almostBlack transition-all">
            Learn more
          </button>
        </div>
        <div className="flex items-start justify-between gap-4 lg:w-[80%] mr-auto mt-8">
          {sponsorsImg.map((item, i) => (
            <div key={i}>
              <img src={item} />
            </div>
          ))}
        </div>
      </div>
      <picture className="w-full lg:w-[400px] mx-auto">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="hero image"
          className="w-full md:w-[400px] mx-auto"
        />
      </picture>
    </section>
  );
};

export default Content;
