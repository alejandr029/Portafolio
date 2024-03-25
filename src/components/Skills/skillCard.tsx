export default function SkillCard({children, title, classStyle}: any) {
    return(
        <div className={`rounded-2xl bg-gray-800/45 logo_shadow ${classStyle}`} >
            <h3 className="py-5 capitalize text-2xl">{title}</h3>
            <ul className='grid grid-cols-3 grid-flow-row gap-4 py-5'>
                {children}
            </ul>

        </div>

    );
}