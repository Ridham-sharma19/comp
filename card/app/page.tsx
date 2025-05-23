import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { Content } from "@/components/content";
export default function Home() {
  return (
    <div className={`${GeistSans.className}`}>
      <Content></Content>
    </div>
  );
}
