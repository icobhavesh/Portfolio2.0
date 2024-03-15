import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline, MdOutlineEmail } from "react-icons/md";
const SocialMedia = () => {
    return (
        <div className="max-w-[1240px] mx-auto bg-slate-950  static">
            {/* <h1 className="text-2xl pl-10 text-white">Social</h1> */}
            <div className="text-slate-400 flex flex-col  justify-center gap-3 mr-2">
                <a href="linkedin.com/in/bhavesh-saxena-a6a7a3276">
                    <TiSocialLinkedin size={45} />
                </a>
                <a href="https://github.com/dashboard">
                    <FaGithub size={35} />
                </a>

                <a href="">
                    < FaXTwitter size={30} />
                </a>
                <a href="mailto:bhaveshsaxena2809@gmail.com">
                    <MdMailOutline size={35} />
                </a>
            </div>

        </div>
    )
}
export default SocialMedia