import React from "react";
import { render, cleanup } from "@testing-library/react";
import Person from './Person'


describe("Person", () => {
    afterEach(() => {
        cleanup()
       });
    
    
       it("renders appropriately", () => {
        render(<Person />);      
      });

})