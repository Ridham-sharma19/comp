import Content from "../components/content"
import {motion} from "motion/react"
export default function Home() {
  return (
   <div className="[perspective::1000px][transform-style-3d]h-screen w-full bg-neutral-800 flex items-center justify-center">
    <Content></Content>

   </div>
  );
}
