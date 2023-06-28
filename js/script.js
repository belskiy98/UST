window.addEventListener("DOMContentLoaded", function(){

    //accordion

    const tabs = document.querySelectorAll(".accordion-tab__short");

    for (let i = 0; i < tabs.length; i++){

        const tab = tabs[i];
        tab.addEventListener("click", function(event){

            const tabRoot = event.target.closest(".accordion-tab");
            tabRoot.classList.toggle("accordion-tab--open");
        });
    }
});