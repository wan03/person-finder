import React from "react";
import { render, cleanup } from "@testing-library/react";
import Logo from './Logo'


describe("Logo", () => {
    afterEach(() => {
        cleanup()
       });
    
    
       it("renders appropriately", () => {
        render(<Logo />);      
      });

})

