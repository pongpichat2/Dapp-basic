const displayGreeting = async(greeting, contract)=>{
    greeting = await contract.methods.getGreenting().call();
    $("h2").html(greeting)
}
const updateGreeting = (greeting,contract,account) => {
    console.log(greeting,contract,account);
    let input;
    $("#input").change((e)=>{
        input = e.target.value;
    })
    $("#form").submit(async(e)=>{
        e.preventDefault();
        await contract.methods.updateGreeting(input).send({from:account[0],gas:40000});
    })
    displayGreeting(greeting,contract);
}
async function greetingApp(){
    const web3 = await getWeb3();
    const account = await web3.eth.getAccounts();
    const contract= await getContrat(web3);
    let greeting;
    displayGreeting(greeting,contract);
    updateGreeting(greeting,contract,account);
}
greetingApp()