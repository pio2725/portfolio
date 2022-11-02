import "../css/about.css";

const About = () => {
  return (
    <div class="wrapper">
    <div class="title">About</div>
    <div class="subtitle"><h2>Experience</h2></div>

    <section class="experience">
        <div class="container">
            
            <div class="box">
                <img class="a1" />
                <h3>Software Engineer Intern</h3>
                <p>LG Innotek · 07/2022</p>
                <a href="#" class="btn">Details</a>
            </div>
            <div class="box">
                <img class="a2" />
                <h3>Software Developer</h3>
                <p>BYU Broadcasting · 09/2021 - 02/2022</p>
                <a href="#" class="btn">Details</a>
            </div>
            <div class="box">
                <img class="a3" />
                <h3>Software Engineer Intern</h3>
                <p>FamilySearch · 05/2021 - 08/2021</p>
                <a href="#" class="btn">Details</a>
            </div>
            <div class="box">
                <img class="a4" />
                <h3>Research Assistant</h3>
                <p>BYU Robotics Lab · 09/2020 - 04/2021</p>
                <a href="#" class="btn">Details</a>
            </div>
        </div>
    </section>
    <div class="subtitle"><h2>Contact</h2></div>
            
    <section class="contact">
        <div class="container">
            <div class="box">
                <img class="a5" />
                <h3>Inoh Pak</h3>
                <p>pio2725@gmail.com</p>
                <div class="footer-container">
                <div class='footer'>
                    <a href="https://www.linkedin.com/in/inoh-pak-16482b1a4" class="fa fa-linkedin"></a>
                    <a href="mailto:pio2725@gmail.com" class="fa fa-envelope-o"></a>
                  </div>  
                </div>
            </div>
        </div>
    </section>
      
    </div>  
      
    );
};

export default About;