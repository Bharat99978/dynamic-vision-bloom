import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section className="hero-gradient section-padding min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6 relative">
            {/* First aura layer - largest and slowest */}
            <div className="absolute inset-0 rounded-full bg-green-400/20 animate-[pulse_3s_ease-in-out_infinite] scale-[2.0]" />
            
            {/* Second aura layer - medium size and speed */}
            <div 
              className="absolute inset-0 rounded-full bg-green-300/30 animate-[pulse_2.5s_ease-in-out_infinite] scale-[1.75]" 
              style={{ animationDelay: '0.5s' }} 
            />
            
            {/* Third aura layer - smaller and faster */}
            <div 
              className="absolute inset-0 rounded-full bg-green-200/40 animate-[pulse_2s_ease-in-out_infinite] scale-[1.5]" 
              style={{ animationDelay: '1s' }} 
            />
            
            {/* Innermost aura layer - closest to avatar */}
            <div 
              className="absolute inset-0 rounded-full bg-green-100/50 animate-[pulse_1.5s_ease-in-out_infinite] scale-[1.25]" 
              style={{ animationDelay: '1.5s' }} 
            />
            
            {/* Avatar with white border */}
            <Avatar className="h-32 w-32 border-4 border-white relative z-10 shadow-lg">
              <AvatarImage src="/lovable-uploads/110bf7e1-66b0-4393-99fc-b85b152b1b03.png" alt="भारत सिंग" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            भारत सिंग
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-2">
            Full Stack Developer
          </h2>
          <p className="text-lg text-white/80 mb-2">
            Nagpur, Maharashtra 440022, India
          </p>
          <p className="text-lg text-white/80 mb-6">
            Website:{" "}
            <a
              href="https://bootdey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/90 underline"
            >
              https://bootdey.com
            </a>
          </p>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/Bharat99978"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.instagram.com/freefireindia899h/?hl=ur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://x.com/FireBharat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://wa.me/+919322461670"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};