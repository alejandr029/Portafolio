

export const Header = () => {
    return(
      <header className="pt-1 z-20 h-[100vh] w-[20%] fixed justify-center bg-[var(--background-header)] max-md:relative max-md:w-[100%] max-md:h-[50vh] max-md:justify-center ">

        <section className="mx-auto mt-[5vh] w-[60%] h-[90vh] text-white text-left">
            
            <h1 className=" md:text-2xl lg:text-4xl font-bold mt-6 w-[90%] ">Software Developer</h1>
            
            <article className=" mt-10 text-white">
                <p><a className="text-white hover:text-white" href="#about">About</a></p>
                <p><a className="text-white hover:text-white" href="#expirences">Expirences</a></p>
                <p><a className="text-white hover:text-white" href="#skills">Skills</a></p>
                <p><a className="text-white hover:text-white" href="#Extra">Extra</a></p>
            </article>


        </section>
      </header>
    );

};