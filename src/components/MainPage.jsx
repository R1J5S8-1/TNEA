import "./CSScomponent/MainPage.css";
import MainNav from "./MainNav";
import Header from "./Header";
import Registration from "./Registration";
import FormNav from "./FormNav";

const MainPage = () => {
  

  return (
    <div className="mainPage d-flex">
      <MainNav />
      <div className="container">
        <Header />
        <section className="mainContent">
          {/* <Registration /> */}
          <div>
            <h6>Application form</h6>
            <FormNav />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
