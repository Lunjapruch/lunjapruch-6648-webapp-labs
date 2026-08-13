const greet = (name ="Guest") => {
    const msg = `Hi ${name}, welcome back`;
    return msg;
}
const buildSettings =(opts ={}) => {
    const {frontSize =16}=opts;
    return {
        theme: opts?.theme ?? "light",
        frontSize: frontSize,
        plugins:[...(opts.plugins ?? []),"core"]
     }
}
console.log(greet("John"));
console.log(greet()); 
console.log(buildSettings());
console.log(buildSettings({theme:"dark", frontSize:16, plugins:["md"]}));

