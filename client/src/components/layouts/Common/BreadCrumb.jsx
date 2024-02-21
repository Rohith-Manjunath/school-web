import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import React from "react";

const BreadCrumb = ({Currentlink, Currentpage }) => {
  return (
    <div className="p-5 border border-b-slate-400 font-semibold">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`${Currentlink}`}>{Currentpage}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
