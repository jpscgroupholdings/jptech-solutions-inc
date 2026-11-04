import React from "react";
import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

export interface Partner {
  name: string;
  description: string;
  img?: string;
  href?: string
}

export const PARTNERS: Partner[] = [
  // {
  //   name: "Alibaba Cloud",
  //   description:
  //     "Cloud computing, infrastructure, database, security, and AI services.",
  //   img: "/alibaba.png"
  // },
  // {
  //   name: "Amazon Web Services (AWS)",
  //   description:
  //     "Flexible and scalable cloud infrastructure and application services.",
  //     img: "/aws_logo.png"
  // },
  {
    name: "BytePlus",
    description:
      "ByteDance's enterprise technology platform, providing advanced AI, cloud, data analytics, and marketing solutions that help businesses innovate, optimize operations, and accelerate growth. Powered by technologies behind products like TikTok, BytePlus enables organizations to deliver smarter, more personalized digital experiences and make data-driven business decisions.",
    img: "/bytedance.jpeg",
    href: "/byteplus"
  },
  {
    name: "Lark",
    description:
      "An all-in-one workplace collaboration platform that brings messaging, video meetings, document management, project management, workflow automation, and HR tools into one integrated workspace. Designed to streamline communication, improve team productivity, and simplify business operations, Lark helps organizations work smarter and collaborate seamlessly.",
    img: "/lark.jpeg",
    href: "/lark"
  },
];

const Partners: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="partners" className="relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="micro-label text-primary-light mb-6">
            Technology & Strategic Partners
          </p>
          <h2 className="display-md text-foreground max-w-3xl">
            We work with leading technology providers to deliver reliable and
            scalable solutions across cloud, AI, connectivity, and digital
            services.
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20 grid gap-2 bg-background sm:grid-cols-2">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 70}>
              <div onClick={() => partner.href && navigate(partner.href)} className="group bg-background h-full flex items-center gap-8 p-8 sm:p-10 transition-colors duration-200 hover:shadow dark:hover:bg-gray-50 cursor-pointer">
                <div className="w-36 shrink-0 flex items-center">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="h-16 w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-[-0.01em]">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 max-w-md">
                    {partner.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
