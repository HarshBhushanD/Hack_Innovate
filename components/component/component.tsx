"use client";
import Link from "next/link";
import { useEffect } from "react";
import MentorCard from "./mentorCard";
import FaqSection from "./FaqSection";
import Countdown from "./CountDown";
import PopUp from "./Popup";
import JudgeCard from "./judgeCard";
import Perks from "@/components/component/Perks";
import ProblemSection from "./statements.jsx";
import React from "react";
import HomePage from "./Home/home";
import { Timeline } from "./Timeline/Timeline";
export function Component() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <>
    <HomePage/>
        

      <div className="w-screen bg-gray-50/90 border-t border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800 overflow-x-hidden">
        
        <section className="py-12 md:py-16 xl:py-24  bg-black overflow-x-hidden">
          <div className="w-11/12 md:w-10/12 mx-auto flex flex-wrap max-[1300px]:justify-center justify-evenly xl:gap-10">
            <div className="max-[450px]:w-11/12 flex justify-center items-center space-y-4">
              <img src="/rotate.webp" alt="rotate" className="!max-w-[400px] max-[450px]:!max-w-[300px] max-[450px]:w-10/12 opacity-60 animate-[spin_10s_linear_infinite]" loading="lazy" />
              <div className="max-[450px]:w-11/12 max-[450px]:text-center absolute">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Choose your Theme
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Pick from a variety of themes to showcase your skills. From
                  stunning designs to cutting-edge tech, the choice is yours.
                </p>
              </div>

            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">

              {/* </div> */}
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  alt="AI/ML"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="300"
                  src="/theme/ai.webp"
                  loading="lazy"
                  width="300"
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Artificial Intelligence</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Put a modern spin on classic looks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  alt="Web Development"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="300"
                  src="/theme/web.webp"
                  loading="lazy"
                  width="300"
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Web Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Boldly innovate with tomorrow in mind.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  alt="App Development"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="300"
                  src="/theme/app.webp"
                  loading="lazy"
                  width="300"
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">App Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Embrace the digital urban landscape.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  alt="Blockchain"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="300"
                  src="/theme/blockchain.webp"
                  loading="lazy"
                  width="300"
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Blockchain</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Embrace the digital urban landscape.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  alt="Network Security"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="300"
                  src="/theme/ns.webp"
                  loading="lazy"
                  width="300"
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Network Security</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into creativity with a sea-inspired theme.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <img
                  alt="Augumented Reality"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="300"
                  src="/theme/ar.webp"
                  loading="lazy"
                  width="300"
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">
                    Augumented Reality and Virtual Reality
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into creativity with a sea-inspired theme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Prizes" className="py-12 md:py-16 xl:py-24 bg-black overflow-x-hidden">
          <div className="w-11/12 md:w-10/12 mx-auto flex flex-col flex-wrap max-[1300px]:justify-center items-center justify-evenly xl:gap-10">
            <img src="/prize_rotate.webp" alt="rotate" className="absolute -z-2 !max-w-8/12 max-[450px]:!max-w-[300px] max-[450px]:w-10/12 opacity-20 animate-[spin_100s_linear_infinite]" loading="lazy" />
            <div className="max-[450px]:w-11/12 flex text-center justify-center items-center space-y-4 z-10">
              <div className="max-[450px]:w-11/12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Prizes that can be yours!
                </h2>
                <p className="max-w-[600px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Win a variety of prizes, ranging from tracks, rookies to overall
                  bests! Showcase your skills and win them all!
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center flex-col gap-4 z-10">
              <p className="text-3xl font-bold col-span-2">Cash Prizes</p>
              <div className="flex flex-col gap-4 flex-wrap items-center justify-center">
                <div className="flex gap-4 flex-col items-center justify-center">
                  <img src="/podium.webp" alt="Prizes" className="max-[450px]:w-11/12 w-1/2" loading="lazy" />
                  {/* <ul className="text-3xl gap-2 display flex flex-col list-none"> */}
                  {/* <p className="text-3xl">Cash Prizes worth 50K!</p> */}
                  {/* <p className="text-xl">and</p> */}
                  {/* </ul> */}
                  {/* <span className="text-lg text-center text-gray-500/70 dark:text-gray-400/70">
                    To be released by 14th of April!
                  </span> */}
                  <span className="text-sm text-left"><strong>T&C Applied</strong> * Including all Cash and Coupons.</span>
                </div>
              </div>
              <p className="text-3xl font-bold col-span-2">In Kind Prizes</p>
              <div className="flex flex-col gap-4 flex-wrap items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-bl-[25%] rounded-tr-[25%] h-[150px]">
                  <img
                    alt="GeeksforGeeks"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    src="/sponsors/gfg.png"
                    loading="lazy"
                    width="250"
                  />
                  <div className="flex flex-col gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">GeeksforGeeks</h3>
                    <p className="text-sm text-black/90">
                      Exciting Merch & Coupons
                    </p>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-br-[25%] rounded-tl-[25%]  h-[150px]">
                  <img
                    alt="Polygon"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    src="https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Polygon</h3>
                    <p className="text-sm text-black/90">
                      Track Prize worth - $200
                    </p>
                  </div>
                </div> */}
              </div>
              <p className="text-3xl font-bold col-span-2">Track Prizes</p>
              <div className="flex gap-4 flex-wrap items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-br-[25%] rounded-tl-[25%]  h-[150px]">
                  <img
                    alt="Polygon"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    src="https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Polygon</h3>
                    <p className="text-sm text-black/90">
                      Prize worth - $200
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-bl-[25%] rounded-tr-[25%]  h-[150px]">
                  <img
                    src="https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/70095ac7-8485-49ab-9117-342196b48c67.png"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    alt="ETHIndia"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">ETHIndia</h3>
                    <p className="text-sm text-black/90">
                      Prize worth - $100
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-tl-[25%] rounded-br-[25%]  h-[150px]">
                  <img
                    src="/sponsors/aptos.webp"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    alt="Aptos"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Aptos</h3>
                    <p className="text-sm text-black/90">
                      Prize worth - $1000
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-tr-[25%] rounded-bl-[25%]  h-[150px]">
                  <img
                    src="/sponsors/quillaudits.webp"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    alt="Aptos"
                    width="250"
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Quill Audits</h3>
                    <p className="text-sm text-black/90">
                      Grant worth - $2000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </section >
        <section id="ProblemStatement" className="py-6 md:py-16 xl:py-24 bg-black overflow-x-hidden">
          
              {/* <ul className="text-3xl gap-2 display flex flex-col list-none">
                <li>Coming Soon!</li>
              </ul>
              <span className="text-lg text-center text-gray-500/70 dark:text-gray-400/70">
                To be released by 14th of April!
              </span> */}
              <ProblemSection />
            
         
        </section>
        <section className="bg-black relative h-full w-full">
        <Timeline/>

         
        </section>
        <section id="Perks" className=" py-16 md:py-16 xl:py-24">
          <div className="w-11/12 md:w-10/12 mx-auto grid gap-6 lg:grid-cols-2 xl:gap-10">
            <div className="flex flex-col justify-center items-center space-y-4">
              <img src="/perk_rotate.webp" alt="rotate" className="!max-w-[400px] max-[450px]:!max-w-[300px] max-[450px]:w-10/12 opacity-60 animate-[spin_10s_linear_infinite]" loading="lazy" />
              <div className="max-[450px]:w-11/12 max-[450px]:text-center absolute">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Perks!
                </h2>
                <p className="max-w-[600px] text-gray-500/70 dark:text-gray-400/70">Fueling Innovation: Unlimited snacks, and boundless creativity - just a taste of the perks at our hackathon!</p>
              </div>
            </div>
            <Perks />
          </div>
        </section>
        <section id="Sponsors" className=" py-12 md:py-16 xl:py-24 overflow-x-hidden">
          <div className="w-11/12 md:w-10/12 mx-auto flex flex-col gap-8 justify-center items-center">
            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col gap-4 justify-center items-center">
              <h2 className="max-[450px]:text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Sponsors!
              </h2>
              {/* <p
              className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Pick from a variety of themes to showcase your skills. From stunning designs to cutting-edge tech, the
              choice is yours.
            </p> */}
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-stone-400">
                Platinum Sponsors
              </p>
              <div className="flex flex-col w-[300px] justify-center gap-1 bg-white p-4 rounded-2xl">
                <a
                  href="https://geeksforgeeks.org"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sc-tQuYZ sc-dSuTWQ bjQKPw cfusZE"
                >
                  <img
                    src="/sponsors/gfg.png"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    loading="lazy"
                    alt="GeeksforGeeks"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-yellow-500">Gold Sponsors</p>
              <p></p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <img
                    alt="Devfolio Logo"
                    // className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    height="200"
                    loading="lazy"
                    src="/sponsors/Devfolio.png"
                    width="400"
                  />
                </div>
                <div className="flex w-[300px] flex-col justify-center items-center gap-1 bg-white p-4 rounded-2xl">
                  <img
                    alt="Devfolio Logo"
                    // className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    height="150"
                    loading="lazy"
                    src="/sponsors/xyz.webp"
                    width="100"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-stone-100">Silver Sponsors</p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sc-tQuYZ sc-dSuTWQ bjQKPw cfusZE"
                  >
                    <img
                      src="https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="Polygon"
                    />
                  </a>
                </div>
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <a
                    href="https://ethindia.co/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sc-tQuYZ sc-dSuTWQ bjQKPw cfusZE"
                  >
                    <img
                      src="https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/70095ac7-8485-49ab-9117-342196b48c67.png"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="ETHIndia"
                    />
                  </a>
                </div>
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <a
                    href="https://niwi.ai/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sc-tQuYZ sc-dSuTWQ bjQKPw cfusZE"
                  >
                    <img
                      src="/sponsors/niwi_.jpg"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="Niwi"
                    />
                  </a>
                </div>
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <a
                    // href="https://niwi.ai/"
                    href=""
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex justify-center"
                  >
                    <img
                      src="/sponsors/turtltech.webp"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="TurtlTech"
                      width="100"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-yellow-900">
                Bronze Sponsors
              </p>
              <div className="flex flex-wrap max-md:justify-center max-md:items-center gap-4">
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <a

                    // href="https://niwi.ai/"
                    href=""
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex justify-center"
                  >
                    <img
                      src="/sponsors/reskill.webp"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="Reskill"
                    />
                  </a>
                </div>
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <a
                    // href="https://niwi.ai/"
                    href=""
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex justify-center"
                  >
                    <img
                      src="/sponsors/azure.webp"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="Azure"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold">
                Track Sponsors
              </p>
              <div className="flex flex-wrap max-md:justify-center max-md:items-center gap-4">
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <a
                    href="https://aptosfoundation.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sc-tQuYZ sc-dSuTWQ bjQKPw cfusZE"
                  >
                    <img
                      src="/sponsors/aptos.webp"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="Aptos"
                    />
                  </a>
                </div>
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white/50 p-4 rounded-2xl">
                  <a
                    href="https://https://www.quillaudits.com/smart-contract-audit/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sc-tQuYZ sc-dSuTWQ bjQKPw cfusZE"
                  >
                    <img
                      src="/sponsors/quillaudits.webp"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      loading="lazy"
                      alt="QuillAudits"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-amber-500">Educational Partner</p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <img
                    alt="Physics Wallah"
                    // className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    height="200"
                    loading="lazy"
                    src="/sponsors/physicswallah.webp"
                    width="400"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-blue-500">Interview Partner</p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex w-[300px] flex-col items-center justify-center gap-1 bg-white p-4 rounded-2xl">
                  <img
                    alt="interviewbuddy"
                    // className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    height="150"
                    loading="lazy"
                    src="/sponsors/interviewbuddy.webp"
                    width="200"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-green-500">Finance Partner</p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex w-[300px] flex-col justify-center gap-1 bg-white p-4 rounded-2xl">
                  <img
                    alt="StockGro"
                    // className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    height="200"
                    loading="lazy"
                    src="/sponsors/stockgro.webp"
                    width="400"
                  />
                </div>
                <div className="flex w-[300px] flex-col justify-center items-center gap-1 bg-white/80 p-4 rounded-2xl">
                  <img
                    alt="StockEdge"
                    // className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    height="100"
                    loading="lazy"
                    src="/sponsors/stockedge.webp"
                    width="100"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center max-md:justify-center max-md:items-center">
              <p className="text-3xl font-bold text-white">Certificate Partner</p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex w-[300px] items-center justify-center gap-1 bg-white p-4 rounded-2xl">
                  <img
                    alt="givemycertificate"
                    // className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    height="200"
                    loading="lazy"
                    src="/sponsors/givemycertificate.webp"
                    width="100"
                  />
                  <p className="text-black font-bold text-xl">GiveMyCertificate</p>
                </div>
              </div>
            </div>
          </div>
        </section >
        {/* // -----------------JUDGES SECTION BELOW ----------------------- */}
        < section className="bg-gray-900 py-12 md:py-16 xl:py-24 overflow-x-hidden" >
          <div className="w-11/12 md:w-10/12 mx-auto  grid gap-6 px-4 items-center justify-center text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Judges
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Engage judges succinctly, demonstrating understanding and
                significance of work. Utilize feedback to strengthen
                presentations, leaving a lasting impression.
              </p>
            </div>
            <JudgeCard />
          </div>
        </section >
        {/* //---------------------------------- */}
        < section className="bg-gray-900 py-12 md:py-16 xl:py-24" >
          <div className="w-11/12 md:w-10/12 mx-auto  grid gap-6 px-4 items-center justify-center text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Mentors
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate closely with mentors, refining ideas with clarity and
                brevity. Benefit from their expertise to enhance proposals
                effectively.
              </p>
            </div>
            <MentorCard />
          </div>
        </section >

        {/* <section className=" py-12 md:py-16 xl:py-24">
        <div className="w-11/12 md:w-10/12 mx-auto gap-6 xl:gap-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Team</h2>
          <div>
          </div>
          <div>
          </div>
        </div>
      </section > */}
        < section className="py-8 md:py-12 xl:py-16 overflow-x-hidden" >
          <FaqSection />
          <div className="w-11/12 md:10/12 mx-auto grid gap-6 lg:grid-cols-2 xl:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="max-w-[600px] text-gray-500/70 dark:text-gray-400/70">
                Have questions about the hackathon? Reach out to our team, and
                we&apos;ll be happy to help.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold">Email</span>
                <a href="mailto:info@hackinnovate.tech">
                  <span className="text-sm text-gray-500/70 dark:text-gray-400/70">
                    info@hackinnovate.tech
                  </span>
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold">Phone</span>
                <a href="tel:+91 8447739071">
                  <span className="text-sm text-gray-500/70 dark:text-gray-400/70">
                    +91 8447739071
                  </span>
                </a>
                <a href="tel:+91 9413401658">
                  <span className="text-sm text-gray-500/70 dark:text-gray-400/70">
                    +91 9413401658
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section >
      </div >
      <PopUp />
    </>
  );
}