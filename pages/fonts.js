
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src:  url("./fonts/La_Belle_Aurore/LaBelleAurore-Regular.ttf");
        
      }
      /* latin */
      @font-face {
        font-family: 'Body Font Name';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("/fonts/Titillium_Web/TitilliumWeb-Regular.ttf");
      }
      `}
  />
)

export default Fonts