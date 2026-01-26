import Header from "@/components/Header";
import MainGrid from "@/components/MainGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <MainGrid />
      <Footer />
    </div>
  );
};

export default Index;