import Menu from "../menu/Navigation";
import Footer from "../menu/Footer";
const IndexLayout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="mx-24 py-5 ">{children}</div>
      <Footer />
    </div>
  );
};

export default IndexLayout;
