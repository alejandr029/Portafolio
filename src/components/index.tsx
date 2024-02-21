import About from './about.tsx';
import Project from "./Project.tsx";
import Skills from './Skills.tsx';


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

        <section className="lg:card_content md:w-[100%]" id="Extra ">
            <h3 className="title text-3xl font-bold ">Extra</h3>


            <article className="text_gratitude text-1xl mt-4">
                This website was created by <b>Velazquez Gonzalez Jesus Alejandro</b>, a student at the <b>Universidad Tecnologica de Tijuana</b>, who took as a reference the use of the <b><a href="https://br/ittanychiang.com/">br/ittanychiang</a></b> and <b><a href="https://mattfarley.ca/">mattfarley</a></b> website.
            </article>
            
        </section>


    </>
    );

};