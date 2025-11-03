import Header from "./components/layout/Header";
import MainTopSection from "../components/home/MainSection/MainTopSection";
import ShopBestSection from "../components/home/ShopBestSection/ShopBestSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <MainTopSection />
        <ShopBestSection />
      </main>
    </>
  );
}
