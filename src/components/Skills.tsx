

export default function Skills (){
    return(
        <>
            <h3 className="title text-3xl font-bold">Skills</h3>
            <section className="grid grid-cols-4 grid-flow-row gap-4 mx-auto w-[80%] mt-5">
                
                
                <div className="rounded-2xl bg-slate-950 col-span-4">
                    <h3 className="py-5 capitalize text-2xl">Backend</h3>

                    <ul className="grid grid-cols-5 grid-flow-row gap-4 py-5">
                    <li>
                            <img className="icons" src="./icons/backend/Python.svg" alt="" />
                            Python
                        </li>
                        <li>
                            
                            <img className="icons" src="./icons/backend/Csharp.svg" alt="" />
                            C#
                        </li>
                        <li>
                            
                            <img className="icons" src="./icons/backend/Django.svg" alt="" />
                            Django
                        </li>
                        <li>
                            <img className="icons" src="./icons/backend/NodeJs.svg" alt="" />
                            Node Js
                        </li>
                        <li>
                            <img className="icons" src="./icons/backend/DotNet.svg" alt="" />
                            DotNet
                        </li>

                    </ul>

                </div>


                <div className="rounded-2xl bg-slate-950 col-span-2">
                    <h3 className="py-5 capitalize text-2xl">Fronend</h3>
                    <ul className="grid grid-cols-3 grid-flow-row gap-4 py-5">
                        
                        <li>
                            <img className="icons" src="./icons/frontend/Javascript.svg" alt="" />
                            JavaScript
                        </li>
                    </ul >
                </div>

                <div className="rounded-2xl bg-slate-950 col-span-2">
                    <h3 className="py-5 capitalize text-2xl">Technologies</h3>

                    <ul className="grid grid-cols-3 grid-flow-row gap-4 py-5">
                        <li>
                            <img className="icons" src="./icons/technologie/Linux.svg" alt="" />
                            Linux
                        </li>
                        <li>
                            <img className="icons" src="./icons/technologie/Git.svg" alt="" />
                            Git
                        </li>
                    </ul>

                </div>

                <div className="rounded-2xl bg-slate-950 col-span-4">
                    <h3 className="py-5 capitalize text-2xl">Learning</h3>

                    <ul className="grid grid-cols-4 grid-flow-row gap-4 py-5">
                        <li>
                            <img className="icons" src="./icons/Learning/Docker.svg" alt="" />
                            Docker
                        </li>

                    </ul>

                </div>

            </section>
            
        </>
    );
}