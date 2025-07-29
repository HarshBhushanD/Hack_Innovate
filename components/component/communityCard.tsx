import { communities } from "../../lib/communities";
import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function CommunityCard() {
    const communitiesList = communities.map((item, idx) => {
        return (
            <div key={idx} id="card-area">
                {/* <div className=""> */}
                <div className="flex flex-col gap-4">
                    <div className="w-[250px] h-[250px] border rounded-lg flex justify-center bg-white/75">
                        <Image src={item.image} alt={item.name} className="object-contain" width={250} height={250} />
                        {/* <div className="overlay"> */}
                        {/* <h3>{item.name}</h3> */}
                        {/* <div style={{ display: "flex", justifyContent: "center" }}>
                                    {(item.linkedin) && <Link href={item.linkedin}><FaLinkedin style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                                    {(item.github) && <Link href={item.github}><FaGithub style={{ fontSize: "24px", margin: "0 10px" }} /></Link>}
                                    {(item.twitter) && <Link href={item.twitter}><FaSquareXTwitter
                                        style={{ fontSize: "24px", margin: "0 10px" }}
                                    /></Link>}
                                </div> */}
                        {/* </div> */}
                    </div>
                    <h3 className="text-2xl">{item.name}</h3>
                </div>
                {/* </div> */}
            </div >
        );
    });
    return (
        <div className="flex flex-wrap items-center w-full justify-evenly">
            {communitiesList}
        </div>
    );
}
