import Footer from "../components/footer";
import Header from "../components/header";


function Portolio() {
    return (
        <>
        <Header/>
        <section>
      <h2 id="work">Work</h2>
      <p>Click the graphics below to navigate to the project page!</p>
      <div id="container">
        <a href="https://project-211-88db9fc198e3.herokuapp.com/"_blank><img src="./assets/unnamed-33.png" alt="moviementorproject!" id="image2"/></a>
      </div>
      <div id="container">
        <a href="https://croberts27.github.io/recyculator/"_blank><img src="./assets/unnamed-1.jpg" alt="RECY!" id="image2"/></a>
      </div>
    </section>
        <Footer/>
        </>
        
    )
}