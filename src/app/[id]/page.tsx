"use client";
import { program } from "@/utils/program";
import Link from "next/link";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const newArray = program.filter((program) => program.id == id);
  return (
    <div>
      <div className="mx-6">
        {newArray.map((program) => (
          <div key={program.id}>
            <div className="">
              <h1 className="text-white md:text-6xl text-2xl font-extrabold uppercase text-center p-8 tracking-[8px] ">
                {program.title}
              </h1>
            </div>
            <div className="m-6">
              <p className="text-white md:text-4xl text-xl tracking-wider text-justify">
                {program.des}
              </p>
            </div>
            <div>
              <h1 className="uppercase md:text-6xl text-2xl text-center py-8 text-white">
                detailed program structure
              </h1>
            </div>
            <div className="-z-10">
              <VerticalTimeline lineColor="transparent">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "white",
                    color: "#001102",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid white",
                  }}
                  iconStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  iconClassName="icon"
                  icon="Q 1"
                >
                  <h3 className="text-2xl mb-4">Quarter 1</h3>
                  <p className="capitalize text-gray-500 mb-6">
                    Following Link shows detailed course
                  </p>
                  <br />
                  <Link
                    href="https://panaverse-lite.vercel.app/quarter/1"
                    className="mt-6 capitalize text-red-500"
                  >
                    Sllybus
                  </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  iconClassName="icon"
                  icon="Q 2"
                >
                  <h3 className="text-2xl mb-4">Quarter 2</h3>
                  <p className="capitalize text-gray-500 mb-6">
                    Following Link shows detailed course
                  </p>
                  <br />{" "}
                  <Link
                    href="https://panaverse-lite.vercel.app/quarter/2"
                    className="mt-6 capitalize text-red-500"
                  >
                    Sllybus
                  </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  iconClassName="icon"
                  icon="Q 3"
                >
                  <h3 className="text-2xl mb-4">Quarter 3</h3>
                  <p className="capitalize text-gray-500 mb-6">
                    Following Link shows detailed course
                  </p>
                  <br />{" "}
                  <Link
                    href="https://panaverse-lite.vercel.app/quarter/3"
                    className="mt-6 capitalize text-red-500"
                  >
                    Sllybus
                  </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  iconClassName="icon"
                  icon="Q 4"
                >
                  <h3 className="text-2xl mb-4">Quarter 4</h3>
                  <div>
                    <h1 className="capitalize text-gray-500 mb-6">
                      {program.courseOutline}
                    </h1>

                    <Link
                      href={`${program.module1Link}`}
                      className="capitalize text-red-500 mb-6"
                    >
                      {program.module1}
                    </Link>
                    <h1 className="capitalize text-gray-500 mt-6">
                      {" "}
                      {program.module2}
                    </h1>
                    <div>
                      {program.module2Links.map((link) => (
                        <div key={link.id}>
                          <Link
                            href={`${link.link}`}
                            className="capitalize text-red-500 my-6"
                          >
                            {link.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <h2 className="capitalize text-gray-500 mt-6">
                      {program.module3}
                    </h2>
                    <div>
                      {program.module3Links?.map((link) => (
                        <div key={link.id}>
                          <Link
                            href={`${link.link}`}
                            className="capitalize text-red-500 my-6"
                          >
                            {link.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <h2 className="capitalize text-gray-500 mt-6">
                      {program.module4}
                    </h2>
                    <div>
                      {program.module4Links?.map((link) => (
                        <li key={link.id} className="mb-4 list-none">
                          <Link
                            href={`${link.link}`}
                            className="capitalize text-red-500 my-6"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
