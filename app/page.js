import Image from "next/image";
import Form from "./components/Form";

import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
export default function Home() {
  return (
    
     <div className="flex flex-col min-h-screen  ">
      <Header />
      
      <div className="flex flex-1 dark:to-blue-800">
        {/* <Aside /> */}
        
        
          
          <Form />
       
        
      </div>
      
      <Footer />
    </div>
  
  );
}
