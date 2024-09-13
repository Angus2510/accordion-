import React from "react";
import Accordion from "./accordion";

const FAQ = () => {
  return (
    <div className="container flex flex-col  p-4 bg-gray-200 rounded-2xl lg:w-1/3 sm:w-80 mt-16">
      <div className=" flex justify-start pl-4 items-center my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="41"
          fill="none"
          viewBox="0 0 40 41"
        >
          <path
            fill="#AD28EB"
            d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
          />
        </svg>
        <h1 className="font-bold text-4xl ml-4">FAQs</h1>
      </div>
      <Accordion
        title="What is your return policy?"
        answer="Our return policy allows for returns within 30 days of purchase. Items must be unused and in their original packaging to qualify for a refund."
      />
      <Accordion
        title="How can I track my order?"
        answer="After placing an order, you will receive a tracking number via email. You can use this number to track your package through our website or the carrier's tracking service."
      />
      <Accordion
        title="Do you offer international shipping?"
        answer="Yes, we offer international shipping to selected countries. Shipping fees and delivery times vary depending on the destination."
      />
      <Accordion
        title="How can I contact customer support?"
        answer="You can reach our customer support team via email at support@example.com or call us at (123) 456-7890 during business hours, Monday to Friday, 9 AM - 5 PM."
      />
    </div>
  );
};

export default FAQ;
