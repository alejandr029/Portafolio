const ProyectsList = [
    {
        "date": "May 2023  - Dic 2023",
        "title": "record system for a cosmetic surgery clinic",
        "function": "Software Developer and database desing",
        "company": "University project - UTT",
        "information" : "In this project it was developed during the 8th cautrismestre and the main function was taken to save the data of the patients and with it be more secure.",
        "images" : "./beautysys.webp",
        "description": "Home Page for Beautysys",
        "technologies": [
            "Laravel",
            "laravel jetstream",
            "SQL Server"
        ]

    },{
        "date": "May 2022  - Aug 2023",
        "title": "Finansas",
        "function": "Software Developer",
        "company": "BajaLogics",
        "information" : "This project is based on a financial data application as well as the validation of different vendor products and my role in this project was to generate and improve functionalities as well as bug fixes.",
        "images" : "./finansas.webp",
        "description": "Ui desing for finansaas project",
        "technologies": [
            "Asp.Net",
            "Angular",
            "SQL Server"
        ]

    }
    
];


export default function Project() {
    return(
        <>
        <h3 className="title text-3xl font-bold ">Project Expirences</h3>
        <div className=" mx-auto flex mt-20 flex-wrap w-[80%]">
            {ProyectsList.map((proyect , index) => (
                <article className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-950 text-white m-2 hover:scale-105 " key={index}>
                    <img className="w-full" src={proyect.images} alt={proyect.description} />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>

                        <p className=" text-base">
                        {proyect.information}
                        </p>
                        
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        {proyect.technologies.map((technology, index) => (

                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {technology}</span>
                            
                        
                        ))}
                    </div>
                </article>
            ))}


        </div>
        </>
    )

}

//  <div className="">
//   <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  

// </div> 