import Header from "./components/layout/Header";
import MainTopSection from "../components/home/MainSection/MainTopSection";
import ShopBestSection from "../components/home/ShopBestSection/ShopBestSection";
import ReviewSection from "../components/home/ReviewSection/ReviewSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <MainTopSection />
        <ShopBestSection />
        <ReviewSection />
      </main>
    </>
  );
}
