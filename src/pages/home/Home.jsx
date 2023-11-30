import { Hero, Navbar, Services, Trusted } from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
    </div>
  );
};
