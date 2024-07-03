import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradients";

export default function Header() {
    return (
        <div className="tw-bg-[#17181a] tw-flex tw-p-4 tw-px-8 tw-items-center tw-justify-between">
            <div className="">
                {" "}
                <img className="tw-w-12" src="/sg-logo.png" alt="" />
            </div>

            <div className="tw-flex tw-gap-4">
                <div>About Me</div>
                <div>Projects</div>
                <div>Education</div>
                <div>Experience</div>
            </div>
            <div className="tw-flex tw-sm:gap-4 tw-items-center tw-gap-2">
                <img
                    src="https://i0.wp.com/showmeleb.com/wp-content/uploads/2020/06/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png-32.png?ssl=1"
                    alt=""
                    className="tw-sm:max-w-8 tw-max-w-6"
                />
                <img
                    src="https://www.pikpng.com/pngl/b/31-313145_twitter-png-white-white-twitter-logo-no-background.png"
                    alt=""
                    className="tw-sm:max-w-8 tw-max-w-5"
                />
                <img
                    src="https://www.pikpng.com/pngl/b/34-345914_continue-with-google-white-g-logo-clipart.png"
                    alt=""
                    className="tw-sm:max-w-6 tw-max-w-4"
                />
                <img
                    src="/insta.png"
                    alt=""
                    className="tw-sm:max-w-6 tw-max-w-4"
                />
                <img
                    src="/gmail.png"
                    alt=""
                    className="tw-sm:max-w-6 tw-max-w-4 "
                />
                <img
                    src="/telegram.png"
                    alt=""
                    className="tw-sm:max-w-6 tw-max-w-4 "
                />
                <img
                    src="/github.png"
                    alt=""
                    className="tw-sm:max-w-6 tw-max-w-4 "
                />
                <img
                    src="/github2.png"
                    alt=""
                    className="tw-sm:max-w-6 tw-max-w-4 "
                />
                {/* <HoverBorderGradient
                    clockwise={true}
                    content="shivam"
                    children={"shivam"}
                /> */}
            </div>
        </div>
    );
}
