"use state"
import React, { useState } from "react";
import { House,ChartNoAxesColumnIncreasing,User,Settings,ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { motion } from "framer-motion";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "#",
      icon: <House />,
    },
    {
      name: "Analytics",
      href: "#Analytics",
      icon: <ChartNoAxesColumnIncreasing />,
    },
    {
      name: "Users",
      href: "#Users",
      icon: <User />,
    },
    {
      name: "Settings",
      href: "#Settings",
      icon: <Settings />,
    },
  ];

  return (
    <div className="border-r border-neutral-100 h-full">
      <div className="bg-white shadow-md h-full">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{isOpen ? "Dashboard" : <span className="sr-only">Dashboard</span>}</h2>

          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ArrowBigLeft /> : <ArrowBigRight/>}
          </button>
        </div>

        <div className="relative">
          {/* Sidebar Content */}
          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon}
                    {isOpen && <span className="ml-2">{link.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
