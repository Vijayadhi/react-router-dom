import React from 'react'

function Development() {
    let main_content = [
        {
            title: "Development",
            description: "Development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services",
            types: {
                type1: "Php",
                type2: " Python",
                type3: "Ruby"
            },
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscoopcar.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fvideoblocks-targeted-web-development-solutions-as-an-animation-concept-4k-uhd-motion-video_bhcv2dxab_thumbnail-full09-1-1024x576.png&f=1&nofb=1&ipt=4ad053d684cf4997d9a95d5c10235c8ca3f87569389e4ac089f7dd4d217724fe&ipo=images"
        }
    ]

    let projects = [
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechnology365blogs.weebly.com%2Fuploads%2F1%2F4%2F2%2F7%2F142711060%2Fwhat-is-web-development_orig.png&f=1&nofb=1&ipt=dd4e82fd2a42033ad38789490d13835978894243c3829563c5a32fdb150e11a3&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fba%2F0e%2Fb8%2Fba0eb82dbe74fb21925083c2ea7475b4.jpg&f=1&nofb=1&ipt=64bc0a177176bab2258b48f1315935b364c472fd5345970c92419bc8c0b75345&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdreamlandit.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fweb-design-development.jpg&f=1&nofb=1&ipt=900f64034a2a4bc6a9c0d2795565665c82c82b5eb64ba9b5307f48bffff0e93c&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscoopcar.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fvideoblocks-targeted-web-development-solutions-as-an-animation-concept-4k-uhd-motion-video_bhcv2dxab_thumbnail-full09-1-1024x576.png&f=1&nofb=1&ipt=4ad053d684cf4997d9a95d5c10235c8ca3f87569389e4ac089f7dd4d217724fe&ipo=images",
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

export default Development