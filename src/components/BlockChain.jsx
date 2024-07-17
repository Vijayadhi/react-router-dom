import React from 'react'

function BlockChain() {
    let main_content = [
        {
            title: "Block Chain",
            description: "Blockchain.com is a platform that lets you access Bitcoin, Ethereum, and other leading cryptocurrencies. You can also explore blockchain data, connect to DeFi, and earn rewards on your crypto.",
            types: {
                type1: "Bitcoin",
                type2: " Ethereum",
                type3: "Crypto"
            },
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kai.or.id%2Fwp-content%2Fuploads%2F2022%2F02%2Fblockchain.jpeg&f=1&nofb=1&ipt=4f6cce564962cb97288506f4fc34c52344e569a75d0f4d97848e1e05e26a83e3&ipo=images"
        }
    ]

    let projects = [
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wq6U3YGNRjaowXSgxrR1PAAAAA%26pid%3DApi&f=1&ipt=ef329f004e5848e4dbe4b0acea15b6f74e4f1e98938b9aa5544215c2c4e43bf1&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0egxzMSUUGj9xolEgkFfuQAAAA%26pid%3DApi&f=1&ipt=733eb85411af30d904a922fd3be344bc4a58a2940b5d47f7ccbe961a2af0f7af&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kLbFVLX81Y1Rt70N0iebmAHaEK%26pid%3DApi&f=1&ipt=0779e5029410cadaa2f4a3063d2aeaf8871a6f291c14a56191c555ae5ba268ff&ipo=images",
        },
        {
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.rpgZwGpLnohbE-RIMvLPpwHaEK%26pid%3DApi&f=1&ipt=ea1975bf902585adaca64fb36d0743e7221c0ec1da26d3412097df9c3c273204&ipo=images",
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

export default BlockChain