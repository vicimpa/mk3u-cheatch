import { HeroData } from "HeroData";
import { HeroList } from "HeroList";
import { StrictMode } from "react";
import { render } from "react-dom";
import { ToggleSelector } from "ToggleSelector";

render(
  <StrictMode>
    <HeroList />
    <HeroData />
    <ToggleSelector />
  </StrictMode>,
  document.querySelector('#root')
);