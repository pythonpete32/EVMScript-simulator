const config = {
    agent: "",
    voting: "",
    networkId: 1,
    transactions: [
        {
            to: "0x1234...",
            signature: "approve(address,uint256)",
            args: ["0x1234...", "1000"],
        },
        {
            to: '0x1234...',
            signature: "transfer(address,uint256)",
            args: ['123', 'abc']
        }
    ]
}

export default config