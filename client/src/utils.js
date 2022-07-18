const getWeb3 = () => {
    return new Promise((resolve,reject)=>{
        window.addEventListener("load", async () =>{
            try{
                const web3 = new Web3("HTTP://127.0.0.1:7545");
                resolve(web3);
            }catch(er){
                reject(er)
            }
        })
    })
}

const getContrat = async (web3) =>{
    const data = await $.getJSON("./contracts/Greeting.json");
    const networkId = await web3.eth.net.getId();
    const deployNetwork = data.networks[networkId];
    const greeting = new web3.eth.Contract(data.abi, deployNetwork && deployNetwork.address)
    return greeting;
}