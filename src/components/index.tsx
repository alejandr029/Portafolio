
import Project from "./Project/Project.tsx";
import Skills from './Skills/Skills.tsx';
import About from './about/about.tsx';
import Extra from './extra/extra.tsx';


export const Userdata = () => {
    return (
    <>
        <section className="card_content" id="about">
            <About />    
        </section>
        
        <section className="card_content" id="expirences">
            <Project />
                
        </section>

        <section className="card_content" id="skills">
            <Skills/>
        </section>

        <section className="card_content" id="Extra">
            <Extra />
        </section>


    </>
    );

};