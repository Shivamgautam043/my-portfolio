"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="tw-h-[300vh] tw-py-40 tw-overflow-hidden tw-antialiased tw-relative tw-flex tw-flex-col tw-self-auto [tw-perspective:1000px] [tw-transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="tw-flex tw-flex-row-reverse tw-space-x-reverse tw-space-x-20 tw-mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="tw-flex tw-flex-row tw-mb-20 tw-space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="tw-flex tw-flex-row-reverse tw-space-x-reverse tw-space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="tw-max-w-7xl tw-relative tw-mx-auto tw-py-20 tw-md:py-40 tw-px-4 tw-w-full tw-left-0 tw-top-0">
            <h1 className="tw-text-2xl tw-md:text-7xl tw-font-bold tw-dark:text-white">
                The Ultimate <br /> development studio
            </h1>
            <p className="tw-max-w-2xl tw-text-base tw-md:text-xl tw-mt-8 tw-dark:text-neutral-200">
                We build beautiful products with the latest technologies and
                frameworks. We are a team of passionate developers and designers
                that love to build amazing products.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="tw-group/product tw-h-96 tw-w-[30rem] tw-relative tw-flex-shrink-0"
        >
            <Link
                href={product.link}
                className="tw-block tw-group-hover/product:tw-shadow-2xl"
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="tw-object-cover tw-object-left-top tw-absolute tw-h-full tw-w-full tw-inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-opacity-0 tw-group-hover/product:tw-opacity-80 tw-bg-black tw-pointer-events-none"></div>
            <h2 className="tw-absolute tw-bottom-4 tw-left-4 tw-opacity-0 tw-group-hover/product:tw-opacity-100 tw-text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
