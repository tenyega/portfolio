

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
            image:"../assets/final-symfony.png",
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
            link: "https://portfolio-dolma.vercel.app/",
            image:"../assets/portfolio.png",
            name: "Portfolio",
            desc: "Creating the portfolio using different platforms including React and Typescript ",
            techno:["All","React Js","HTML","CSS","Typescript"]
        }, {
            link: "https://final-project-todo-list.vercel.app/",
            image:"../assets/TODOList.png",
            name: "todolist",
            desc: "Created a complete web application for maintaining a todo list by deploying even a JSON server on vercel.com ",
            techno:["All","React Js","HTML","CSS","Typescript","Json-server"]
        }, {
            link: "https://application-de-recette-de-cuisine.vercel.app/",
            image:"../assets/recette_de_cuisine.png",
            name: "recette_de_cuisine",
            desc: "Creation of a web application to search for the recette with the recettes availabile via un JSON server then to deploy using a vercel.com, different functionalities of the recette is also integrated like filter based on categories and type of cuisine and on top of add and remove the recette in favorites",
            techno:["All","React Js","HTML","CSS","Typescript","Json-server"]
        }, {
            link: "https://application-de-recette-de-cuisine.vercel.app/",
            image:"../assets/tsonglams.png",
            name: "tsonglams",
            desc: "Creation of a website entirely in JS( JS Vanilla) part of the project during the formation of Developpeur Web et Web Mobile. ",
            techno:["All","HTML","CSS"]
        }
    ]
    const results = projectList.filter((p) => p.techno.includes(prop));
    return (
        <>
                    <h1 className="mb-5 text-3xl font-bold text-white">My Projects </h1>
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
