import Header from "../Header/Header";
import FilterBar from "../FilterBar/FilterBar";
import ContentArea from "../ContentArea/ContentArea";
import Footer from "../Footer/Footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <FilterBar />
      <ContentArea />
      <Footer />
    </div>
  );
}

export default MainLayout;