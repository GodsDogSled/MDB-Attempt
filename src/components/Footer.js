import React from 'react'


export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <p>BCIT FWD32 React Movie Database</p>
      <p>by Gabe Kelly, <a href="">Victor Guerra</a> , and <a href="https://rafaelrivas.me/" target="_blank" rel="noopener noreferrer">Rafael Rivas</a> {getCurrentYear()}</p>
    </footer>
  );
}
  

  
  
