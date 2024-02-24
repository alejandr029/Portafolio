import { Csharp, Django, DotNet, NodeJs, Python } from '../assets/icons_skills/backend.tsx';
import { Angular, Bootstrap, Css, HTML, JavaScript, React, TypeScript } from '../assets/icons_skills/frontend.tsx';
import { Docker, Tailwind } from '../assets/icons_skills/learning.tsx';
import { Git, Linux } from '../assets/icons_skills/technologie.tsx';

export default function Skills (){
    return(
        <>
            <h3 className="title text-3xl font-bold">Skills</h3>
            <section className="grid grid-cols-6 grid-flow-row gap-4 mx-auto w-[80%] mt-5">
                
                
                <div className="rounded-2xl bg-slate-950 col-span-4">
                    <h3 className="py-5 capitalize text-2xl">Backend</h3>

                    <ul className="grid grid-cols-4 grid-flow-row gap-4 py-5">
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

                    </ul>

                </div>


                <div className="rounded-2xl bg-slate-950 col-span-2">
                    <h3 className="py-5 capitalize text-2xl">Fronend</h3>
                    <ul className="grid grid-cols-3 grid-flow-row gap-4 py-5">
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
                    </ul >
                </div>

                <div className="rounded-2xl bg-slate-950 col-span-2">
                    <h3 className="py-5 capitalize text-2xl">Technologies</h3>

                    <ul className="grid grid-cols-3 grid-flow-row gap-4 py-5">
                        <li>
                            <Linux />
                            Linux
                        </li>
                        <li>
                            <Git />
                            Git
                        </li>
                    </ul>

                </div>

                <div className="rounded-2xl bg-slate-950 col-span-4">
                    <h3 className="py-5 capitalize text-2xl">Learning</h3>

                    <ul className="grid grid-cols-4 grid-flow-row gap-4 py-5">
                        <li>
                            <Docker />
                            Docker
                        </li>
                        <li>
                            <Tailwind />
                            Tailwind
                        </li>

                    </ul>

                </div>

            </section>
            
        </>
    );
}