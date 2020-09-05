
window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})

// Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
        filterBtns=filterContainer.children,
        totalFilterBtn = filterBtns.length,
        portfolioItems=document.querySelectorAll(".portfolio-item"),
        totalportfolioItems=portfolioItems.length;
    
    for(let i=0; i <totalFilterBtn;i++)
    {
        filterBtns[i].addEventListener("click",function(){                     //On any of all,worpress,etc menu click
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");
            
            
            const filterValue=this.getAttribute("data-filter");                 // filter acc name selected 
            for (let k=0; k<totalportfolioItems;k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){            
                    portfolioItems[k].classList.remove("hide");                             
                    portfolioItems[k].classList.add("show");    
                }else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");    
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");   
                    portfolioItems[k].classList.add("show");    

                }
            } 
        })
    }


    //Portfolio Lightbox

    const lightbox=document.querySelector(".lightbox"),
        lightboxClose=lightbox.querySelector(".lightbox-close"),
        lightboxImg=lightbox.querySelector(".lightbox-img"),
        lightboxText=lightbox.querySelector(".caption-text"),
        lightboxCounter=lightbox.querySelector(".caption-counter");
     let itemIndex=0;
     for(let i=0; i<totalportfolioItems; i++)
     {
         portfolioItems[i].addEventListener("click", function(){                 //it will show index of selected img
                itemIndex=i;
                changeItem();
                toggleLightbox();
         })
     }   

//for next item arrow on click function 
     function nextItem(){
        if(itemIndex === totalportfolioItems-1){
            itemIndex=0;
        }else{
            itemIndex++;
        }
        changeItem();                                           //for slide info after iteration
     }


//for previous item arrow on click function 
     function prevItem(){
        if(itemIndex === 0){
            itemIndex= totalportfolioItems-1;
        }else{
            itemIndex--;
        }
        changeItem();                                           //for slide info after iteration
       }



     function toggleLightbox(){
         lightbox.classList.toggle("open");                                //img opens up     
     }

     //to detect image path acc to its index
     function changeItem(){
         imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
         lightboxImg.src=imgSrc;                                                 //img opens up  
         lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;  //h4 text also open up\
         lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalportfolioItems; 
             
        };



//----------------Close Lightbox--------------------------------------------------------

lightbox.addEventListener("click",function(event){
        if(event.target===lightboxClose || event.target===lightbox){
            toggleLightbox();
        }
})

//aside navbar

//on selecting particular nav list it color changes with it active class
const nav=document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList=navList.length,
        allSection=document.querySelectorAll(".section"),
        totalSection=allSection.length;

    for(let i=0;i<totalNavList;i++){
        
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function(){
            //remove back section class
            removeBackSectionClass();
            
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    //adding back section class
                    addBackSectionClass(j);
                    
                }                
                navList[j].querySelector("a").classList.remove("active");  

            }
            this.classList.add("active");
            showSection(this);

            if(window.innerWidth<1200){
                asideSectionTogglerBtn();
            }
        })
}        


//remove Back Section from Class
function removeBackSectionClass(){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}

function addBackSectionClass(num){
    allSection[num].classList.add("back-section");
} 


// to show active class by adding & removing 
function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
  const target=element.getAttribute("href").split("#")[1];
        
    document.querySelector("#"+target).classList.add("active")
}



function updateNav(element){
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");  
        const target=element.getAttribute("href").split("#")[1];
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }

}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex =this.getAttribute("data-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);
})

//--------------Nav-Toggler------------------------------------

const navTogglrBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");

        navTogglrBtn.addEventListener("click",()=>{
            asideSectionTogglerBtn();
        })


   function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglrBtn.classList.toggle("open");
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }
   }     



   function sendMail(event){

    Email.send({
        SecureToken : "bbb19cc1-e39d-480a-8f6d-74ba1e46e810",
        To : "thenoobcoder247@gmail.com",
        From : document.getElementById('mail'),
        Subject : document.getElementById('subject'),
        Body : document.getElementById('body')
    }).then(function(response){
        if (response == 'OK'){
            alert("Mail Sent Successfully");
        }else{
            throw console.error("Not Sent");
        }
    });
   }