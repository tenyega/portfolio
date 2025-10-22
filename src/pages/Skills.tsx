import { useState } from "react"
import Project from "../components/project"
import Nav from "../components/nav";

export default function Skills() {
    const [choice, setChoice] = useState("All");
    const skillList = [
     {
            name: "JAVA",
            image: "https://tse2.mm.bing.net/th/id/OIP.XO0b3dLefD7m5uDZHzZBTAHaDH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
            desc:"Java with Spring Boot is a powerful framework for building production-ready, stand-alone web applications with minimal configuration."
        },
    {
            name: "Flutter",
            image: "https://cdn.icon-icons.com/icons2/2108/PNG/512/flutter_icon_130936.png",
            desc:"Flutter is Google’s toolkit for building fast, cross-platform apps with a single codebase using Dart."
        },
     {
            name: "Phalcon",
            image: "https://philosophydcit101.files.wordpress.com/2018/03/php-phalcon-logo-1.jpg",
            desc:"Phalcon is a high-performance PHP framework built as a C extension, following the MVC pattern and optimized for low resource usage."
        },
        {
            name: "Symphony",
            image: "https://api.iconify.design/logos:symfony.svg?color=%23ffffff",
            desc:"FrameWork PHP for modern and robust web applications "
        }, {
            name: "Adonis Js ",
            image: "https://api.iconify.design/logos:adonisjs-icon.svg?color=%23888888",
            desc:"Node fullstack framework for modern and robust web applications"
        }, {
            name: "React",
            image:"https://api.iconify.design/logos:react.svg?color=%23ffffff",
            desc:"JS Library for building UI web applications"
        },{
            name: "HTML",
            image: "https://api.iconify.design/devicon:html5-wordmark.svg?color=%23888888",
            desc:"A standard markup language used to create and structure content on the web."
        }, {
            name: "CSS",
            image: "https://api.iconify.design/devicon:css3-wordmark.svg?color=%23888888",
            desc:"A style sheet language used to describe the presentation and design of HTML documents."
        }, {
            name: "JS",
            image: "https://api.iconify.design/skill-icons:javascript.svg?color=%23888888",
            desc:"A programming language used to create dynamic and interactive effects within web browsers."
        },{
            name: "Wordpress",
            image: "https://api.iconify.design/skill-icons:wordpress.svg?color=%23888888",
            desc:"A CMS used for building and managing websites"
        },{
            name: "PHP",
            image: "https://api.iconify.design/logos:php.svg?color=%23888888",
            desc:"Server-side scripting language designed for web development, enabling the creation of dynamic web pages "
        },{
            name: "SQL",
            image: "https://api.iconify.design/devicon:azuresqldatabase.svg?color=%23888888",
            desc:"Programming language used for managing and manipulating relational databases "
        },{
            name: "Cloud Computing",
            image: "https://api.iconify.design/eos-icons:cloud-computing-outlined.svg?color=%23888888",
            desc:"Delivery of computing services, including storage, processing power, and software, over the internet "
        },{
            name: "Cyber Security",
            image: "https://static.vecteezy.com/system/resources/previews/003/184/299/original/cyber-security-data-protection-logo-vector.jpg",
            desc:"protecting computer systems, networks, and data from digital attacks, unauthorized access and practice etc"
        },{
            name: "Artificial Intellegence",
            image: "https://th.bing.com/th/id/OIP.D7XOIKRjV2hAwetyjyC1wQHaFe?rs=1&pid=ImgDetMain",
            desc:"Simulation of human intelligence in machines that are programmed to think and learn like humans,"
        },{
            name: "Photoshop",
            image: "https://api.iconify.design/vscode-icons:file-type-photoshop.svg?color=%23888888",
            desc:"graphics editing software , widely used for manipulating and enhancing digital images"
        },
    ]

    
    return (
        <>
            <Nav />
            <section className="flex gap-5 px-5 py-10">
                
            <div className="w-1/3">
                    <h1 className="mb-5 text-3xl font-bold text-white">Skillset</h1>
                    <p className="leading-relaxed text-slate-500">With skills in different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
                </div>
                <ul className="grid w-2/3 grid-cols-4">
                {skillList.map((skill) => (
               
                    <li key={skill.name} data-choice={skill.name}
                    onClick={()=>setChoice(skill.name)} className="cursor-pointer">
                    <img src={skill.image} alt={skill.name + " logo"}  width={ 32 }  className="transition ease-in-out hover:scale-125"/> 
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                 
                    <p className="text-slate-500">{skill.desc}</p>
                 </li>
                   
                    
                 ))} </ul>
            </section> 
            <section className="text-white">
            <Project prop={choice}/>

            </section>
      
      </>
    )
  }
  