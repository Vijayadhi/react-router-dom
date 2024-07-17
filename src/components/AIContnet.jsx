import React from 'react'

function AIContnet() {
    let main_content = [
        {
            title: "Artificial Intelligince",
            description: "Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment and use learning and intelligence to take actions that maximize their chances of achieving defined goals.",
            types: {
                type1: "OpenAI",
                type2: " ChatGPT",
                type3: "BARD"
            },
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fanalytics.wine%2Fwp-content%2Fuploads%2F2021%2F10%2Fai-750X500.jpg&f=1&nofb=1&ipt=5b5b0b0189b1eaf08378d0eca7a1198a48ca6170d89ce5fc5bbd3b1872b4cc7e&ipo=images"
        }
    ]

    let projects = [
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.expresscomputer.in%2Fwp-content%2Fuploads%2F2021%2F03%2F24161745%2FEC_Artificial_Intelligence_AI_750.jpg&f=1&nofb=1&ipt=45090b731a201ff845ab06d1fa7421fd617be1af5dea6791e227cd0f22ca934c&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100089441253578&f=1&nofb=1&ipt=c5f83e70e689f1409e37423dc2315a1c0779620907f6f205c44cc9db7006762e&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.dramx.com%2Fwebsite%2Fdramx%2F20200114090623_%25E5%25A4%2584%25E7%2590%2586%25E5%2599%25A8.jpg&f=1&nofb=1&ipt=0c12474d132cfe687f3f3d2ba683ea3dc53526b2ecb7ea970878b06cc3b356a8&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.vidizmo.com%2Fhubfs%2Fartificial-intelligence.png&f=1&nofb=1&ipt=f92097b4a6b1ce719b6da90a3cee67be7d38d7b7131b4a5275806b096edd7d04&ipo=images",
        },
    ]
    return (
        <>
            <div className="container">
                {main_content.map((e) =>
                    <>
                        <h1 className="my-4">{e.title}</h1>
                        <div className="row">
                            <div className="col-md-8">
                                <img className="img-fluid" src={e.img} alt="" />
                            </div>
                            <div className="col-md-4">
                                <h3 className="my-3">Project Description</h3>
                                <p>{e.description}</p>
                                <h3 className="my-3">Project Details</h3>
                                <ul>
                                    <li>{e.types.type1}</li>
                                    <li>{e.types.type2}</li>
                                    <li>{e.types.type3}</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
                <h3 className="my-4">Related Projects</h3>
                <div className="row">


                    {projects.map((e) =>
                        <>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src={e.img} alt="" />
                                </a>
                            </div>
                        </>
                    )}
                </div>

            </div >
        </>
    )
}

export default AIContnet