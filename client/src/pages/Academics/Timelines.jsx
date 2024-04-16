
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
          <Timeline.Time className="font-title text-2xl font-semibold text-secondary tracking-wider">April 2013</Timeline.Time>
          <Timeline.Title>Phase - 01</Timeline.Title>
          <Timeline.Body>
          The gates of Knowledge of Mysore International School (earlier known as MLZS) was opened to the students. It was an amazing journey of catering  wisdom to students to excel in all walks of life.
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
          <Timeline.Time className="font-title text-2xl font-semibold text-secondary tracking-wider">March 2018</Timeline.Time>
          <Timeline.Title>Phase - 02</Timeline.Title>
          <Timeline.Body>
          The school crossed all hurdles and it's first 10th batch passed out in 2018 with flying colours. Our young minds have kept our name high with excellent results in every board exams.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content className="w-[80%]">
          <Timeline.Time className="font-title text-2xl font-semibold text-secondary tracking-wider"> 2020-2023</Timeline.Time>
          <Timeline.Title >Phase - 03</Timeline.Title>
          <Timeline.Body>
          The School achieved many milestones on the way. The most important amongst them being the ISA (INTERNATIONAL SCHOOL AWARD) 2016-19 and the INTERNATIONAL DIMENSIONS IN SCHOOL.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export default Timelines;