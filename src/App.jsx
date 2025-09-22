// App.jsx
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ProductToolbar from "./components/ProductToolbar";
import ProductsList from "./components/ProductsList";
import Pagination from "./components/Pagination";
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-11 mr-10">
          {/* Hero Section */}
          <Hero />

          {/* Toolbar */}
          <div className="pt-2 mt-2">
            <ProductToolbar />
          </div>
          
          <div className=" flex pt-2 mt-2">
          <ProductsList />
          </div>

           <div className=" flex pt-2 mt-2">
          <Pagination />
          </div>
         
        </div>
      </div>

       <Footer />
    </div>
   
  );
};

export default App;
