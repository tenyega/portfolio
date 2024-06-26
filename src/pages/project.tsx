export default function Project({ projects }: any) {
    
    const projectList = [
        {
            lien:"https://github.com/QuentinVigier/Hackathon",
            image: "http://via.placeholder.com/400",
            name: "Hackathon",
            desc: "Detection dobject en live et de lister et filter.  ",
            techno: [{ name: "All" }, { name: "HTML" }, { name:"CSS"}, {name:"JS"}]
        }, {
            lien: "https://github.com/tenyega/final-symfony",
            image:"http://via.placeholder.com/400",
            name: "E-Commerce ",
            desc: "E-commerce shop for ", 
            techno:[{name:"All"},{name:"Symphony"}, {name:"HTML"}, {name:"CSS"}]
        }, {
            lien: "https://github.com/tenyega/hotel-reservation", 
            image: "http://via.placeholder.com/400",
            name: "Hotel Reservation",
            desc: "Reservation of different rooms of a hotel", 
            techno:[{name:"All"},{name:"Symphony"},{name: "HTML"}, {name:"CSS"}]
        },{
            lien: "https://github.com/tenyega/react-express",
            image:"http://via.placeholder.com/400",
            name: "React Express",
            desc: "Placement of different composant in a website ", 
            techno:[{name:"All"},{name:"React JS"},{name:"Vite"},{name:"tailwindcss"}, {name:"HTML"}, {name:"CSS"}]
        }, {
            lien: "https://github.com/tenyega/portfolio",
            image:"http://via.placeholder.com/400",
            name: "Portfolio",
            desc: "Creating the portfolio using different platforms",
            techno:[{name:"All"},{name:"React Js"}, {name:"HTML"}, {name:"CSS"}, {name:"Typescript"}]
        }
    ]


    return (
        <>
            <div className="grid grid-cols-3 gap-5 px-5 py-10 ">
                {
                    projectList.map((p) => (
                        <div className="p-3 text-center border rounded-md border-neutral-700" key={p.name}>
                            <img src={p.image } alt="" className="mb-3" />
                            <h4 className="text-slate-500">{p.name}</h4>
                            <p className="text-slate-500">{p.desc} <a href={p.lien} className="underline">Official Link</a></p>
                        </div>

                    ) )                   
                }

            </div>
        
        </>
    );
}
