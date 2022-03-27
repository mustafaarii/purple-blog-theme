state = {
    mobileMenuStatus : false,
}
function toggleMobilMenu(){
    const menus = document.querySelector(".mobile-menus");
        
    if(state.mobileMenuStatus === false){
        menus.style.left = "0px";
        state.mobileMenuStatus = true;
    }else{
        menus.style.left = "-700px";
        state.mobileMenuStatus = false;
    }
}

function closeMobilMenu(){
    if(!state.mobileMenuStatus === true)
        return false;
    const menus = document.querySelector(".mobile-menus");
    menus.style.left = "-700px";
    state.mobileMenuStatus = false;
}