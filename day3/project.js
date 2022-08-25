function showsidebar_open(){
    document.getElementById('sidebar_all_hide').style.display='block'
    document.getElementById('open').style.display='none'
    document.getElementById('close').style.display='block'
    document.getElementById('sidebar_image').style.display='block'
    document.getElementById('project_page').style.position='absolute'
    document.getElementById('project_page').style.left='220px'
}
function showsidebar_close(){
    document.getElementById('sidebar_all_hide').style.display='none'
    document.getElementById('close').style.display='none'
    document.getElementById('open').style.display='block'
    document.getElementById('sidebar_image').style.display='none'
    document.getElementById('project_page').style.position='absolute'
    document.getElementById('project_page').style.left='50px'
}