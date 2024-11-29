import { MdLocalPhone } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className="flex flex-wrap justify-center text-center gap-4 p-6 mt-0 ">
            <button className="bg-green-200 text-center px-8 py-2 rounded-lg justify-center hover:scale-105 duration-300"><FaWhatsappSquare className="mx-10 text-green-600"/>whatsApp</button>
            <button className="bg-blue-400 text-center px-8 py-2 rounded-lg justify-center hover:scale-105 duration-300"><MdLocalPhone className="mx-10 text-white text-lg"/>phone</button>
            <button className="bg-pink-400 text-center px-8 py-2 rounded-lg justify-center hover:scale-105 duration-300"><FaInstagramSquare className="mx-10" />instagram</button>
            <button className="bg-blue-500 text-center px-8 py-2 rounded-lg justify-center hover:scale-105 duration-300"><FaLinkedin className="mx-10" />linkedin</button>
            <button className="bg-black text-center text-white px-8 py-2 rounded-lg justify-center hover:scale-105 duration-300"><FaSquareXTwitter className="mx-10 text-white"/>xtwitter</button>
            <button className="bg-blue-400 text-center px-8 py-2 rounded-lg justify-center hover:scale-105 duration-300"><FaFacebookSquare className="mx-10"/>facebook</button>
            <button className="bg-blue-700 text-center text-white px-8 py-2 rounded-lg justify-center"><FaTelegram className="mx-10"/>telegram</button>
        </div>
    );
}