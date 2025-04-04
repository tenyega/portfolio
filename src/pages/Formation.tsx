import Nav from "../components/nav";

export default function Formation(){
    const dipliomeList = [{
        
        "title": "Mastère Manager de Solutions Digitales et Data",
        "logo": "../assets/logoImie.png",
        "center": "IMIE Paris",
        "location": "70 rue Anatole France, 92300 Levallois-Perret",
        'year': "2025"
    },{
        
        "title": "Concepteur Developpeur D'Application",
        "logo": "../assets/logoPrepavenir.png",
        "center": "Prepavenir",
        "location": "38 rue de la station, 95103 Franconville",
        'year': "2024"
    },{
        
        "title": "Developpeur Web et Web Mobile",
        "logo": "../assets/logoPrepavenir.png",
        "center": "Prepavenir",
        "location": "38 rue de la station, 95103 Franconville",
        'year': "2024",
        'link':"https://www.prepavenir-formation.fr/"
    },
    ]

    

    
    return (<>
        <Nav />
        <>
                                    <div className="grid grid-cols-3 gap-5 px-5 py-10">

                {
                  
                dipliomeList.map((d) => (

                        <div className="p-3 text-center border rounded-md border-neutral-700 w-50%" key={d.title}>
                           
                            <img src={d.logo } alt={d.logo } className="mb-3"  width={400} height={200}/>
                            <h4 className="text-slate-500">{d.title}</h4>
                            <h3 className="text-slate-500">{d.year}</h3>
                            <p className="text-slate-500">{d.center} {d.location}  <a href={d.link} className="underline">Link</a></p>
                        </div>

                    ) )                   
                }

            </div>
        
        </>
    </>)
}