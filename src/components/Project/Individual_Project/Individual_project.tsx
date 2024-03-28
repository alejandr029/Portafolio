import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ProyectsList from "../../../assets/Project_information.json";
import { Arrow } from "../../../assets/icons_skills/Icons.tsx";
import Technologies from "./technologies.tsx";

export default function Individual_project() {

    const { number } = useParams();
    const index : any= number;
    let Datajson;
    const navigate = useNavigate();

    if (number !== undefined) {
        Datajson = ProyectsList[index]; 

        if (Datajson === undefined || Object.keys(Datajson).length === 0) {
              return <Navigate to="/" />
        }
        
    }

    return (
      <article className='md:flex'>
        <section className='md:w-[70%] md:h-[100vh] max-md:h-[50vh] flex'>

          <button className='fixed top-10 left-10 bg-white p-2 rounded-full w-10 h-10 ' onClick={() => navigate('/')}>
            <Arrow />
          </button>
          <div className='w-[70%] h-[50%] m-auto'>
            <div className="carousel">
              {Datajson?.images.map((ress: any, key: any) => (
                <div key={key} id={key + 1} className="carousel-item relative w-full">
                  <img src={`/Portafolio/${ress}`}/>
                </div>
              ))}
              
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {Datajson?.images.map((_ress: any, key: any) => (
                  <a key={key} href={`#${key+1}`} className="btn btn-xs">{key + 1}</a> 
                
                ))}
            </div>
          </div>

        </section>

        <section className='md:w-[30%] md:h-[100vh] right-0 max-md:mb-5 p-2 z-20 fixed max-md:relative bg-gray-800/45 overflow-y-scroll'>
              <div className='my-[5vh]'>
                <h1 className='text-3xl text-left mx-3 font-bold capitalize text-white'>{Datajson?.title} </h1>

                <div className='text-left my-2 mx-3 font-semibold text-white/90'>
                  <div><b>Date:</b> {Datajson?.date}</div>
                  <div><b>Type of Proyect: </b>{Datajson?.type_of_project} </div>
                  <h1 className='text-2xl mt-5 font-bold' >Project Information</h1>
                  <p className='text-lg '>{Datajson?.information}</p>
              </div>
            </div>
            <section className='rounded border-2 border-blue-700 w-[90%] mx-auto text-white'>
              <div className='grid grid-cols-8 text-left'>
                <div className='col-span-3 mx-5 text-xl'>
                  Technologies
                </div>
                <div className='col-span-5 text-xl'>
                  Description
                </div>
                {Datajson?.technologies.map((ress: any, index: any) => (
                    <Technologies key={index} Technologies={ress} />
                ))}
                
              </div>
            </section>

        </section>
      </article>
    );
}






