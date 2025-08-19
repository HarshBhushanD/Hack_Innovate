"use client";
import Link from "next/link";
import Image from "next/image";
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

// Enhanced Sponsors Section Component
const SponsorsSection = () => {
  const sponsorCategories = [
    {
      title: "Platinum Sponsors",
      color: "text-gray-300",
      bgGradient: "from-gray-900/50 to-gray-800/50",
      borderColor: "border-gray-600",
      sponsors: [
        {
          name: "GeeksforGeeks",
          logo: "/sponsors/gfg.png",
          url: "https://geeksforgeeks.org",
          size: "large"
        }
      ]
    },
    {
      title: "Gold Sponsors",
      color: "text-yellow-400",
      bgGradient: "from-yellow-900/30 to-yellow-800/30",
      borderColor: "border-yellow-600/30",
      sponsors: [
        {
          name: "Devfolio",
          logo: "/sponsors/Devfolio.png",
          url: "#",
          size: "medium"
        },
        {
          name: "XYZ",
          logo: "/sponsors/xyz.webp",
          url: "#",
          size: "medium"
        }
      ]
    },
    {
      title: "Silver Sponsors",
      color: "text-gray-300",
      bgGradient: "from-gray-800/30 to-gray-700/30",
      borderColor: "border-gray-500/30",
      sponsors: [
        {
          name: "Polygon",
          logo: "https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png",
          url: "https://polygon.technology/",
          size: "small"
        },
        {
          name: "ETHIndia",
          logo: "https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/70095ac7-8485-49ab-9117-342196b48c67.png",
          url: "https://ethindia.co/",
          size: "small"
        },
        {
          name: "Niwi",
          logo: "/sponsors/niwi_.jpg",
          url: "https://niwi.ai/",
          size: "small"
        },
        {
          name: "TurtlTech",
          logo: "/sponsors/turtltech.webp",
          url: "#",
          size: "small"
        }
      ]
    },
    {
      title: "Bronze Sponsors",
      color: "text-amber-400",
      bgGradient: "from-amber-900/30 to-amber-800/30",
      borderColor: "border-amber-600/30",
      sponsors: [
        {
          name: "Reskill",
          logo: "/sponsors/reskill.webp",
          url: "#",
          size: "small"
        },
        {
          name: "Azure",
          logo: "/sponsors/azure.webp",
          url: "#",
          size: "small"
        }
      ]
    },
    {
      title: "Track Sponsors",
      color: "text-blue-400",
      bgGradient: "from-blue-900/30 to-blue-800/30",
      borderColor: "border-blue-600/30",
      sponsors: [
        {
          name: "Aptos",
          logo: "/sponsors/aptos.webp",
          url: "https://aptosfoundation.org/",
          size: "small"
        },
        {
          name: "QuillAudits",
          logo: "/sponsors/quillaudits.webp",
          url: "https://www.quillaudits.com/smart-contract-audit/",
          size: "small"
        }
      ]
    }
  ];

  const partnerCategories = [
    {
      title: "Educational Partner",
      color: "text-amber-400",
      bgGradient: "from-amber-900/30 to-amber-800/30",
      borderColor: "border-amber-600/30",
      partners: [
        {
          name: "Physics Wallah",
          logo: "/sponsors/physicswallah.webp",
          url: "#"
        }
      ]
    },
    {
      title: "Interview Partner",
      color: "text-blue-400",
      bgGradient: "from-blue-900/30 to-blue-800/30",
      borderColor: "border-blue-600/30",
      partners: [
        {
          name: "InterviewBuddy",
          logo: "/sponsors/interviewbuddy.webp",
          url: "#"
        }
      ]
    },
    {
      title: "Finance Partner",
      color: "text-green-400",
      bgGradient: "from-green-900/30 to-green-800/30",
      borderColor: "border-green-600/30",
      partners: [
        {
          name: "StockGro",
          logo: "/sponsors/stockgro.webp",
          url: "#"
        },
        {
          name: "StockEdge",
          logo: "/sponsors/stockedge.webp",
          url: "#"
        }
      ]
    },
    {
      title: "Certificate Partner",
      color: "text-purple-400",
      bgGradient: "from-purple-900/30 to-purple-800/30",
      borderColor: "border-purple-600/30",
      partners: [
        {
          name: "GiveMyCertificate",
          logo: "/sponsors/givemycertificate.webp",
          url: "#",
          hasText: true
        }
      ]
    }
  ];

  const SponsorCard = ({ sponsor, size = "small" }) => {
    const sizeClasses = {
      large: "w-72 h-28 md:w-80 md:h-32",
      medium: "w-56 h-20 md:w-64 md:h-24",
      small: "w-48 h-16 md:w-56 md:h-20"
    };

    return (
      <div className={`${sizeClasses[size]} bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 p-4 flex items-center justify-center group border border-gray-200/50`}>
        <a
          href={sponsor.url}
          target="_blank"
          rel="noreferrer noopener"
          className="w-full h-full flex items-center justify-center"
        >
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
            loading="lazy"
            width={200}
            height={80}
          />
          {sponsor.hasText && (
            <span className="ml-3 text-gray-800 font-bold text-lg">
              {sponsor.name}
            </span>
          )}
        </a>
      </div>
    );
  };

  const CategorySection = ({ category, isPartner = false }) => {
    const items = category.sponsors || category.partners;
    const isLargeCategory = items && items.length >= 4;

    return (
      <div className="mb-12 md:mb-16">
        <div className="text-center mb-6 md:mb-8">
          <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${category.color} mb-3`}>
            {category.title}
          </h3>
          <div className={`w-16 md:w-24 h-1 bg-gradient-to-r from-current to-current/50 mx-auto rounded-full opacity-60`}></div>
        </div>

        <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-3xl p-6 md:p-8 border ${category.borderColor} shadow-2xl`}>
          <div className={`
            ${isLargeCategory
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
              : 'flex flex-wrap justify-center'
            } 
            ${!isLargeCategory ? 'gap-6 md:gap-8' : ''}
          `}>
            {items?.map((item, index) => (
              <div key={index} className={!isLargeCategory ? 'flex justify-center' : ''}>
                <SponsorCard
                  sponsor={item}
                  size={category.sponsors?.[0]?.size || "small"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 xl:py-28 bg-black overflow-hidden relative">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Our Amazing
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Sponsors</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re grateful to our incredible sponsors who make this event possible and help us create an amazing experience for all participants
          </p>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Sponsors sections */}
        <div className="max-w-7xl mx-auto">
          {sponsorCategories.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}

          {/* Partners sections */}
          <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-b border-gray-700/50">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Our Trusted
                <span className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent"> Partners</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Collaborating with industry leaders to provide you with the best resources and opportunities
              </p>
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {partnerCategories.map((category, index) => (
              <CategorySection key={index} category={category} isPartner={true} />
            ))}
          </div>
        </div>

        {/* Enhanced call to action
        <div className="text-center mt-16 md:mt-20 pt-12 md:pt-16 border-gray-800/50">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Interested in Sponsoring?
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Join our amazing community of sponsors and partners. Let's create something incredible together and make a lasting impact!
          </p>
          <button className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-lg">
            Become a Sponsor
          </button>
        </div> */}
      </div>
    </section>
  );
};

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
  // }, [...]);
  return (
    <>
      <HomePage />


      <div className="w-screen bg-gray-50/90 border-t border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800 overflow-x-hidden">

        {/* <section className="py-12 md:py-16 xl:py-24  bg-black overflow-x-hidden">
          <div className="w-11/12 md:w-10/12 mx-auto flex flex-wrap max-[1300px]:justify-center justify-evenly xl:gap-10">
            <div className="max-[450px]:w-11/12 flex justify-center items-center space-y-4">
              <Image src="/rotate.webp" alt="rotate" className="!max-w-[400px] max-[450px]:!max-w-[300px] max-[450px]:w-10/12 opacity-60 animate-[spin_10s_linear_infinite]" loading="lazy" width={400} height={400} />
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

              
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  alt="AI/ML"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height={300}
                  src="/theme/ai.webp"
                  loading="lazy"
                  width={300}
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Artificial Intelligence</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Put a modern spin on classic looks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  alt="Web Development"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height={300}
                  src="/theme/web.webp"
                  loading="lazy"
                  width={300}
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Web Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Boldly innovate with tomorrow in mind.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  alt="App Development"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height={300}
                  src="/theme/app.webp"
                  loading="lazy"
                  width={300}
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">App Development</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Embrace the digital urban landscape.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  alt="Blockchain"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height={300}
                  src="/theme/blockchain.webp"
                  loading="lazy"
                  width={300}
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Blockchain</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Embrace the digital urban landscape.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  alt="Network Security"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height={300}
                  src="/theme/ns.webp"
                  loading="lazy"
                  width={300}
                />
                <div className="flex-1 grid gap-1.5 mt-2">
                  <h3 className="font-semibold">Network Security</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into creativity with a sea-inspired theme.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  alt="Augumented Reality"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height={300}
                  src="/theme/ar.webp"
                  loading="lazy"
                  width={300}
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
        </section> */}
        <section id="Prizes" className="py-12 md:py-16 xl:py-24 bg-black overflow-x-hidden">
          <div className="w-11/12 md:w-10/12 mx-auto flex flex-col flex-wrap max-[1300px]:justify-center items-center justify-evenly xl:gap-10">
                          <Image src="/prize_rotate.webp" alt="rotate" className="absolute -z-2 !max-w-8/12 max-[450px]:!max-w-[300px] max-[450px]:w-10/12 opacity-20 animate-[spin_100s_linear_infinite]" loading="lazy" width={600} height={600} />
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
                  <Image src="/podium.webp" alt="Prizes" className="max-[450px]:w-11/12 w-1/2" loading="lazy" width={500} height={300} />
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
                  <Image
                    alt="GeeksforGeeks"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    src="/sponsors/gfg.png"
                    width={250}
                    height={100}
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
                  <Image
                    alt="Polygon"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    src="https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png"
                    width={250}
                    height={100}
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Polygon</h3>
                    <p className="text-sm text-black/90">
                      Prize worth - $200
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-bl-[25%] rounded-tr-[25%]  h-[150px]">
                  <Image
                    src="https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/70095ac7-8485-49ab-9117-342196b48c67.png"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    alt="ETHIndia"
                    width={250}
                    height={100}
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">ETHIndia</h3>
                    <p className="text-sm text-black/90">
                      Prize worth - $100
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-tl-[25%] rounded-br-[25%]  h-[150px]">
                  <Image
                    src="/sponsors/aptos.webp"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    alt="Aptos"
                    width={250}
                    height={100}
                  />
                  <div className="flex-1 grid gap-1.5 mt-2 text-black">
                    <h3 className="font-semibold">Aptos</h3>
                    <p className="text-sm text-black/90">
                      Prize worth - $1000
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-white/70 p-4 rounded-tr-[25%] rounded-bl-[25%]  h-[150px]">
                  <Image
                    src="/sponsors/quillaudits.webp"
                    className="overflow-hidden rounded-lg object-contain object-center"
                    alt="Quill Audits"
                    width={250}
                    height={100}
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
          {/* <ProblemSection /> */}


        </section>
        <section className="bg-black relative h-full w-full">
          <Timeline />


        </section>

        <Perks />
        {/* <SponsorsSection /> */}

        {/* // -----------------JUDGES SECTION BELOW ----------------------- */}
        <section className="relative bg-black py-20 md:py-28 xl:py-36 overflow-hidden -mt-12 ">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-purple-300 text-sm font-medium uppercase tracking-wider">
                  Expert Panel
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Meet Our
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Judges
                </span>
              </h2>

              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  Industry leaders and innovators who will evaluate your projects with
                  <span className="text-purple-400 font-semibold"> expertise</span> and
                  <span className="text-blue-400 font-semibold"> insight</span>
                </p>

                {/* Stats */}
                <div className="flex justify-center items-center space-x-8 md:space-x-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Expert Judges</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Years Combined</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Judged</div>
                  </div>
                </div>
              </div>
            </div>

            <JudgeCard />
          </div>
        </section>

        {/* //---------------------------------- */}
        <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-8 md:py-12 xl:py-16 -mt-24">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-emerald-300 text-sm font-medium uppercase tracking-wider">
                  Guidance & Support
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Expert
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Mentors
                </span>
              </h2>

              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  Connect with seasoned professionals who are passionate about
                  <span className="text-emerald-400 font-semibold"> nurturing talent</span> and
                  <span className="text-teal-400 font-semibold"> driving innovation</span>
                </p>

                {/* Mentor benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Fast-Track Learning</h3>
                    <p className="text-gray-400 text-sm">Accelerate your growth with personalized guidance</p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Network Building</h3>
                    <p className="text-gray-400 text-sm">Connect with industry professionals and peers</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Real-World Insights</h3>
                    <p className="text-gray-400 text-sm">Gain practical knowledge from industry veterans</p>
                  </div>
                </div>
              </div>
            </div>

            <MentorCard />
          </div>
          {/* Custom animation keyframes */}
          <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-10px) rotate(1deg); }
      66% { transform: translateY(5px) rotate(-1deg); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>

          <FaqSection />
        </section>

        {/* <section className=" py-12 md:py-16 xl:py-24">
        <div className="w-11/12 md:w-10/12 mx-auto gap-6 xl:gap-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Team</h2>
          <div>
          </div>
          <div>
          </div>
        </div>
      </section > */}
        <section id="contact" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 md:py-28 xl:py-36 overflow-hidden -mt-36">
  {/* Background decoration */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header section */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
        <span className="text-red-300 text-sm font-medium uppercase tracking-wider">
          Get in Touch
        </span>
      </div>

      <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-6">
        <span className="bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
          Contact
        </span>
        <br />
        <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          VulnVANGUARD
        </span>
      </h2>

      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Questions about the cybersecurity hackathon? Reach out to our organizers and
        <span className="text-red-400 font-semibold"> we&apos;ll be happy to help</span>
      </p>
    </div>

    {/* Contact content */}
    <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
      {/* Email card */}
      <div className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Email</h3>
        </div>
        <a
          href="mailto:geeksforgeekssrmist@gmail.com"
          className="text-red-300 hover:text-red-200 transition-colors duration-300 font-medium break-all"
        >
          geeksforgeekssrmist@gmail.com
        </a>
      </div>

      {/* Website card */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 backdrop-blur-sm group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Website</h3>
        </div>
        <a
          href="https://www.srmist-ncr-gfg.club/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-medium break-all"
        >
          www.srmist-ncr-gfg.club
        </a>
      </div>

      {/* Location card */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 backdrop-blur-sm group lg:col-span-1">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Location</h3>
        </div>
        <div className="text-blue-300 font-medium">
          <p>SRMIST Campus</p>
          <p className="text-sm text-blue-400 mt-2">
            Modinagar, Ghaziabad<br />
            201204, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </div>

    {/* Organization info */}
    <div className="text-center mt-12">
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">Organized by</h3>
        <p className="text-xl text-gray-300 mb-2">
          <span className="text-red-400 font-semibold">GeeksforGeeks SRMIST Delhi-NCR</span> Campus Body
        </p>
        <p className="text-gray-400">
          Empowering the next generation of cybersecurity professionals through hands-on learning and innovation
        </p>
      </div>
    </div>
  </div>
</section>
      </div >
      {/* <PopUp /> */}
    </>
  );
}
