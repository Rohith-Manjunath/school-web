
"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Timelines() {
  return (
    <Timeline className=" flex flex-col  w-[100%] lg:m-10 ml-7 ">
      <h1 className="items-center text-center pb-10 mr-14   font-title text-2xl font-semibold text-secondary tracking-wider">OUR TIMELINE</h1>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content className="w-[80%]">
          <Timeline.Time className="font-title text-2xl font-semibold text-secondary tracking-wider">February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          {/* <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button> */}
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
      <Timeline.Point />
        <Timeline.Content className="w-[80%]">
          <Timeline.Time className="font-title text-2xl font-semibold text-secondary tracking-wider">March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content className="w-[80%]">
          <Timeline.Time className="font-title text-2xl font-semibold text-secondary tracking-wider">April 2022</Timeline.Time>
          <Timeline.Title >E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export default Timelines;