import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className=" w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            HI, I'm <span className="text-[#915eff]">Solo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop website with 3d effects i don't have any college degree
            but trust me with that when you see my work you will be surpised{" "}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full felx justify-center items-center">
        <a href="#about" className="w-full flex justify-center items-center">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secodary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
