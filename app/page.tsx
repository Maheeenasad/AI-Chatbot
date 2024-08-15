import { Button } from "@/components/ui/button";
import {Chatbot} from "@/components/component/Chatbot";

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
   position: 'absolute',
   top: '-10px', // Adjust as needed
   left: '-10px', // Adjust as needed
   width: 'calc(100% + 20px)', // Adjust as needed
   height: 'calc(100% + 20px)', // Adjust as needed
   backgroundImage: `url('/background.jpg')`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   filter: 'blur(10px)',
   zIndex: -1,
   pointerEvents: 'none',
   backgroundColor: 'transparent'
  }}></div>
   <main className="flex items-center justify-center h-screen w-full" style={{ position: 'relative', zIndex: 1 }}>
   
     <Chatbot />
   </main>
   </div>
  );
}
