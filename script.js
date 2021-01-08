let theme = localStorage.getItem("theme")

if(theme == null){
    setTheme("light")
}else{
    setTheme(theme)
}
let themeOptions = document.getElementsByClassName("theme_options")

for (var i=0; themeOptions.length > i; i++){
    themeOptions[i].addEventListener("click", function(){
        let mode = this.dataset.mode
        console.log("Option Clicked", mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == "light"){
        document.getElementById("theme-style").href = "style.css"
    }

    if(mode == "dark"){
        document.getElementById("theme-style").href = "dark.css"
    }

    if(mode == "blue"){
        document.getElementById("theme-style").href = "blue.css"
    }

    if(mode == "green"){
        document.getElementById("theme-style").href = "green.css"
    }
    localStorage.setItem("theme", mode)
}
