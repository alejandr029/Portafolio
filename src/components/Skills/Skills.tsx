import { Csharp, Django, DotNet, NodeJs, Python } from '../../assets/icons_skills/backend.tsx';
import { Angular, Bootstrap, Css, HTML, JavaScript, React, TypeScript } from '../../assets/icons_skills/frontend.tsx';
import { Docker, Rust, Tailwind } from '../../assets/icons_skills/learning.tsx';
import { Git, Linux } from '../../assets/icons_skills/technologie.tsx';
import SkillCard from './skillCard.tsx';

export default function Skills (){
    return(
        <>
            <h3 className="title text-3xl font-bold">Skills</h3>
            <section className="grid grid-cols-6 grid-flow-row gap-4 mx-auto w-[80%] mt-5">

                <SkillCard title="Backend" classStyle="col-span-4">
                        <li>
                            <Python />
                            Python
                        </li>
                        <li>
                            
                            <Csharp />
                            C#
                        </li>
                        <li>
                            
                            <Django />
                            Django
                        </li>
                        <li>
                            <NodeJs />
                            Node Js
                        </li>
                        <li>
                            <DotNet />
                            DotNet
                        </li>
                </SkillCard>

                <SkillCard title="Fronend" classStyle="col-span-2">
                        <li>
                            <HTML />
                            HTML
                        </li>
                        <li>
                            <Css />
                            CSS
                        </li>
                        <li>
                            <JavaScript />
                            JavaScript
                        </li>
                        <li>
                            <TypeScript />
                            TypeScript
                        </li>
                        <li>
                            <Bootstrap />
                            Bootstrap
                        </li>
                        <li>
                            <Angular />
                            Angular
                        </li>
                        <li>
                            <React />
                            React
                        </li>

                </SkillCard>

                <SkillCard title="Technologies" classStyle="col-span-2">
                        <li>
                            <Linux />
                            Linux
                        </li>
                        <li>
                            <Git />
                            Git
                        </li>
                </SkillCard>

                <SkillCard title="Learning" classStyle="col-span-4">
                        <li>
                            <Docker />
                            Docker
                        </li>
                        <li>
                            <Tailwind />
                            Tailwind
                        </li>

                        <li>
                            <Rust />
                            Rust
                        </li>
                </SkillCard>



            </section>
            
        </>
    );
}