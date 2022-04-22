import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchBar from './SearchBar'


describe("SearchBar", () => {
    afterEach(() => {
        cleanup()
       });
    
    
       it("renders appropriately", () => {
        render(<SearchBar />);      
      });

})