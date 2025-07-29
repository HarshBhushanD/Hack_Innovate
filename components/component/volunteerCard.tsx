import React from "react";
import { volunteer } from "../../lib/volunteer";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function VolunteerCard() {
  const volunteerList = volunteer.map((volunteer, index) => {
    return (
      <div key={index} id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <Image src={volunteer.image} alt={volunteer.name} width={300} height={300} />
              <div className="overlay">
                <h3>{volunteer.name}</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {(volunteer.linkedin) && <Link href={volunteer.linkedin}><FaLinkedin style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(volunteer.github) && <Link href={volunteer.github}><FaGithub style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(volunteer.twitter) && <Link href={volunteer.twitter}><FaSquareXTwitter
                    style={{ fontSize: "24px", margin: "0 10px" }}
                  /></Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap items-center w-full justify-center">
      {volunteerList}
    </div>
  );
}
