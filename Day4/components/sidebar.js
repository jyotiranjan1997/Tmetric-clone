function sidebar(){
    return `  
    <div id="sidebar_head">
        <button id="open" onclick="showsidebar_open()"><i class="fa-solid fa-bars"></i></i></button>
        <button id="close" onclick="showsidebar_close()"><i class="fa-solid fa-angle-left"></i></button>
        <img id="sidebar_image" src="https://app.tmetric.com/images/tmetric_logo_and_text.svg" alt="">
        
    </div>
    
<div id="sidebar_all_hide">
    <div>
        <h3><i class="fa-solid fa-clock"></i>Time</h3>
    </div>

    <div>
        <h3><i class="fa-solid fa-file"></i>Task</h3>
    </div>

    <div class="sidebar">
        <div class="sidebar_flex">
            <h3>Analyze</h3>
        <i class="fa-solid fa-angle-down"></i>
        </div>

        <div class="sidebar_hide">
            <h3><i class="fa-solid fa-chart-simple"></i>Report</h3>
            <h3><i class="fa-solid fa-circle-question"></i>Activity</h3>
        </div>
    </div>

    <div class="sidebar">
        <div class="sidebar_flex">
            <h3>Manage</h3>
        <i class="fa-solid fa-angle-down"></i>
        </div>

        <div class="sidebar_hide">
            <a href="project.html"> <h3><i class="fa-solid fa-folder-open"></i>Projects</h3></a>
            <h3><i class="fa-solid fa-building"></i>Clients</h3>
            <h3><i class="fa-solid fa-money-bill"></i>Invoices</h3>
            <h3><i class="fa-solid fa-tree-city"></i>Time Off</h3>
        </div>
    </div>

    <div class="sidebar" >
        <div class="sidebar_flex">
            <h3>Workspace</h3>
        <i class="fa-solid fa-angle-down"></i>
        </div>

        <div class="sidebar_hide">
            <h3><i class="fa-solid fa-gear"></i>Settings</h3>
            <h3><i class="fa-solid fa-people-group"></i>Members</h3>
            <h3><i class="fa-solid fa-people-roof"></i>Teams</h3>
            <h3><i class="fa-solid fa-tag"></i>Tags</h3>
            <h3><i class="fa-brands fa-intercom"></i>Integrations</h3>
            <h3><i class="fa-solid fa-face-smile-beam"></i>Subscriptions</h3>
        </div>
    </div>

    <div style="display: flex; margin-top: -20px;">
        <div id="profile_img">
            <img width="50px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAgwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADYQAAICAQIEAwYEBAcAAAAAAAABAgMEBREhMVFxEhNBBiJSYZHBMkKBsRQj0fEzYnOCkuHw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAB45RXNpdwPQYqyD5Tj9TIAAAAAAAAAAAAAAAGnLyasSl23S2ivq30QGyyca4Oc5KMVzbfBENm+0FcN44kPMfxy4RIfUNRuzp7zfhrT92tPh/c5AOu/U8y9vx5Ekn+WPupfQ5ZNye8m334ngA82S5G+nKyKXvVfZDtL7GkATGJ7QX17LJgrY/EuD/AKE7h5tGZFypmm1zi+DXcpRlVZOmxWVScZp8GmBfARWkatHMSqu2jel+kvmiVAAAAAAAAAxsnGuEpze0YrdvoU7U86WdkOb4Vx4Vx+XUmPaXL8FMMaD42cZdv/fsVwAAAANuNj25Nqrpj4n69ETNGh1Rj/PslOX+XggIEFinouJJbR8yD6qW5F52mXYi8aanV6yXp3QHCAAPYSlCalBuMk9016Fu0fPWdjby2VsOE19yoHXpWW8TNhNv3Je7PswLmAAAAAAHkntFvogKbq13n6jfLfdKXhXZcDkEn4pNv1e4ADsDbiJPLpT5eZHf6gWXTsSOJjRhsvMfGb+Z1BgAeNJpqS3T5p+p6AKrqeL/AAuXKEfwP3odjlJn2kSUsd+u0l+nAhgAAAuWkXO/T6Zt7yUfC381wOwh/ZiW+FZH4bH+yJgAAABjZ/hy7MyDAoPJbA3ZlTpy7qvhm0uxpAHsZOMlKPNPdHgAt+LdHJohbB8JLfbo+htKvp2fZhTey8VUucPuieo1HEvjvG6MX8M+DA6gaZ5WPWt531r/AHJkVn6x4oSrxN+PB2P7Ac2t5CvzPDFpxqXh3XX1I8AAAALL7LrbEu/1PsiZI32fq8vTa2+c25EkAAAAAAVn2lxfLyoZEV7tq2fdf9EOXXPxY5mNOmXBvjF9H1KZZXOmyVdqcZxezTAxOnCwbsyW1a2guc3yRlpuFLMu23arjxnJft3LPXCFUFCuKjCPBJAcWPpGLVH+ZF2y9XPl9DTdodEnvVZOtdOaJUAQ0dBhv718tvlDb7nZHScJVuDp33/M29ztAFfzdGsqTnjt2Q9Y/mX9SLLoRGs6cpRlk0LaS4zilzXXuBBGdFUr7oVQ/FOWyMCw+zmC4x/jLFxktq0+nUCaqrjVVCuH4YxSRmAAAAAAACK1nS1lx82lJXxX/NdCVAEbp+MsTFjXt73Ofc6DonBS7mmUHHmv1AxAAAAAAepN8kbIV+sgISrRPHnylNbYyfiSX5vl2J+KSSSWyXJHoAAAAAAAAAAAAAAMXCL9DHyl1ZsAGvyV1Z6q4r0MwB4ltyPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z" alt="">
        </div>
        <div>
            <h4>My company</h4>
            <h4>Sumit Chimkar</h4>
        </div>
    </div>
</div>`
}
export default sidebar