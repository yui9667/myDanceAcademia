import hippop from "../images/hippop.png";
import club from "../images/club.png";
import girls from "../images/girls.png";
import oldschool from "../images/oldschool.png";
import schedule from "../images/schedule.png"
const Landing = ()=>{
    return (<div>
        <header className="container">
    <div className="navContainer">
        My Dance Academia
        <ul>
        <li>About Us</li>
        <li>Contact</li>
        </ul>
        </div>
        <h1> Available to apply for the fall Semester</h1>
        </header>
        <section className="semester">
            <h2>Fall Semester </h2>
            <p>You can apply for until 25 /07</p>
            <div className="dancePictures">
                <div className="dancePic" >
                    <img src={hippop} alt="hippop dance picture"/>
                    <p>HIPPOP</p>
                </div>
            <div className="dancePic" >
                    <img src={club} alt="club dance picture"/>
                    <p>CLUB</p>
            </div>
                <div className="dancePic" >
                    <img src={girls} alt="hipop"/>
                    <p>GIRLS</p>
                </div>
                <div className="dancePic" >
                    <img src={oldschool} alt="Old school style of dance picture"/>
                    <p>OLD SCHOOL</p>
                </div>
            </div>
        </section>
        <section className="schedule">
            <h2>Schedule</h2>
            <h5>01/02 ~ 01/05</h5>
<img src={schedule} alt="dance schedule"/>
        </section>
        
        </div>
)

}

export default Landing;