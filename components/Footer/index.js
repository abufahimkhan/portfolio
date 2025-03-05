import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>

          {/* Contact Information in Footer */}
          <div className="mt-10 text-xl laptop:text-2xl">
            <p><strong>Full Name:</strong> Abu Fahim Khan Shantanu</p>
            <p><strong>Email:</strong> <a href="mailto:abufahimkhan1@gmail.com" className="text-blue-500 underline">abufahimkhan1@gmail.com</a></p>
            <p><strong>Address:</strong> OLIZA BHUIYAN HOUSE 147/C LIFT 3 WEST MONIPUR MIRPUR 2 PS MIRPUR, DHAKA</p>
            <p><strong>City/Town:</strong> DHAKA</p>
            <p><strong>Postal Code:</strong> 1216</p>
            <p><strong>Country:</strong> Bangladesh</p>
            <p><strong>Phone:</strong> <a href="tel:+8801704606893" className="text-blue-500 underline">+880 1704606893</a></p>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.abufahimkhanverma.com">
          <a className="underline underline-offset-1">Abu Fahim Khan Shantanu</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
