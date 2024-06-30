

interface Project {
    link: string;
    image: string;
    name: string;
    desc: string;
    techno: string[];
}

interface Props {
    prop: string;
}

 /**
     * This function contains all the list of projects done. 
     */
export default function Project({ prop }: Props) {    
   
    const projectList = [
        {
            link:"https://hackathonfinal-kq82swkkl-tenyegas-projects.vercel.app/",
            image: "../assets/hackathon.png",
            name: "Hackathon",
            desc: "Detection of object in live, display and filter at the same time  ",
            techno: [ "All",  "HTML" ,"CSS","JS","IndexDB"]
        },
        {
            link: "https://cinemax-tau-brown.vercel.app/",
            image:"../assets/cinemax.png",
            name: "Cinemax",
            desc: "Searching different cinemax in the data base",
            techno:["All","React Js","HTML","CSS","Typescript"]
        },
        {
            link: "https://swissasiapartner.com",
            image:"../assets/swissasiapartner.png",
            name: "Swiss Asia Partner",
            desc: "Searching different cinemax in the data base",
            techno:["All","Wordpress", "Css"]
        }, {
            link: "https://github.com/tenyega/final-symfony",
            image:"http://via.placeholder.com/200",
            name: "E-Commerce ",
            desc: "E-commerce shop for ", 
            techno:["All","Symphony","HTML","CSS", "SQL"]
        }, {
            link: "https://github.com/tenyega/hotel-reservation", 
            image: "http://via.placeholder.com/200",
            name: "Hotel Reservation",
            desc: "Reservation of different rooms of a hotel", 
            techno:["All","Symphony","HTML","CSS","SQL"]
        },{
            link: "https://github.com/tenyega/react-express",
            image:"http://via.placeholder.com/200",
            name: "React Express",
            desc: "Placement of different composant in a website ", 
            techno:["All","React","Vite","tailwindcss","HTML","CSS"]
        }, {
            link: "https://github.com/tenyega/portfolio",
            image:"http://via.placeholder.com/200",
            name: "Portfolio",
            desc: "Creating the portfolio using different platforms including React and Typescript ",
            techno:["All","React Js","HTML","CSS","Typescript"]
        }
    ]
    const results = projectList.filter((p) => p.techno.includes(prop));
    return (
        <>
            <div className="grid grid-cols-3 gap-5 px-5 py-10 ">
                {
                    results.map((p) => (
                        <div className="p-3 text-center border rounded-md border-neutral-700" key={p.name}>
                           
                            <img src={p.image } alt={p.image } className="mb-3"  width={400} height={200}/>
                            <h4 className="text-slate-500">{p.name}</h4>
                            <p className="text-slate-500">{p.desc} <a href={p.link} className="underline">Link</a></p>
                        </div>

                    ) )                   
                }

            </div>
        
        </>
    );
}
