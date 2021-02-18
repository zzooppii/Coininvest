//house
module.exports = function(callback) {
    web3.eth.getAccounts().then((accounts, error) => {
        console.log(accounts[0])
        web3.eth.sendTransaction({from:accounts[0],
                                    to: "0xB2395dB67CDA84501066822FcD2CB143d46c2a3E",
                                 value:web3.utils.toWei("10", "ether")}, callback());
    });
    //내 컨트랙트 주소 0xB2395dB67CDA84501066822FcD2CB143d46c2a3E
}
