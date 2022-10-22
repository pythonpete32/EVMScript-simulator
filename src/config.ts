const config = {
  agent: '0x336252602b3a8a0be336ed942228305173e8082b',
  voting: '0x92462953792d3e84af56edfc74d93e5885d38cc0',
  networkId: 1,
  transactions: [
    {
      to: '0x333A4823466879eeF910A04D473505da62142069', // NATION
      signature: 'transfer(address,uint256)',
      args: ['0x47d80912400ef8f8224531EBEB1ce8f2ACf4b75a', '42069'],
    },
    {
      to: '0x333A4823466879eeF910A04D473505da62142069', // NATION
      signature: 'transfer(address,uint256)',
      args: ['0x0533F9d586ABd3334a0E90cA162602D6574F0493', '42069'],
    },
  ],
};

export default config;
