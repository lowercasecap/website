function showContent(section) {
    const contentDisplay = document.getElementById('info');
    if (section === 'about') {
        contentDisplay.innerHTML = `
            <div id="about-header">
                <h2># About</h2>
                <button class="about-messages"><i class="fa-solid fa-message"></i> Messages</button>
                <button class="about-files"><i class="fa-solid fa-layer-group"></i> Files</button>
            </div>
            <hr width="100%">
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Thursday, December 19th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
            </div>
            <div id="user-posts">
                
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>7:11 PM</h4>
                        </div>
                        <h5>Hello everyone, my name is Ryan Werness and welcome to my Slack Channel!
                        I currently live in Fargo, ND with my wife and three daughters.
                        I am currently a Paramedic at Casselton ambulance.
                        I have been a paramedic for 7 years. </h5>
                    </div>
                    
                </div>
                <div class="user-post">
                <button id="reactions" id="reaction-post1">
                    <span><i class="fa-solid fa-check"></i></span>
                    <span><i class="fa-regular fa-eye"></i></span>
                    <span><i class="fa-regular fa-face-grin"></i>React</span>
                    <span><i class="fa-solid fa-reply"></i>Reply</span>
                    <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                </button>
                <i class="fa-solid fa-user user-icon" id="Gates"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Bill Gates</h3>
                            <h4>7:23 PM</h4>
                        </div>
                        <h5>Welcome to the slack channel, Ryan! </h5>
                    </div>
                </div>
                <div class="user-post">
                <button id="reactions" id="reaction-post1">
                    <span><i class="fa-solid fa-check"></i></span>
                    <span><i class="fa-regular fa-eye"></i></span>
                    <span><i class="fa-regular fa-face-grin"></i>React</span>
                    <span><i class="fa-solid fa-reply"></i>Reply</span>
                    <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                </button>
                <i class="fa-solid fa-user user-icon" id="Jobs"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Steve Jobs</h3>
                            <h4>7:30 PM</h4>
                        </div>
                        <h5>Welcome to the Silicon Valley. I just sent you a personal message. </h5>
                        <br>
                        <h5>Steve</h5>
                    </div>
                </div>
                <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Friday, December 20th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
                <div class="user-post">
                <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon" id="Tom"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Tom Cruise</h3>
                            <h4>2:44 AM</h4>
                        </div>
                        <h5><a href="https://www.scientology.org/" target="_blank">Secret to Succuss</a></h5>
                    </div>
                </div>
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon" id="Musk"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Elon Musk</h3>
                            <h4>8:04 AM</h4>
                        </div>
                        <h5>Mars?</h5>
                    </div>
                </div>
            </div>`;
    } else if (section === 'projects') {
        contentDisplay.innerHTML = `
            <div id="about-header">
                <h2> # Projects </h2>
                <button class="about-messages"><i class="fa-solid fa-message"></i> Messages</button>
                <button class="about-files"><i class="fa-solid fa-layer-group"></i> Files</button>
            </div>
            <hr width="100%">
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Thursday, June 20th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
                <div class="user-post">
                    <button id="reactions" class="reactions1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>5:07 PM</h4>
                        </div>
                        <h5>This project is a 3d Pirate ship that I created to showcase my 3D creation and rendering skills. This project utilizes Blender,
                        ThreeJS, and HTML and CSS. </h5>
                        <h4>Link/Image.png  <i class="fa-solid fa-arrow-down"></i></h4>
                        <a href="https://pirateship.ryan-werness.com/" target="_blank"><img src="Images/Pirate_Ship.jpg" id="project-images"></a>
                    </div>
                </div>
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Wednesday, July 3rd <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
                <div class="user-post">
                    <button id="reactions" class="reactions1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>5:07 PM</h4>
                        </div>
                        <h5>here is another 3D projectthat I created to showcase my 3D creation and rendering skills. This is a 3D Computer that displays my portfolio website. This project utilizes Blender,
                        ThreeJS, and HTML and CSS. </h5>
                        <h4>Link/Image.png  <i class="fa-solid fa-arrow-down"></i></h4>
                        <a href="https://3ddesktop.ryan-werness.com/" target="_blank"><img src="Images/3D_computer.jpg" id="project-images"></a>
                    </div>
                </div>
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Tuesday, February 16th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
                <div class="user-post">
                    <button id="reactions" class="reactions1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>4:33 PM</h4>
                        </div>
                            <h5>This project is AR face filters similar to the ones you would find on Sanpchat. This project utilizes C#,
                            Unity software, and an Android phone. </h5>
                            <h4>Link/Image.png  <i class="fa-solid fa-arrow-down"></i></h4>
                            <a href="https://github.com/lowercasecap/ARFaceFilters" target="_blank"><img src="Images/FaceFilter.png" id="project-images"></a>
                    </div>
                </div>
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Tuesday, February 13th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
            </div>
            <div id="user-posts">
                
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>12:03 PM</h4>
                            
                        </div>
                        <h5> This project is an AR version of my resume. This project uses C#, Unity software, and an Adnroid phone.</h5>
                        <h4>Image.png  <i class="fa-solid fa-arrow-down"></i></h4>
                        <img src="Images/Resume.png" id="project-images">
                    </div>
                </div>
                
            </div>
        `;
    } else if (section === 'Education') {
        contentDisplay.innerHTML = `
            <div id="about-header">
                <h2> # Education </h2>
                <button class="about-messages"><i class="fa-solid fa-message"></i> Messages</button>
                <button class="about-files"><i class="fa-solid fa-layer-group"></i> Files</button>
            </div>
            <hr width="100%">
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Friday, May 15th 2015<i class="fa-solid fa-caret-down"></i></button></span>
                </div>
            </div>
            <div id="user-posts">
                <div class="user-post">
                    <button id="reactions">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>10:13 PM</h4>
                        </div>
                        <h5> In May 2015 I graduated from highschool while simultaneously graduated from Minnesota State Community College 
                        Fire Academy.</h5>
                    </div>
                </div>
                <div id="about-date">
                    <div class="line-with-text">
                        <span><button id="date">Friday, August 18th 2017<i class="fa-solid fa-caret-down"></i></button></span>
                    </div>
                </div>
                    <div class="user-post">
                        <button id="reactions">
                            <span><i class="fa-solid fa-check"></i></span>
                            <span><i class="fa-regular fa-eye"></i></span>
                            <span><i class="fa-regular fa-face-grin"></i>React</span>
                            <span><i class="fa-solid fa-reply"></i>Reply</span>
                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                        </button>
                        <i class="fa-solid fa-user user-icon"></i>
                        <div class="user-info">
                            <div class="inline-info">
                                <h3>Ryan Werness</h3>
                                <h4>11:58 PM</h4>
                            </div>
                            <h5> In August 2017 I graduated from North Dakota State College of Science with a certificate in Paramedic technology.</h5>
                        </div>
                    </div>
                </div>
                <div id="about-date">
                    <div class="line-with-text">
                        <span><button id="date">Friday, May 10th 2024<i class="fa-solid fa-caret-down"></i></button></span>
                    </div>
                </div>
                    <div class="user-post">
                        <button id="reactions">
                            <span><i class="fa-solid fa-check"></i></span>
                            <span><i class="fa-regular fa-eye"></i></span>
                            <span><i class="fa-regular fa-face-grin"></i>React</span>
                            <span><i class="fa-solid fa-reply"></i>Reply</span>
                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                        </button>
                        <i class="fa-solid fa-user user-icon"></i>
                        <div class="user-info">
                            <div class="inline-info">
                                <h3>Ryan Werness</h3>
                                <h4>3:28 PM</h4>
                            </div>
                            <h5> In May 2024 I graduated from North Dakota State College of Science with an Associates in Software Engineering.</h5>
                        </div>
                    </div>
                </div>
                <div id="about-date">
                    <div class="line-with-text">
                        <span><button id="date">Thursday, August 1st 2024<i class="fa-solid fa-caret-down"></i></button></span>
                    </div>
                </div>
                    <div class="user-post" id="reaction-post">
                        <button id="reactions">
                            <span><i class="fa-solid fa-check"></i></span>
                            <span><i class="fa-regular fa-eye"></i></span>
                            <span><i class="fa-regular fa-face-grin"></i>React</span>
                            <span><i class="fa-solid fa-reply"></i>Reply</span>
                            <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                        </button>
                        <i class="fa-solid fa-user user-icon"></i>
                        <div class="user-info">
                            <div class="inline-info">
                                <h3>Ryan Werness</h3>
                                <h4>6:03 PM</h4>
                            </div>
                            <h5> I am currently enrolled at the University of North Dakota pursuing a Bachelors degree(Online) in Computer Science.
                            My expected graduation date is May 2026.</h5>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }else if (section === 'Tom Cruise') {
        contentDisplay.innerHTML = `
        <div id="about-header">
                <h2> Tom Cruise </h2>
                <button class="about-messages"><i class="fa-solid fa-message"></i> Messages</button>
                <button class="about-files"><i class="fa-solid fa-layer-group"></i> Files</button>
            </div>
            <hr width="100%">
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Friday, December 20th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
            </div>
            <div id="user-posts">
                
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>11:07 PM</h4>
                        </div>
                        <h5>I mean no offense by this Mr. Cruise; but how did you get in this Slack Channel? </h5>
                    </div>
                    
                </div>
                <div id="user-posts">
                
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon" id="Tom"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Tom Cruise</h3>
                            <h4>11:14 PM</h4>
                        </div>
                        <h5>In this life, it's not what you hope for, it's not what you deserve - it's what you take! </h5>
                    </div>
                    
                </div>
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>11:16 PM</h4>
                        </div>
                        <h5>What? </h5>
                    </div>
                    
                </div>
            </div>
        `;
    }else if (section === 'Elon Musk') {
        contentDisplay.innerHTML = `
        <div id="about-header">
                <h2> Elon Musk </h2>
                <button class="about-messages"><i class="fa-solid fa-message"></i> Messages</button>
                <button class="about-files"><i class="fa-solid fa-layer-group"></i> Files</button>
            </div>
            <hr width="100%">
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Friday, December 20th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
            </div>
            <div id="user-posts">
                
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon" id="Elon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Elon Musk</h3>
                            <h4>3:09 AM</h4>
                        </div>
                        <h5>Mars? </h5>
                    </div>
                    
                </div>
            </div>
        </div>
    `;
    }else if (section === 'Bill Gates') {
        contentDisplay.innerHTML = `
        <div id="about-header">
                <h2> Bill Gates </h2>
                <button class="about-messages"><i class="fa-solid fa-message"></i> Messages</button>
                <button class="about-files"><i class="fa-solid fa-layer-group"></i> Files</button>
            </div>
            <hr width="100%">
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Thursday, December 20th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
            </div>
            <div id="user-posts">
                
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon" id="Gates"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Bill Gates</h3>
                            <h4>2:07 AM</h4>
                        </div>
                        <h5>You wouldn't happen to have Zuckerbergs email, would you? </h5>
                    </div>
                    
                </div>
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>7:34 PM</h4>
                        </div>
                        <h5>I did have it at one point, but he kept sending me pictures of himself wakeboarding so I eventually blocked him.</h5>
                        <h4>Image.png  <i class="fa-solid fa-arrow-down"></i></h4>
                        <img src="Images/Zuck.jpg" id="project-images">
                    </div>
                    
                </div>
            </div>
        </div>
    `;
    }else if (section === 'Steve Jobs') {
        contentDisplay.innerHTML = `
        <div id="about-header">
                <h2> Steve Jobs </h2>
                <button class="about-messages"><i class="fa-solid fa-message"></i> Messages</button>
                <button class="about-files"><i class="fa-solid fa-layer-group"></i> Files</button>
            </div>
            <hr width="100%">
            <div id="about-date">
                <div class="line-with-text">
                    <span><button id="date">Thursday, December 19th <i class="fa-solid fa-caret-down"></i></button></span>
                </div>
            </div>
            <div id="user-posts">
                
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon" id="Jobs"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Steve Jobs</h3>
                            <h4>7:29 PM</h4>
                        </div>
                        <h5>Tell me More about ThreeJS.</h5>
                        <br>
                        <h5>Steve</h5>
                    </div>
                    
                </div>
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>7:34 PM</h4>
                        </div>
                        <h5>ThreeJS is a JavaScript Library used to display and animate 3D computer graphics web browser using WebGL.
                        I have several projects using the ThreeJS Library. One of these projects will help Organic Chemistry students
                        better visualize the structure and properties of different elements.</h5>
                    </div>
                    
                </div>
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Ryan Werness</h3>
                            <h4>7:35 PM</h4>
                        </div>
                        <h5>Here is a Project I created using Blender and ThreeJS: <a href="https://pirateship.ryan-werness.com/" target="_blank">Pirate Ship</a></h5>
                    </div>
                    
                </div>
                <div class="user-post">
                    <button id="reactions" id="reaction-post1">
                        <span><i class="fa-solid fa-check"></i></span>
                        <span><i class="fa-regular fa-eye"></i></span>
                        <span><i class="fa-regular fa-face-grin"></i>React</span>
                        <span><i class="fa-solid fa-reply"></i>Reply</span>
                        <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                    </button>
                    <i class="fa-solid fa-user user-icon" id="Jobs"></i>
                    <div class="user-info">
                        <div class="inline-info">
                            <h3>Steve Jobs</h3>
                            <h4>7:29 PM</h4>
                        </div>
                        <h5>Stay hungry, stay foolish.</h5>
                        <br>
                        <h5>Steve</h5>
                    </div>
                    
                </div>
            </div>
        </div>
    `;
    }
}


const moreButton = document.querySelector('.More');
const morePopup = document.querySelector('#more-popup');

// Show the popup when the mouse enters the button
moreButton.addEventListener('mouseenter', () => {
  morePopup.style.display = 'block';
});

// Hide the popup when the mouse leaves the button or popup
moreButton.addEventListener('mouseleave', () => {
  morePopup.style.display = 'none';
});

morePopup.addEventListener('mouseleave', () => {
  morePopup.style.display = 'none';
});
