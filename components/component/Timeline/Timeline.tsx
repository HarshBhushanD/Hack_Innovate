import "./styles.css";
import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Timeline = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);

  const pinnedref = useRef(null); // pinned
  const stickyHeaderref = useRef(null); // sticky-header
  const progressBarContainerref = useRef(null); // progress-bar
  const progressBarref = useRef(null); // progress
  const indicesref = useRef(null); // index
  const indicesContainerref = useRef(null); // indices
  const [isProgressBarVisible, setisProgressBarVisible] = useState(false);
  const [currentActiveIndex, setcurrentActiveIndex] = useState(-1);

  useGSAP(() => {
    if (!pinnedref.current) return;

    // Fix: Get an array of card elements from the ref
    const cards = gsap.utils.toArray(".card") as HTMLElement[];
    const indices = gsap.utils.toArray(".index") as HTMLElement[];
    const cardsCount = cards.length;
    const pinnedHeight = window.innerHeight * (cardsCount + 1);
    const startRotation = [0, 5, 0, -5];
    const endRotation = [-10, -5, 10, 5];
    const progressColor = ["#ecb74c", "#7dd8cd", "#e0ff57", "#7dd8cd"];

    // Now cards is an array so forEach will work
    cards.forEach((card, index) => {
      gsap.set(card, { rotation: startRotation[index] });
    });

    function animate(newIndex: number) {
      if (newIndex === currentActiveIndex) return;
      indices.forEach((index: HTMLElement, i: number) => {
        gsap.to(index, {
          opacity: i === newIndex ? 1 : 0.5,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });

      setcurrentActiveIndex(newIndex);
    }

    function showProgressAndIndices() {
      gsap.to([progressBarContainerref.current, indicesContainerref.current], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.Out",
      });

      setisProgressBarVisible(true);
    }

    function hideProgressAndIndices() {
      gsap.to([progressBarContainerref.current, indicesContainerref.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.Out",
      });

      setisProgressBarVisible(false);
      animate(-1);
    }

    ScrollTrigger.create({
      trigger: pinnedref.current,
      start: "top top",
      end: `+=${pinnedHeight}`,
      pin: true,
      scrub: 0.5,
      pinSpacing: true,
      onLeave: () => {
        hideProgressAndIndices();
      },
      onEnterBack: () => {
        showProgressAndIndices();
      },
      onUpdate: (self) => {
        const progress = self.progress * (cardsCount + 1);
        const currentCardIndex = Math.floor(progress);
        if (progress <= 1) {
          gsap.to(stickyHeaderref.current, {
            opacity: 1 - progress,
            duration: 0.1,
            ease: "power2.Out",
          });
        } else {
          gsap.set(stickyHeaderref.current, {
            opacity: 0,
          });
        }

        if (progress > 1 && !isProgressBarVisible) {
          showProgressAndIndices();
        } else if (progress < 1 && isProgressBarVisible) {
          hideProgressAndIndices();
        }

        let progressHeight = 0;
        let colorindex = -1;
        if (progress > 1) {
          progressHeight = ((progress - 1) / cardsCount) * 100;
          colorindex = Math.min(Math.floor(progress - 1), cardsCount - 1);
          animate(colorindex);
          gsap.to(progressBarref.current, {
            height: `${progressHeight}%`,
            backgroundColor: progressColor[colorindex],
            duration: 0.3,
            ease: "power2.Out",
          });
        }

        cards.forEach((card, index) => {
          if (index < currentCardIndex) {
            gsap.set(card, {
              top: "50%",
              rotation: endRotation[index],
            });
          } else if (index === currentCardIndex) {
            const progressInCard = progress - currentCardIndex;
            const newTop = gsap.utils.interpolate(150, 50, progressInCard);
            const newRotation = gsap.utils.interpolate(
              startRotation[index],
              endRotation[index],
              progressInCard
            );
            gsap.set(card, {
              top: `${newTop}%`,
              rotation: newRotation,
            });
          } else {
            gsap.set(card, {
              top: "150%",
              rotation: startRotation[index],
            });
          }
        });
      },
    });
  });

  return (
    <div ref={pinnedref} className="pinned">
      <div ref={stickyHeaderref} className="sticky-header">
        <h1>ROADMAP.</h1>
      </div>
      <div ref={progressBarContainerref} className="progress-bar">
        <div ref={progressBarref} className="progress"></div>
      </div>

      <div ref={indicesContainerref} className="indices">
        <div ref={indicesref} className="index" id="index-1">
          <p>10th September</p>
          <p>Quiz Round</p>
          <p>Initial screening of all registered participants.</p>
        </div>
        <div className="index" id="index-2">
          <p>11th September</p>
          <p>Problem Statement Release</p>
          <p>Teams receive the official challenge to begin ideation.</p>
        </div>
        <div className="index" id="index-3">
          <p>12th September</p>
          <p>09:00 AM – 10:30 AM</p>
          <p>On-Site Registration</p>
        </div>
        <div className="index" id="index-4">
          <p>12th September</p>
          <p>10:30 AM – 11:30 AM</p>
          <p>Inauguration Ceremony</p>
        </div>
        <div className="index" id="index-5">
          <p>12th September</p>
          <p>04:00 PM – 05:30 PM</p>
          <p>Elimination Round – First checkpoint evaluation</p>
        </div>
        <div className="index" id="index-6">
          <p>12th September</p>
          <p>07:30 PM – 09:00 PM</p>
          <p>Mentorship Sessions – Guidance from experts and industry professionals</p>
        </div>
        <div className="index" id="index-7">
          <p>12th September</p>
          <p>11:00 PM – 12:00 AM</p>
          <p>Tech Quiz – A fun and competitive tech knowledge showdown</p>
        </div>
        <div className="index" id="index-8">
          <p>13th September</p>
          <p>02:00 AM – 04:00 AM</p>
          <p>Mini Games & Midnight Refreshments</p>
        </div>
        <div className="index" id="index-9">
          <p>13th September</p>
          <p>04:00 AM – 08:00 AM</p>
          <p>Final Sprint – Last stretch to polish and finalize the project</p>
        </div>
        <div className="index" id="index-10">
          <p>13th September</p>
          <p>10:00 AM – 12:00 PM</p>
          <p>Final Presentations & Closing Ceremony</p>
        </div>
      </div>

      <div className="card" id="card-1" style={{ transform: 'translate(-50%, -50%) rotate(10deg)' }}>
        <div className="card-phase">
          <p>Phase #01</p>
        </div>
        <div className="card-title">
          <p>10th September</p>
          <h1>
            Quiz <span>Round</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>01</h1>
        </div>
      </div>

      <div className="card" id="card-2" style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}>
        <div className="card-phase">
          <p>Phase #02</p>
        </div>
        <div className="card-title">
          <p>11th September</p>
          <h1>
            Problem <span>Statement Release</span>
          </h1>
        </div>
        <div className="card-bg">
          <h1>02</h1>
        </div>
      </div>

      <div className="card" id="card-3" style={{ transform: 'translate(-50%, -50%) rotate(-10deg)' }}>
        <div className="card-phase">
          <p>Phase #03</p>
        </div>
        <div className="card-title">
          <p>12th September</p>
          <h1>
            On-Site <span>Registration</span>
          </h1>
          <p>09:00 AM – 10:30 AM</p>
        </div>
        <div className="card-bg">
          <h1>03</h1>
        </div>
      </div>

      <div className="card" id="card-4" style={{ transform: 'translate(-50%, -50%) rotate(10deg)' }}>
        <div className="card-phase">
          <p>Phase #04</p>
        </div>
        <div className="card-title">
          <p>12th September</p>
          <h1>
            Inauguration <span>Ceremony</span>
          </h1>
          <p>10:30 AM – 11:30 AM</p>
        </div>
        <div className="card-bg">
          <h1>04</h1>
        </div>
      </div>

      <div className="card" id="card-5" style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}>
        <div className="card-phase">
          <p>Phase #05</p>
        </div>
        <div className="card-title">
          <p>12th September</p>
          <h1>
            Elimination <span>Round</span>
          </h1>
          <p>04:00 PM – 05:30 PM</p>
        </div>
        <div className="card-bg">
          <h1>05</h1>
        </div>
      </div>

      <div className="card" id="card-6" style={{ transform: 'translate(-50%, -50%) rotate(-10deg)' }}>
        <div className="card-phase">
          <p>Phase #06</p>
        </div>
        <div className="card-title">
          <p>12th September</p>
          <h1>
            Mentorship <span>Sessions</span>
          </h1>
          <p>07:30 PM – 09:00 PM</p>
        </div>
        <div className="card-bg">
          <h1>06</h1>
        </div>
      </div>

      <div className="card" id="card-7" style={{ transform: 'translate(-50%, -50%) rotate(10deg)' }}>
        <div className="card-phase">
          <p>Phase #07</p>
        </div>
        <div className="card-title">
          <p>12th September</p>
          <h1>
            Tech <span>Quiz</span>
          </h1>
          <p>11:00 PM – 12:00 AM</p>
        </div>
        <div className="card-bg">
          <h1>07</h1>
        </div>
      </div>

      <div className="card" id="card-8" style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}>
        <div className="card-phase">
          <p>Phase #08</p>
        </div>
        <div className="card-title">
          <p>13th September</p>
          <h1>
            Mini Games & <span>Midnight Refreshments</span>
          </h1>
          <p>02:00 AM – 04:00 AM</p>
        </div>
        <div className="card-bg">
          <h1>08</h1>
        </div>
      </div>

      <div className="card" id="card-9" style={{ transform: 'translate(-50%, -50%) rotate(-10deg)' }}>
        <div className="card-phase">
          <p>Phase #09</p>
        </div>
        <div className="card-title">
          <p>13th September</p>
          <h1>
            Final <span>Sprint</span>
          </h1>
          <p>04:00 AM – 08:00 AM</p>
        </div>
        <div className="card-bg">
          <h1>09</h1>
        </div>
      </div>

      <div className="card" id="card-10" style={{ transform: 'translate(-50%, -50%) rotate(10deg)' }}>
        <div className="card-phase">
          <p>Phase #10</p>
        </div>
        <div className="card-title">
          <p>13th September</p>
          <h1>
            Final Presentations & <span>Closing Ceremony</span>
          </h1>
          <p>10:00 AM – 12:00 PM</p>
        </div>
        <div className="card-bg">
          <h1>10</h1>
        </div>
      </div>
    </div>
  );
};