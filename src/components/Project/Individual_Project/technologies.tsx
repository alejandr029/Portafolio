import Thec_info from "../../../assets/Technologies_info.json";

export default function  Technologies({Technologies}: any) {

    let tech:any= Thec_info;
    let name:string = Technologies;
    
    return (
      <>
        <div  className='col-span-3 my-2 mx-5 capitalize'>
          {Technologies}
        </div>
        <div className='col-span-5 my-2 mx-5 '>
          {tech[name]}
        </div>
      </>

    );
}
