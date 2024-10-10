import { div } from "framer-motion/client";
import Footer from "./components/footer";
import HowThingsWork from "./components/how things work";
import Main from "./components/main";
import Navbar from "./components/Navbar";
import OurWork from "./components/our work";
import Modal from "./components/Modal";
import Button from "./ui/button";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dark:bg-black">
      <Navbar />
      <Main />
      <HowThingsWork />
      <OurWork />
      <div className="w-full flex flex-row items-center justify-center">
        <Button
          className="my-16 dark:bg-gray-800"
          text="Book a call"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <Footer />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
