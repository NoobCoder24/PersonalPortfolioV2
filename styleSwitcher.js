const links =document.querySelectorAll('.alternate-style');
        totalLinks = links.length;

function setActiveStyle(color){
    for (let i=0;i<totalLinks;i++){
        if(color===links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }else{
            links[i].setAttribute("disabled","true");
        }

    }
    
}

//body skin

const bodySkin=document.querySelectorAll(".body-skin"),
        totalBodySkins=bodySkin.length;
    for(let i=0;i<totalBodySkins;i++){
        bodySkin[i].addEventListener("change",function(){
            if(this.value==="dark"){
               // document.body.classList.add("dark")                    //this will add bodyelmt                     
                document.body.className="dark";                       //2nd way
            }else{
               // document.body.classList.remove("dark")             //this will remove class frm bdy  
                document.body.className="";                              //2nd way    
                               

            }
        })

    }

document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})