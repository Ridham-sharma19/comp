import React from 'react';
import { GeistSans } from "geist/font/sans";
import { Card } from './ui/card';

export function Content() {
  return (
    <div className={`${GeistSans.className} h-screen w-screen p-4  flex justify-center items-center text-black`}>
     <Card></Card>
     
    </div>
  );
}
