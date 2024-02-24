export default function Icons_About({Name , children}:any) {

    return(
        
        

        <a className="inline-flex items-center justify-center w-auto h-10 px-4 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 mt-5">
            {children} {Name}
            
            <span className="sr-only">{Name}</span>
        </a>


    );
}