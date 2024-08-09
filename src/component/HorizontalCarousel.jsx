import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cards } from "../data.js/cards.js";
const HorizontalCarousel = () => {
  return (
    <div className=" bg-white flex flex-col py-20 lg:px-16 px-[15px]">
      <div className=" w-full h-full flex lg:flex-row flex-col justify-between items-center">
        <div className=" w-full justify-center px-8 lg:items-start items-center flex flex-col gap-5 py-10 lg:py-20">
          <h1 className="text-zinc-800 font-bold text-5xl">Our Gallery</h1>

          <h1 className=" text-zinc-400 font-medium text-sm lg:text-lg">
            Please choose your package
          </h1>

          <div className="h-[4px] w-16 bg-[#08c1b8]"></div>
        </div>

        <h1 className="text-lg lg:pb-0 pb-10 text-zinc-800">
          Nunc euismod ipsum vel metus rhoncus, a accumsan sapien mollis. Donec
          malesuada lacus rhoncus ipsum dignissim, sed fringilla orci faucibus.
          Proin non odio dui. Donec ut tristique dolor, at interdum sem. Quisque
          finibus viverra lectus vitae pulvinar.
        </h1>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex  h-[80vh] bg-webgreen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          //   backgroundPosition: "top",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute bottom-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
