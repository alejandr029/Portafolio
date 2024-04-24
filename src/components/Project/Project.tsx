import CardProjects from "./card";

import ProyectsList from "../../assets/Project_information.json";



export default function Project() {
    return(
        <>
        <h3 className="title text-3xl font-bold ">Project Expirences</h3>

        <div className=" grid xl:grid-cols-3 lg:grid-cols-2  grid-flow-row mx-auto  mt-20 md:w-[80%]">
            {ProyectsList.map((proyect , index) => (
                <CardProjects key={index} project={proyect} />
            ))}
        </div>
        </>
    )

}