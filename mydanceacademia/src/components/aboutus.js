
import album from "../images/teachers.png";
import aboutus from '../images/aboutus.png';
const AboutUs = () =>{
return(
<div>
<header>
<img className="headerAbout" src={aboutus} alt="A man who is break dancing "/>
</header>

<section className="album">
<img src={album} alt="Four people who teaching dance"/>
<p>Focused on hip-hop, club, and street dance styles, our team of experienced instructors is dedicated to empowering dance teachers, including those specializing in girls' dance, with the knowledge and skills to engage students in dynamic and expressive dance forms</p>
</section>
    </div>
)
}
export default AboutUs;