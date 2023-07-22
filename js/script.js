window.addEventListener("DOMContentLoaded", function(){

    //increase in the number

    // function calcCount() {
    //     for (let i = 0; i < $('.experience__num').length; i++) {
    //         let end = $('.experience__num').eq(i).text();
    //         countStart(end, i);
    //     }
    // }
    
    // function countStart(end, i) {
    //     let start = 0;
    //     let intervalOne = setInterval(function () {
    //         $('.experience__num').eq(i).text(++start);
    //         if (start == end) {
    //             clearInterval(intervalOne);
    //         }
    //     }, 65);
    // }
    // calcCount();

    const elements = document.querySelectorAll(".experience__num");
    elements.forEach(function(element){
        const end = element.innerText;
        
        let start = 0;

        let interval;

        if(element.hasAttribute("data-interval")){
            interval = Number(element.getAttribute("data-interval"));
        } else {
            interval = 3;
        }

        element.innerText = start;
        const intervalId = setInterval(function(){
            start += 1;
            element.innerText = start;
            if(start == end){
                clearInterval(intervalId);
            }
        }, interval);
});

    //accordion

    const tabs = document.querySelectorAll(".accordion-tab__short");

    for (let i = 0; i < tabs.length; i++){

        const tab = tabs[i];
        tab.addEventListener("click", function(event){

            const tabRoot = event.target.closest(".accordion-tab");
            tabRoot.classList.toggle("accordion-tab--open");
        });
    }

    //mobile menu
    
    let btnMenu = document.querySelector("#open-menu-btn");
    btnMenu.addEventListener("click", function() {

        let mobileMenu = document.querySelector(".mobile-menu");
        mobileMenu.classList.add("visible");
    });

	document.body.addEventListener("click", function(e){
		if(!e.target.closest("#open-menu-btn")){
			document.querySelector(".mobile-menu").classList.remove("visible");
		}
	});

    //turn off page scroll when menu menu is open

    btnMenu.addEventListener("click", function() {

        let bodyLock = document.querySelector("body");
        bodyLock.classList.add("lock");
    });

    document.body.addEventListener("click", function(e){
		if(!e.target.closest("#open-menu-btn")){
			document.querySelector("body").classList.remove("lock");
		}
	});

    //display the entire team
    
    let btnTeams = this.document.querySelector(".teams-btn");

    if (btnTeams) {
        btnTeams.addEventListener("click", function() {

            let teamCard = document.querySelector(".teams-row__second");
            teamCard.classList.add("active");

            let teamsButtonsBLock = document.querySelector(".teams-buttons");
            teamsButtonsBLock.classList.add("hidden");
        });
    }
    
    
});