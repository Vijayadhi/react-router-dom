import React from 'react'

function CyberSecurity() {
    let main_content = [
        {
            title: "Cyber Security",
            description: "Computer security, cybersecurity, digital security, or information technology security is the protection of computer systems and networks from attacks by malicious actors that may result in unauthorized information disclosure, theft of, or damage to hardware, software, or data, as well as from the disruption or misdirection of the services they provide. ",
            types: {
                type1: "Cryptography",
                type2: "Hacking",
                type3: "Blockchain"
            },
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.leapit.co.uk%2Fwp-content%2Fuploads%2F2019%2F11%2FCyber-Security-Importance-1080x675.jpeg&f=1&nofb=1&ipt=adaa1ba33ec8a3ddd2cf315a5b45785409322bcf301f5e3de97aa264514d6281&ipo=images"
        }
    ]

    let projects = [
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoverlink.com%2Fwp-content%2Fuploads%2F2019%2F10%2FCyber-Security-scaled.jpg&f=1&nofb=1&ipt=227b7e23ba4b11110e4d66dff4eb5ec02c5706bc9d131f35cf06478bc5d5a0d3&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zn0B7wyiXBHQ3EzrKCM0dQHaEU%26pid%3DApi&f=1&ipt=5abc242995a9a2c47e3d98e7c847d507e95aed39e2fe1530ddad776e291a4ab7&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspecopssoft.com%2Fde%2Fwp-content%2Fuploads%2Fsites%2F8%2F2022%2F07%2FCyber-Security-Header.jpeg&f=1&nofb=1&ipt=37a938fb8e0638a038b684fa748b2895139c8492bd5e69149f7e6b93ba77040c&ipo=images",
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

export default CyberSecurity