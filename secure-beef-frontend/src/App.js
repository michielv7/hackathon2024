import React from 'react';
import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { ThirdwebProvider } from "thirdweb/react";
import { Component } from "./Components/getBeef";
import BeefForm from "./Components/beefForm";

export const client = createThirdwebClient({ 
  clientId: "9742c462a580e57777d796d9f0268047" 
});

export const contract = getContract({ 
  client, 
  chain: sepolia, 
  address: "0x9bcD4AA26F0cc92754abb4B5dDFD7e0F84BF395b"
});

function App() {
  return (
    <ThirdwebProvider>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
        <BeefForm contract={contract} />
      </div>
      <Component contract={contract} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <img src="https://goodgifts.elca.org/sites/default/files/styles/product/public/images/product/ELCA-1200x630-Cow.png/filemGn0xP?itok=4ZYU3fMX" alt="Empty Image" />
      </div>
    </ThirdwebProvider>
  );
}

export default App;
