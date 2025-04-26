const defaults = { retry:3,timeOut:1000};
const overrides = { timeOut:500};
Object.assign({},defaults,overrides);
function displaySettings({retry = 1, timeOut=0}){
    console.log('Settings - retry:${retry},timeout: ${timeOut}');
}
displaySettings(settings);
