import { Global } from '@emotion/react'

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      @font-face {
        font-family: 'Maison Neue Mono';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../public/fonts/Maison Neue Mono/Maison Neue Mono.ttf') format('ttf');
      }
      /* latin */
      @font-face {
        font-family: 'Maison Neue Book';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
       src: url('../public/fonts/Maison Neue Mono/Maison Neue Book.ttf') format('ttf');
      }
      `}
	/>
)

export default Fonts
