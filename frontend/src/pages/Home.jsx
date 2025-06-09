import videoHero from "../videos/video-hero.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../pages/Home.css";
import { useEffect } from "react";

const Home = () => {
  useGSAP(() => {
    window.scrollTo(0, 0); // ✅ Scroll to top forcefully on refresh
    function videoncomAnimation() {
      let videocon = document.querySelector(".app-video-container");
      let playbtn = document.querySelector(".app-video-container-play");
      videocon.addEventListener("mouseenter", () => {
        gsap.to(playbtn, {
          scale: 1,
          opacity: 1,
        });
      });
      videocon.addEventListener("mouseleave", () => {
        gsap.to(playbtn, {
          scale: 0,
          opacity: 0,
        });
      });

      // gsap.to(playbtn, { xPercent: -50, yPercent: -50 });

      let xTo = gsap.quickTo(playbtn, "x", {
          duration: 0.6,
          ease: "power3",
        }),
        yTo = gsap.quickTo(playbtn, "y", {
          duration: 0.6,
          ease: "power3",
        });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX - 50);
        yTo(e.clientY - 50);
      });
    }
    videoncomAnimation();

    function loadingAnimation() {
      gsap.from(".app-page1 h1", {
        y: 200,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(".app-video-container", {
        opacity: 0,
        delay: 0.9,
        duration: 0.8,
      });
    }
    loadingAnimation();

    document.addEventListener("mousemove", (e) => {
      gsap.to("#cursor", {
        left: e.x,
        top: e.y,
      });
    });
    document.querySelector(".app-page-5").addEventListener("mouseenter", () => {
      gsap.to("#cursor", {
        scale: 1,
      });
    });
    document.querySelector(".app-page-5").addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        scale: 0,
      });
    });
  });

  return (
    <>
      <div className="app-main  ">
        <div id="cursor"></div>
        <div className="app-page1">
          <h1>CHANGE </h1>
          <h1> THE COURSE</h1>

          <div className="app-video-container">
            <div className="app-video-container-play">PLAY</div>
            <video
              className="app-video-hero"
              src={videoHero}
              // autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className="app-page2">
          <h1>TAKE THE PLEDGE.</h1>
          <p className="app-page2-p1">
            Support and empower women experiencing domestic violence, every day
            of the year.
          </p>
          <p className="app-page2-p2">LEARN MORE TODAY.</p>
          <div className="app-page2-line">
            <p>BUY GOOD</p>
            <p>DO GOOD</p>
          </div>
        </div>

        <div className="app-page3">
          <div className="app-page3-elem1 relative ">
            <div className="app-page3-elem-btn elem-btn1 absolute  w-[60%]   flex justify-center items-center gap-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  ">
              <p>SHOP</p>
              <p>PANTRY</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="app-page3-elem2 relative">
            <div className="app-page3-elem-btn elem-btn2 absolute   w-[60%]   flex justify-center items-center gap-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  ">
              <p>SHOP</p>
              <p>PANTRY</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="app-page3-elem3 relative">
            <div className="app-page3-elem-btn elem-btn3 absolute   w-[60%]   flex justify-center items-center gap-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  ">
              <p>SHOP</p>
              <p>PANTRY</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="app-page-4 ">
          <div className="app-page-4-left">
            <h1>
              We believe in people, until they believe in themselves again.
            </h1>
          </div>
          <div className="app-page-4-right">
            <p>
              Everything we do is designed to rebuild self worth and
              independence, in order to break free from the cycle of
              disadvantage.
            </p>
            <p>
              With every purchase you make with us, you're helping to change the
              course of someone's life; you're walking alongside vulnerable
              women as they find their way home again.
            </p>
            <p>Shop to Support</p>
          </div>
        </div>

        <div className="app-page-5">
          <div className="child flex justify-center items-center" id="child1">
            <img
              className="h-[100%] object-cover scale-[01.1]"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/98a17ca570614f20c517689729350faf6afcfab6-5000x5000.png/63.png?w=1024&h=1024&auto=format"
              alt=""
            />
          </div>
          <div className="child flex justify-center items-center" id="child2">
            <img
              className="h-[100%] object-cover scale-[01.1]"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/4bb75d35e0a1dd486766939fc3a4971960327b08-5000x5000.png/3.png?w=1024&h=1024&auto=format"
              alt=""
            />
          </div>
          <div className="child flex justify-center items-center" id="child3">
            <img
              className="h-[100%] object-cover scale-[01.1]"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/3b2b544a85c69e257f9878c1d7a400090f615188-5000x5000.png/Hugs-Kisses-Pack-Two-Good-Co.png?w=1024&h=1024&auto=format"
              alt=""
            />
          </div>
          <div className="child flex justify-center items-center" id="child4">
            <img
              className="h-[100%] object-cover scale-[1.1]"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=1024&h=1024&auto=format"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

//!-----------------------------framer motion ka example hai
// import { motion } from "motion/react";

// const Home = () => {
//   return (
//     <div>
//       <motion.div
//         className="box flex justify-center text-xl font-[aeonik-bold] text-black items-center  mb-10 "
//         initial={{
//           x: 0,
//         }}
//         animate={{
//           x: 1000,
//           rotate: 360,
//         }}
//         whileHover={{
//           scale: 1.1,
//           transition: { duration: 0.2 },
//         }}
//         transition={{
//           duration: 2,
//           delay: 1,
//           repeat: 2,
//           ease: "anticipate",
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1748679979638-e02b2df71540?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="h-full object-cover"

//         />
//       </motion.div>

//       <motion.div
//         className="circle flex justify-center text-xl font-[aeonik-bold] text-black items-center  mb-10 "
//         animate={{
//           x: 400,
//           rotate: 360,
//         }}
//         whileHover={{
//           scale: 1.1,
//           transition: { duration: 0.2 },
//         }}
//         transition={{
//           duration: 3,
//         }}
//       >
//         hello from circle
//       </motion.div>

//       <motion.h1
//         className="px-10 font-semibold w-fit text-5xl font-[aeonik-regular]"
//         animate={{
//           x: 100,
//         }}
//         whileHover={{
//           scale: 1.1,
//           transition: { duration: 0.2 },
//         }}
//         transition={{
//           duration: 1,
//         }}
//       >
//         Hi How are u doin
//       </motion.h1>
//     </div>
//   );
// };

// export default Home;
