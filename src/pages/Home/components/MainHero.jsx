import HeroMain from "../../../assets/img/HomeSlider.png";

function MainHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroMain}
        alt="Hero Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />


    </section>
  );
}

export default MainHero;