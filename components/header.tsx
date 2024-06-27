import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradients";

export default function Header() {
    return (
        <div className="bg-[#17181a] flex  p-4 px-8 items-center  justify-between">
            <div className="">
                {" "}
                <img className="w-12" src="/sg-logo.png" alt="" />
            </div>

            <div className="flex gap-4">
                <div>About Me</div>
                <div>Projects</div>
                <div>Education</div>
                <div>Current Role</div>
            </div>
            <div className="flex sm:gap-4 items-center gap-2">
                <img
                    src="https://i0.wp.com/showmeleb.com/wp-content/uploads/2020/06/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png-32.png?ssl=1"
                    alt=""
                    className="sm:max-w-8 max-w-6"
                />
                <img
                    src="https://www.pikpng.com/pngl/b/31-313145_twitter-png-white-white-twitter-logo-no-background.png"
                    alt=""
                    className="sm:max-w-8 max-w-5"
                />
                <img
                    src="https://www.pikpng.com/pngl/b/34-345914_continue-with-google-white-g-logo-clipart.png"
                    alt=""
                    className="sm:max-w-6 max-w-4"
                />
                <img src="/insta.png" alt="" className="sm:max-w-6 max-w-4" />
                <img src="/gmail.png" alt="" className="sm:max-w-6 max-w-4 " />
                <img
                    src="/telegram.png"
                    alt=""
                    className="sm:max-w-6 max-w-4 "
                />
                <img src="/github.png" alt="" className="sm:max-w-6 max-w-4 " />
                <img
                    src="/github2.png"
                    alt=""
                    className="sm:max-w-6 max-w-4 "
                />
                <HoverBorderGradient
                    clockwise={true}
                    content="shivam"
                    children={"shivam"}
                />
            </div>
        </div>
    );
}
