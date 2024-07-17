import React from 'react'

function CloudComputing() {
    let main_content = [
        {
            title: "Cloud Computing",
            description: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center. ",
            types: {
                type1: "AWS",
                type2: "G-Cloud",
                type3: "Azure"
            },
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F149695847.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2023%2F04%2FAWS-on-Quantum-Cloud-2.jpg&f=1&nofb=1&ipt=78be08677bbe8cc48b5e28afa7677854c300aff4fb856f77cd39c538d3a278b0&ipo=images"
        }
    ]

    let projects = [
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.windowserver.it%2Fwp-content%2Fuploads%2F2017%2F09%2Fhero_azure_file_sync.jpg&f=1&nofb=1&ipt=a4736a2df999505a9da1c42727efb8e76dbc7cfac171b8ab7196c2a60fc6d693&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.educba.com%2Facademy%2Fwp-content%2Fuploads%2F2019%2F09%2Fwhat-is-google-cloud-platform.jpg&f=1&nofb=1&ipt=0845bfcab49edf551e6b0eb53c86a88092f202642cbfb819297dadcecc3466f1&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fallcode.com%2Fwp-content%2Fuploads%2F2021%2F02%2FGroup-169-3.png&f=1&nofb=1&ipt=6bfe4f5aaa373574add3092543ff0e847083df85fac42976de34fe2e0986188a&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.diamondit.com.au%2Fhs-fs%2Fhubfs%2FiStock-1408150571.jpg%3Fwidth%3D2144%26height%3D1161%26name%3DiStock-1408150571.jpg&f=1&nofb=1&ipt=47d2e262d11d021f72606bd447e2c4146315906a96219d1e9bde3ed5cdb4ce6e&ipo=images",
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

export default CloudComputing