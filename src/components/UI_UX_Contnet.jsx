import React from 'react'

function UI_UX_Contnet() {
    let main_content = [
        {
            title: "UI/UX",
            description: "UX designers focus on solutions to design problems that fit the needs of users. This requires gaining in-depth knowledge of what those user needs are before a user experience designer embarks on creating a design solution. UI designers are more focused on the aesthetics of the product.",
            types: {
                type1: "Figma",
                type2: " Illustrator",
                type3: "Sketch"
            },
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lecciona.com%2Fwp-content%2Fuploads%2F2023%2F02%2Fque-es-el-diseno-ux-ui.jpg&f=1&nofb=1&ipt=c9fe3fb0b356a67f49d1a21a85d03df936b45616ccb2f45bce27bbfc8bad7fe2&ipo=images"
        }
    ]

    let projects = [
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fitbox.id%2Fwp-content%2Fuploads%2F2023%2F02%2Fwhat-is-ui-ux-design_11zon.jpeg&f=1&nofb=1&ipt=f95c78f1a1cdf10a8cd38ba76fb446d66158fef5a96d24e44738ca5be7a19bf3&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcaphe.sfo2.cdn.digitaloceanspaces.com%2Fassets%2Fimages%2Fbasic-ux-for-invision-studio-06.jpg&f=1&nofb=1&ipt=a6bf274efe04d96fc129bd8315f992f6ee13f10e25ee14f079d93b25c845d05c&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sevenmentor.com%2Fwp-content%2Fuploads%2F2019%2F07%2FUI-UX-980x544-1.jpg&f=1&nofb=1&ipt=48cada3828899ae30e1e1bba38ccb288550df0fae4ec04dadeacb276668c327c&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpredictive.co.th%2Fwp-content%2Fuploads%2F2022%2F11%2F1-2-scaled.jpg&f=1&nofb=1&ipt=b9bb546473956120cf747399595e5cacc52d740acb2a051b20582c8ef9fd3a64&ipo=images",
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

export default UI_UX_Contnet