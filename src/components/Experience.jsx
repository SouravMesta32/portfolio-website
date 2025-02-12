import { EXPERIENCES } from "../constants"


export const Experience = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">
            Experience
        </h2>
        <div>
            {EXPERIENCES.map((exp ,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-400 ">
                            {exp.year}
                        </p>
                    </div>
                    <div className="w-full w-max-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {exp.role} -(" ")
                            <span className="text-sm text-stone-500">
                                {exp.company}
                            </span>
                            <p className="mb-4 text-stone-400">
                                {exp.description}
                                {exp.technologies.map((tech, index)=>(
                                    <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-semibold text-stone-300" key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </p>
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
