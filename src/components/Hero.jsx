import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { styles } from "../styles";
import YourImage from "../assets/fyppic.jpg"; // Import your image

const dadJokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a fake noodle? An impasta!",
  "Why did the scarecrow win an award? He was outstanding in his field!",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "Why do people with abs are rude? kyunk unmei tummies naam ki cheez nhi hoti.",
  "What do you call a can opener that doesn't work? A can't opener!",
];

const Hero = () => {
  const [joke, setJoke] = useState("");
  const [availableJokes, setAvailableJokes] = useState([...dadJokes]);
  const jokeCountRef = useRef(0);

  const generateJoke = () => {
    if (availableJokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableJokes.length);
      const randomJoke = availableJokes[randomIndex];
      setJoke(randomJoke);
      setAvailableJokes(availableJokes.filter((_, index) => index !== randomIndex));
      jokeCountRef.current += 1;
    } else {
      setJoke(`That's all folks! You've heard ${jokeCountRef.current} dad jokes. Time to go outside and touch some grass!`);
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content wrapper */}
        <div className="flex flex-col items-center justify-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`${styles.heroHeadText} text-white mb-4`}>
              Hi, I'm <span className="text-[#E8D5C4]">Abubakar</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100`}>
              I train neural networks like Goku trains for the next Saiyan battle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="w-56 h-56 mx-auto perspective">
              <motion.div
                className="w-full h-full transition-transform duration-700 preserve-3d cursor-pointer"
                whileHover={{ rotateY: 180 }}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={YourImage}
                    alt="Abubakar"
                    className="w-full h-full object-cover rounded-full border-4 border-[#E8D5C4]"
                  />
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#E8D5C4] rounded-full flex items-center justify-center">
                  <p className="text-[#301D24] text-lg font-bold text-center px-4">
                    hehe, want my instagram?
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <button
              onClick={generateJoke}
              className="bg-[#E8D5C4] text-[#301D24] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#d8c5b4] transition-colors duration-300 mb-6"
            >
              {availableJokes.length > 0 ? "Generate Dad Joke" : "No more jokes!"}
            </button>
            <div className="h-24 flex items-center justify-center">
              {joke && (
                <motion.p
                  key={joke} // Add this line
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-xl max-w-md"
                >
                  {joke}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll animation */}
      <div className="absolute bottom-10 right-8">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
