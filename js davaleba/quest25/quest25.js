const configs = [
    {name: "nodeA", port:8080},
    {name: "nodeB", port:80},
    {name: "nodeC", port:3001}
];
const secureConfig = configs.filter(function(config){
    return config.port>3000;
})
// ?????????