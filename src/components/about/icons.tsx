export default function Icons_About({Name , children , href}:any) {

    return(

        <a className="inline-flex items-center justify-center w-auto h-10 px-4 me-2 text-sm font-semibold text-gray-300 bg-gray-800 rounded-full mt-5 hover:text-gray-300" href={href}>
            {children} {Name}
            
            <span className="absolute px-2 w-1 h-1 m-[-1] overflow-hidden ">{Name}</span>
        </a>


    );
}