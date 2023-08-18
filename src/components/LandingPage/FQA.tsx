"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Question {
  id: number;
  question: string;
  answer?: string | string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What do I need to book a car on Turo?",
    answer:
      "To book a car on Turo, you must create a Turo account, be 18 years old or older in the US, 21 years old or older in the UK, 23 years old or older in Canada, have a valid driver’s license, and get approved to drive on Turo. When you’re booking your first trip, you’ll go through a quick approval process by entering your driver’s license and some other information. In most cases, you’ll get approved immediately, and you’ll be set for all future road trips, day trips, and business trips!",
  },
  {
    id: 2,
    question: "Do I need my own insurance?",
    answer: [
      "No, you don’t need personal insurance coverage to book a car on Turo.",
      "In the US, any personal insurance you may have that covers damage to the host’s vehicle would kick in before your Turo protection plan, except in limited situations for trips booked in Maryland. When booking a car in the US, you’ll choose between three protection plans — Premier, Standard, or Minimum — to get the level of coverage that’s right for you. With each plan, you’re covered with third-party automobile liability insurance provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company — $750,000 for the Premier plan.*",
      "In New York state, you’ll also choose between Premier, Standard, or Minimum. With each plan, you’re covered with liability insurance of $1,250,000.* Protection plans for New York trips also include access to roadside assistance, priority phone support, and 24/7 customer assistance.",
      "",
    ],
  },
  {
    id: 3,
    question: "Can other people drive a car that I booked?",
    answer: [
      "You can cancel and get a full refund up to 24 hours before your trip starts. If you book a trip with less than 24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee.",
      "In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice.",
    ],
  },
  {
    id: 4,
    question: "What happens if I have an accident?",
    answer:
      "If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.",
  },
  {
    id: 5,
    question: "Can I get my car delivered to me?",
    answer:
      "Yes, many hosts offer delivery to travel hubs like airports, train stations, and hotels, or to custom delivery locations. There are cars available on Turo at convenient locations near hundreds of airports. Skip the rental counter and have your car delivered for pickup and return at your hotel or vacation rental, or nearby location, to save time and hassle on your weekend getaway or family vacation. Some hosts offer free delivery, while others set their own delivery fee.",
  },
  {
    id: 6,
    question: "What are the cleaning and safety policies on Turo?",
    answer:
      "Under the enhanced cleaning policy, hosts are required to clean and disinfect their vehicles thoroughly before every trip, so you can feel safe and comfortable behind the wheel. Turo hosts have access to training materials on enhanced safety measures and cleaning practices to help prevent the spread of COVID-19 or other viruses.",
  },
  {
    id: 7,
    question: "What is the cancellation policy on Turo?",
    answer: [
      "You can cancel and get a full refund up to 24 hours before your trip starts. If you book a trip with less than 24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee.",
      "In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice.",
    ],
  },
];

const FQA: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setIsOpen((prevOpen) => {
      if (prevOpen.includes(id)) {
        return prevOpen.filter((qid) => qid !== id);
      } else {
        return [...prevOpen, id];
      }
    });
  };

  const isQuestionOpen = (id: number) => {
    return isOpen.includes(id);
  };

  return (
    <div className="flex flex-col p-3 text-black">
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full mx-2 h-1/2 bg-violet-200 z-10"></div>
        <h3 className="lg:text-3xl m:text-lg sm:text-small font-bold relative z-20">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((question) => (
          <div key={question.id} className="p-4 border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleQuestion(question.id)}
            >
              <h3 className="text-lg font-bold">{question.question}</h3>
              {isQuestionOpen(question.id) ? (
                <IoIosArrowUp className="w-5 h-5" />
              ) : (
                <IoIosArrowDown className="w-5 h-5" />
              )}
            </div>
            {isQuestionOpen(question.id) && (
              <p className="mt-2 text-gray-600">{question.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FQA;
