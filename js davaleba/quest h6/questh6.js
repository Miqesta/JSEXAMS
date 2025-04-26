const defaultConfig = {mode: 'auto',speed:100};
const userConfig = {speed:80, logging:true};
const finalConfig= Object.assign({},defaultConfig,userConfig);
console.log('Final Config:mode:${finalConfig.mode},speed:${finalConfig.speed},logging:${finalConfig.logging}');


