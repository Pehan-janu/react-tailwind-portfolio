import { Code,User,Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
            <h3 className="text-2xl font-semibold"> Passionate Full Stack Developer</h3>
            
            <p className="text-muted-foreground">
              I am a dedicated second year Computer Science undergraduate with a strong passion for Full Stack Development. I enjoy creating dynamic, user friendly web applications that solve real world problems and deliver meaningful experiences. With hands on experience in frontend and backend technologies, including the MERN stack, Java, and cloud fundamentals like AWS, I continuously explore modern tools and frameworks to enhance my skills.
              
            </p>

            <p className="text-muted-foreground">
                I thrive in collaborative environments and enjoy working on projects that challenge my problem solving abilities. Currently, I am also learning about AI and other emerging technologies to stay ahead in the fast paced tech industry. My goal is to leverage my knowledge and creativity to build innovative solutions that make a positive impact in the digital world while growing as a skilled Full Stack Developer
            </p>

            <div className=" flex flex-col sm:flex-row gap-4 pt-4 justify-center"> 
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
                 </a>

                 <a href="/Pehan_Gunawardana_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary  hover:bg-primary/10 transition-color duration-300">
                 Download CV
                 </a>

            </div>
           </div>

           <div className="grid grid-cols-1 gap-6">
            
            <div className="gradient-border p-6 card-hover"> 
               <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code  className="h-6 w-6 text-primary"/>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Develepment</h4>
                    <p className="text-muted-foreground ">
                      Creating responsive websites and web applications with modern frameworks
                    </p>
                  </div>
                </div>  
            </div>  

            <div className="gradient-border p-6 card-hover">
               <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User  className="h-6 w-6 text-primary"/>
                  </div>
                   <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design & Prototyping</h4>
                    <p className="text-muted-foreground ">
                        Designing user-friendly interfaces and experiences, creating interactive prototypes to visualize and test ideas before development
                    </p>
                  </div>
                </div>   
            </div> 

            <div className="gradient-border p-6 card-hover">
               <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase  className="h-6 w-6 text-primary"/>
                  </div>
                   <div className="text-left">
                    <h4 className="font-semibold text-lg">Mobile App Develepment</h4>
                    <p className="text-muted-foreground ">
                     Creating cross-platform mobile applications that combine performance, usability, and sleek interfaces.
                    </p>
                  </div>
                </div> 
            </div> 
            
            </div>

          
        </div>
      </div>
    </section>
  );
};