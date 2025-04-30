import cricket from '../assets/bat balll.svg';
import football from '../assets/football.png';
import badminton from '../assets/batminton.png';
import Treadmill from '../assets/treadmill.svg';
import Walking from '../assets/Walking Pad.jpg';
import Exercise from '../assets/Exercise Cycle.jpg';
import Dumbbells from '../assets/dumbbell.svg';
import Basketball from '../assets/Basketball.png';
import { Fade } from "react-awesome-reveal";

const sportsItems = [
  { name: "Cricket", img: cricket },
  { name: "Football", img: football },
  { name: "Badminton", img: badminton },
  { name: "Treadmill", img: Treadmill },
  { name: "Walking Pad", img: Walking },
  { name: "Exercise Cycle", img: Exercise },
  { name: "Dumbbells", img: Dumbbells },
  { name: "Basketball", img: Basketball },
];

const SportsCategory = () => {
  return (
    <section className="w-11/12 mx-auto my-20">
      <Fade direction="up" triggerOnce>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-[#273248] mb-4">
            Explore Our Sports Categories
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-600 text-sm md:text-base">
            Whether you're training for performance or just starting your fitness journey, discover top-quality gear across multiple sports categories designed for every athlete.
          </p>
        </div>
      </Fade>

      <Fade cascade damping={0.15} direction="up" triggerOnce>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {sportsItems.map(({ name, img }) => (
            <div
              key={name}
              className="bg-white dark:bg-slate-200 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={img}
                alt={name}
                className="w-24 h-24 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default SportsCategory;
