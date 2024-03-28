import { Link } from "react-router-dom";

export default function CardProjects({project}: any) {
    return(
    <Link className="max-w-sm mx-1 border rounded-t-lg shadow bg-gray-800 border-gray-700 logo_shadow m-2" to={`/Individual_project/${project.id}`}>
        
        <picture className="rounded-t-lg h-[186px] flex items-center bg-white">
            <img className="w-full h-full object-cover" src={`/portfolio/${project.icon}`} alt={project.description}/>
        </picture>


    <div className="p-5 text-left">
        
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white capitalize">{project.title}</h5>
        <div className="flex items-center mt-2.5 mb-5">
            {project.technologies.map((technology:any, index:any) => (
                <span key={index} className="bg-white text-black text-xs font-semibold px-2.5 py-0.5 rounded ms-3"> {technology}</span>
            ))}
        </div>
        
        <p className="mb-3 font-semibold text-gray-200/70 text-xl">
            {project.rewiew}
        </p>

    </div>
    </Link>
    );
}
