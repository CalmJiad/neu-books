import threeDBob from "../assets/Boyreadingbooks.png";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import BlueButton from "./ui/BlueButton";

export default function Heroarea() {
  return (
    <>
      <div className="text-center py-28">
        <h1 className="text-5xl font-extrabold tracking-wide leading-[4rem] bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent drop-shadow-[0_0_1px_rgba(255,0,128,0.7)]">
          Redefining the way you manage, borrow, <br /> experience books in the
          modern world.
        </h1>
        <h3 className="text-xl py-16 tracking-wide text-gray-300">
          With
          <span
            className="relative inline-block font-extrabold italic text-3xl bg-gradient-to-r from-blue-400 via-violet-500 to-rose-500 bg-clip-text text-transparent rounded-b-2xl
        transform -rotate-0.7 pl-2"
          >
            NeuBooks
            <svg
              className="absolute left-0 -bottom-3 w-full h-3"
              viewBox="45 0 55 55"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 5 Q50 12 100 5"
                stroke="url(#gradient)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          , keeping track of your library is simple, stylish, and stress-free.
          So you can focus on what matters.
        </h3>
      </div>
      <div className="h-screen flex items-center justify-center text-white">
        <div className="h-full w-7/12 items-center place-items-center">
          <div className="flex flex-col items-center justify-center h-full pl-28">
            <AnimatedTestimonials
              testimonials={[
                {
                  name: "Alice Johnson",
                  quote:
                    "NeuBooks made managing my library effortless and fun!",
                  designation: "Student",
                  src: threeDBob,
                },
                {
                  name: "Bob Smith",
                  quote:
                    "Borrowing books has never been easier. Highly recommended!",
                  designation: "Teacher",
                  src: threeDBob,
                },
              ]}
            />
            <BlueButton btnname="View All Books" />
          </div>
        </div>
        <div className="w-5/12 h-full flex items-center justify-end">
          <img
            src={threeDBob}
            alt="3D Books"
            className="max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </>
  );
}
