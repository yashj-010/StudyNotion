// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
  return (
    <div>
      {/* NEW HERO SECTION - 50/50 SPLIT */}
      <div className="relative mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col lg:flex-row items-center justify-between gap-12 text-white">
        
        {/* Left Side: Text and CTAs */}
        <div className="flex flex-col items-start gap-6 lg:w-[50%]">
          <Link to={"/signup"}>
            <div className="group rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 shadow-[0_0px_20px_rgba(255,255,255,0.1)] transition-all duration-200 hover:scale-95">
              <div className="flex flex-row items-center gap-2 rounded-full px-6 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                <p>Start your journey today</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>
          
          <div className="text-left text-5xl font-bold leading-tight">
            Master the Art of
            <br />
            <HighlightText text={"Coding"} />
          </div>
          
          <div className="w-[90%] text-left text-lg text-richblack-300">
            Build the future with our industry-leading curriculum. Learn from real-world projects, connect with global mentors, and land your dream job faster.
          </div>
          
          <div className="mt-4 flex flex-row gap-4">
            <CTAButton active={true} linkto={"/signup"}>
              Start Learning Free
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
              View Curriculum
            </CTAButton>
          </div>
        </div>

        {/* Right Side: Floating Video */}
        <div className="lg:w-[50%] relative">
           <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200 to-caribbeangreen-400 opacity-30 blur-2xl rounded-full"></div>
           <video
            className="relative z-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-richblack-700 object-cover"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* REORDERED: INSTRUCTOR AND REVIEWS MOVED TO TOP */}
      <div className="relative mx-auto my-32 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h1 className="text-center text-4xl font-semibold mt-16">
          Loved by global learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 py-16">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern Edvitya is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* MOVED DOWN: CODE BLOCKS & EXPLORE */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white py-20">
        
        {/* Explore Section */}
        <ExploreMore />

        {/* Code Section 1  */}
        <div className="mt-20">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} />
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home