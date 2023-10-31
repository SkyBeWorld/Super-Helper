async function loadwebsite() {
    const express = require("express")
    const app = express()
    const fs = require("fs")
    
    app.enable("trust proxy")
    app.set("etag", false)
    app.use(express.static(__dirname + "/website"))
    app.set("views", __dirname)
    app.set("view engine", "ejs")
    app.use(express.json())
    
    let files = fs.readdirSync("/website/public").filter(f => f.endsWith(".js"))
    files.forEach(async f => {
        const file = require(`./website/public/${f}`)
        if (file && file.name) {
            app.get(file.name, file.run)
    
            if (file.run2) app.post(file.name, file.run2)
    
            console.log("I loaded " + file.name)
        }
    })
    
    app.listen(3019, () => console.log("on the port 3019"))
}

module.exports = { loadwebsite }