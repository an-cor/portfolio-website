"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">

                Throughout my journey as a programmer, I’ve designed and built diverse projects, including
                <strong> web apps, mobile applications, full-stack solutions,</strong>
                and <strong>databases</strong>, continually honing my technical and creative capabilities.

                I am eager to bring my skills to future employers and clients, contributing
                <em> innovative ideas</em> and <strong>technical expertise</strong> to help
                them achieve their goals in the tech space. My favorite part of programming
                is the problem-solving aspect. I <strong>love</strong> the feeling of
                finally figuring out a solution to a problem.

                I am actively seeking a <strong>full-time position</strong> as a software
                engineer where I can add meaningful value while advancing my career and
                building impactful solutions.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy hiking,
                trying new food places, and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">game theory.</span> I'm also
                learning how to draw better.
            </p>
            <p>
                What do you think about <strong>my home made website?</strong>
                Tell me with the Contact Me section!
            </p>
        </motion.section>
    );
}