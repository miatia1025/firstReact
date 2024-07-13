import "./ButtonsShowcase.css";
import { ButtonsShowcaseVariant } from "../../components/ButtonsShowcaseVariant";
import { ButtonsShowcaseProperties } from "../../components/ButtonsShowcaseProperties";
import { ButtonsShowcaseFunctions } from "../../components/ButtonsShowcaseFunctions";
import ButtonsShowcaseCustoms from "../../components/ButtonsShowcaseCustoms";
import ButtonsShowcaseGroup from "../../components/ButtonsShowcaseGroup";
import ButtonsShowcaseLoading from "../../components/ButtonsShowcaseLoading";

export const ButtonsShowcase = () => {
  return (
    <div>
      <label>Variants of Button Component</label>
      <ButtonsShowcaseVariant />
      <hr></hr>
      <label>Properties of Button Component</label>
      <ButtonsShowcaseProperties />
      <hr></hr>
      <label>Functions of Button Component</label>
      <ButtonsShowcaseFunctions />
      <hr></hr>
      <label>Customs of Buttons Component</label>
      <ButtonsShowcaseCustoms>Custom!!!</ButtonsShowcaseCustoms>
      <hr></hr>
      <label>Group of Button Component</label>
      <ButtonsShowcaseGroup />
      <hr></hr>
      <label>Loading of Button Component</label>
      <ButtonsShowcaseLoading />
    </div>
  );
};
