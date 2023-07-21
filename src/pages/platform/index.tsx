import { Banner } from "../../components/banner";
import { Header } from "../../components/header";
import { Segments } from "../../components/segments";
import { Sobre } from "../../components/about";
import { Depositions } from "../../components/depositions";
import { Register } from "../../components/register";
import { Footer } from "../../components/footer";

const Platform = () => {
  return (
    <>
      <Header />
      <Banner />
      <Segments />
      <Sobre />
      <Depositions />
      <Register />
      <Footer />
    </>
  );
};

export { Platform };
