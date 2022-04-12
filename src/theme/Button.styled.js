import styled from "styled-components";
import { Colors, TextStyles } from "./Theme";

const Button = styled.button`
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  border-radius: 8px;
  cursor: pointer;

  ${(p) => {
    switch (p.variance) {
      case "contained":
        return `
                background-color: ${Colors.Brand.OrangeMain};
                color: ${Colors.Default.White};
                border: 1px solid ${Colors.Brand.OrangeMain};
                :hover {
                background-color: ${Colors.Brand.OrangeDark};
                border: 1px solid ${Colors.Brand.OrangeDark};
                }
              `;
      case "outline":
        return `
                background-color: transparent;
                color: ${Colors.Brand.OrangeMain};
                border: 1px solid ${Colors.Brand.OrangeMain};
                :hover {
                background-color: ${Colors.Brand.OrangeMain};
                color: ${Colors.Default.White};
                }
              `;
      default:
        return `
                background-color: transparent;
                color: ${Colors.Text.TextGrey};
                border: transparent;
                :hover {
                background-color: ${Colors.Text.TextGrey3};
                }
              `;
    }
  }}

  ${(p) => {
    switch (p.size) {
      case "sm":
        return ` 
        width: 132px;
        height: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead3)};
         `;
      case "md":
        return ` 
        width: 164px;
        height: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead4)};
         `;

      default:
        return ` 
        width: 180px;
        height: 60px;
        ${TextStyles.Bundler(TextStyles.Lead.Lead7)};
         `;
    }
  }}
`;

export default Button;
