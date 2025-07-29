import { team } from "../../lib/team";
import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function TeamCard() {
  const teamList = team.map((item, idx) => {
    return (
      <div key={idx} id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <Image src={item.image} alt={item.name} width={300} height={300} />
              <div className="overlay">
                <h3>{item.name}</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {(item.linkedin) && <Link href={item.linkedin}><FaLinkedin style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(item.github) && <Link href={item.github}><FaGithub style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                  {(item.twitter) && <Link href={item.twitter}><FaSquareXTwitter
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
      {teamList}
    </div>
  );
}
