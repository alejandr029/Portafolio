import { Link } from "react-router-dom";

export default function CardProjects({project}: any) {
    return(
    <Link className="max-w-sm mx-1 border rounded-t-lg shadow bg-gray-800 border-gray-700" to={`/Individual_project/${project.id}`}>
        
        <img className="rounded-t-lg" src={project.icon} alt={project.description}  />

    <div className="p-5">
        
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white capitalize">{project.title}</h5>
        <div className="flex items-center mt-2.5 mb-5">
            {project.technologies.map((technology:any, index:any) => (
                <span key={index} className="bg-white text-black text-xs font-semibold px-2.5 py-0.5 rounded ms-3"> {technology}</span>
            ))}
        </div>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.rewiew}
        </p>

    </div>
    </Link>
    );
}