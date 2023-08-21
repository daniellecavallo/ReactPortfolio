import Footer from "../components/footer";
import Header from "../components/header";
import screenshot1 from "../assets/unnamed-1.jpg"
import screenshot2 from "../assets/unnamed-33.png"
import screenshot3 from "../assets/untitledproject.png"


function Portolio() {
    return (
        <>
        <Header/>
        <section>
      <h2 id="work">Work</h2>
      <p>Click the graphics below to navigate to the project page!</p>
      <div id="container">
        <a href="https://project-211-88db9fc198e3.herokuapp.com/"_blank><img src={screenshot1} alt="moviementorproject!" id="image2"/></a>
      </div>
      <div id="container">
        <a href="https://croberts27.github.io/recyculator/"_blank><img src={screenshot2} alt="RECY!" id="image2"/></a>
      </div>
      <div id="container">
        <a href="https://untitled-art-app-b560d4f5fa59.herokuapp.com/"_blank><img src={screenshot3} alt="untitled" id="image2"/></a>
      </div>
    </section>
        <Footer/>
        </>
        
    )
}

export default Portolio