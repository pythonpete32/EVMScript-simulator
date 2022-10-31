const config = {
  agent: '0x336252602b3a8a0be336ed942228305173e8082b',
  voting: '0x92462953792d3e84af56edfc74d93e5885d38cc0',
  networkId: 1,
  transactions: [
    {
      to: '0x333a4823466879eef910a04d473505da62142069', // $NATION
      signature: 'approve(address,uint256)',
      args: ['0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', '63042000000000000000'], // $veNATION
    },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x8b532cddcc4962d2feb400db82be81c20264918c', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x5975ec3c60ad6391722fa5a7f8f9c15a3908d596', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xfa4572b4e734587fe0b4d415a92e6654c0c71460', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x8b9adbaf6f54db3b7eeab54add3f0ffa836e52c5', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x4e3072f7b5c075ea5fdeb423da95312c4b99dc22', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x6947a6db176b953db0514dfa5482ce2fdc337ed7', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xeba6120492c505b6211caff86c7757d1df58e8a7', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x51f144d6b9370be879943dc1ba149353a8778033', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x64c8edb2af58db2e0b9d0e52fb4099876210a929', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x24f15402c6bb870554489b2fd2049a85d75b982f', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x529408a6962bae6ca5328874d633738116b89b05', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x9eed555a7b54471a0808cec8d176980323674bc8', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xda8c0dc17495e84e86b37c77d713acacaae83cf2', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xb00d51d3992bc412f783d0e21edcf952ce651d91', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xa2f1356191ca07dcc50c03465bcec0ec25089501', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xf1749bdf6778d3ff38bd69c08452a3a3e0034fcd', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xd67a083e546da29ffb839a0fa741503a432cb101', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x568588cf1896186da51593f4ee5925712112ee30', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x45f233399c7e79b459722053cf96cbe7155b206a', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xe6f4dc7260e77aa6dc2f36596f3d19493eb20b93', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xc54a6c3778016b06cbd126ccc3b5bc06c5f666fb', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x468ada40ecd9a8a7b97e11e73e84df0def6e8628', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x6a26810b6eeed68067d9f63734ba9c7dea750ca5', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xcb678c41afc309c441af88cb61c336dcfc06bee3', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xd3579d5affa632b1630a731897a71dc36e1a70f4', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xf51d8130ea567a1c5e0038d2e38e61398a3ff909', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xd46f32396cf5854af3d2f83d970950616896fffb', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x6916683ab95b955bb73caf8bab92700a2469d758', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xadc73eb8e4673e5fd5a9c709c4379c074991f2d3', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xa4d3316b09125c0d1bbfe757f43d3aae4e4e9d8f', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x8e26545ca905148a209dcb476e081f3716f4ca0f', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xe8743b76d1aaa0c259b5b91f10dc594770b6a08c', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x15fab1cc5262d69853b1196f74d38c7fc96fc6d7', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x0a28c0bdbd3fe526cffc0c7332c2c45c3f347c34', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x9fe442832cda0a96b75404fbedce97a7b50d4c4a', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xbc0ea1b926f099e1b99be3a93e99bfb835b304dd', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x2c3b3338543ec85a98f4cfae089d1821453bb62f', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xa2eae2a749103c5631d5525d136ec7b956dd7c85', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0xf987899db190759486356386fe92676bccdad18c', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x0f465f7ce5a1e26c402177194653c12e7222f127', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x3be9909766f2d5c3bf3e587ff4e53790ba4e40af', '1501000000000000000'],
    // },
    // {
    //   to: '0xF7deF1D2FBDA6B74beE7452fdf7894Da9201065d', // $veNATION,
    //   signature: 'deposit_for(address,uint256)',
    //   args: ['0x6a765fa033aab42f66b306e81e690ff5339525c2', '1501000000000000000'],
    // },
  ],
};

export default config;
