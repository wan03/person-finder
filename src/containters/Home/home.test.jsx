import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from './Home'


describe("Home", () => {
    afterEach(() => {
        cleanup()
       });
    
    
       it("renders appropriately", () => {
        render(<Home />);      
      });

})
