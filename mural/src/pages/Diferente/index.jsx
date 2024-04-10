import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTheTop from "../../components/ScrollToTheTop";
import Card from "../../components/Card";
import style from "./index.module.css";
function Home() {
  return (
    <>
      <ScrollToTheTop />
      <Header />
      <div style={{ padding: "50px", marginTop: "60px" }}>
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default Home;
