// Select all tab link elements and tab content elements
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
// Function to hide or show tab content based on tab link click
function opentab(tabname){
 // Remove "active-link" class from all tab link elements
for(tablink of tablinks){
      tablink.classList.remove("active-link");
}
// Remove "active-tab" class from all tab content elements
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
    }
// Add "active-link" class to clicked tab link element
    event.currentTarget.classList.add("active-link");
// Add "active-tab" class to corresponding tab content element
    document.getElementById(tabname).classList.add("active-tab");
}


//script for side menu
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
 
