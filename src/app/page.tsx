import Banner from "../../components/banner";
import Header from "../../components/header";
import { HeroParallaxDemo } from "../../components/heroParallax";
import Navbar from "../../components/navbar";
import { HeroParallax } from "../../components/ui/hero-parallax";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Banner />
            <HeroParallaxDemo />
        </>
    );
}
