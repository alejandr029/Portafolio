
import Icons_About from "./icons";

export default function About() {
    return(
        <>


        <div className=" mx-auto w-[60%] text-left mt-[20vh]">
            <h3 className="text-3xl font-bold pt-20" >Hi I'm Alejandro</h3>
            <h2 className=" font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">Software Developer</h2>

            <section className="information text-lg pt-10 ">
                <p> 
                    Engineering student focused on back-end programming and with knowledge of front-end design, in a web environment as an application, with knowledge of different programming languages, with an interest in learning and developing in the workplace.
                </p>

                <p className="mt-2 ">
                    "I like use technologies and his tools to generate a new websites functionabilities."
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
        </>
    );
}