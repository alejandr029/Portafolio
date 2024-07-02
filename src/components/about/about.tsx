
import Icons_About from "../icons";

export default function About() {
    return(
        <div className=" w-[80%] text-left">
            <div className="my-[25%]">
                <h3 className="text-5xl font-bold" >Hi I'm Alejandro</h3>
                <h2 className=" font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent ">Software Developer</h2>

                <section className="information text-xl pt-10 w-[90%] ">
                    <p>
                    As a junior programmer, I'm on a journey to explore the intricacies of web development, with a focus on both back-end functionality and front-end aesthetics. While I'm still in the early stages of my career, I'm eager to tackle challenges head-on and expand my knowledge base.
                    </p>

                    

                </section>

                <ul className="grid grid-cols-4 grid-flow-row  ">
                    <li className="w-auto">
                    <Icons_About Name="Linkedin" href ="https://www.linkedin.com/in/jesus-alejandro-velazquez-3126bb271">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 mx-1">
                            <path fill="#fff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg>
                    </Icons_About>
                    </li>

                </ul>
            </div>

            <div className="mt-[40vh] mb-[20vh]  ">
            <h2 className=" font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent capitalize">about me</h2>

            <section className="information text-xl md:flex items-center">
                <div>
                    <p>
                    In my journey so far, I've begun to familiarize myself with languages like Python, and JavaScript, finding joy in unraveling their complexities and discovering their potential applications. With each line of code I write, I gain a deeper understanding of the mechanics behind digital experiences.
                    </p>

                    <p className="mt-5">
                    "I'm always on the lookout for opportunities to experiment with new technologies and tools, constantly seeking to enhance my skills and broaden my horizons. There's something incredibly gratifying about the process of transforming a static website into a dynamic, immersive platform that engages users on a whole new level."
                    </p>
                </div>

                <img 
                    src="/Portafolio/avataaars.png" 
                    alt="avatar images"  
                    className=" w-[275px] h-[300px] rounded-full "
                />

            </section>
            </div>
        </div>
    );
}