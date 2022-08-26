function navbar(){
    return `<div id="menubar">
    <i class="fa-solid fa-list"></i>

      <div id="navbar1">
          
          <div id="navbar_left">
              <img src="data:image/jpeg;base64,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" alt="">
              <h2>TMETRIC</h2>
             <div id="drop_button">
              <button>EN</button>
              <div id="dropdown_button">
                  <button >English</button>
                  <button>Deutsch</button>
              </div>
             </div>
          </div>
          
          
          
          <div id="navbar_middle">
          
          
              <div class="dropdown" >
                  <h3 class="dropdown_btn">Why TMetric <i class="fa-solid fa-chevron-down"></i></h3>
                  <div class="dropdown_content">
                      
                          <div class="side">
                              <h3 class="teal">Overview</h3>
                              <h3><i class="fa-solid fa-building"></i>Industry</h3>
                              <p>Made for all industry Check Benifits of usage.</p>
          
                          </div> <div>
          
                          </div>
          
                          <div class="side">
                              <h3 class="teal">Features</h3>
                              <h3> <i class="fa-solid fa-clock"></i> Time Tracking</h3>
                              <p>Capture and controlCheck Benifits of usage</p>
                          </div>
          
                          <div class="down">
                              <h3> <i class="fa-solid fa-newspaper"></i> Billing & Invoicing</h3>
                              <p>Set billable rates and easily create invoices</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-list-check"></i> Project Management</h3>
                              <p>Create projects,set rates and budgets</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-people-roof"></i>Customers</h3>
                              <p>See why business use TMetric for time tracking and workflow Management</p>
                          </div>
          
                          <div></div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-people-group"></i>Team Management</h3>
                              <p>Monitor productivity and activity level of your team</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-bars-progress"></i>Task Management</h3>
                              <p>Manage tasks and set up an effective workflow</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-plane-departure"></i>Time Off</h3>
                              <p>Simply ask for days off and control teams attendance</p>
                          </div>
                          
                  </div>
              </div>
          
          
              <div class="dropdown" >
                  <h3 class="dropdown_btn">Apps & Integration <i class="fa-solid fa-chevron-down"></i></h3>
                  <div class="dropdown_content">
                      
                          <div class="side">
                              <h3 class="teal">Apps</h3>
                              <h3><i class="fa-solid fa-arrow-up-right-from-square"></i>Browser Extenstion</h3>
                              <p>Simple time tracking extention which helps you be more productive</p>
                          </div>
                          <div></div>
                          <div class="side">
                              <h3 class="teal">Integration</h3>
                              <h3><i class="fa-brands fa-jira"></i>Jira</h3>
                              <p>Time tracking on evry task in one click</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-align-justify"></i>Asana</h3>
                              <p>Start to accurately track time of tasks</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-list"></i>Todoist</h3>
                              <p>Track time of your lists and tasks</p>
                          </div>
          
                              <div class="down up">
                              <h3><i class="fa-brands fa-app-store-ios"></i>Mobile apps</h3>
                              <p>Install TMetric app to your phone or a tablet device.Android and IOS platforms are supported</p>
                          </div>
          
                          <div></div>
                           
                         <div class="down up">
                              <h3><i class="fa-brands fa-microsoft"></i>MS Office</h3>
                              <p>Get plugin for tracking time in MS Office online</p>
                          </div>
          
                          <div class="down up">
                              <h3><i class="fa-brands fa-github"></i>GitHub</h3>
                              <p>Track time spend working on an issues with one mouse click</p>
                          </div>
          
                          <div class="down up">
                              <h3><i class="fa-solid fa-laptop"></i>Freshdesk</h3>
                              <p>Track time spend on every support ticket</p>
                          </div>
          
                          <div >
                              <h3><i class="fa-solid fa-desktop"></i>Desktop apps</h3>
                              <p>Download TMetric app for your desktop computer or a laptop</p>
                          </div>
                          
                  </div>
              </div>
              <div><h3><a href="#">Pricing</a></h3></div>
             <div> <h3><a href="support.html">Support</a></h3></div>
              <div><h3><a href="#">Blog</a></h3></div>
          </div>
          <div id="navbar_right">
              <h3>Log In</h3>
              <button>Sign Up</button>
          </div>
      </div>
  </div>`
}
export default navbar


