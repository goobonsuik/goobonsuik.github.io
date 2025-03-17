import { css } from 'styled-components'

const sizes = {
	mbl: 375,
	tab: 700,
	desk: 990,
	deskL: 1200,
}

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)};
		}
	`
	return acc
}, {})

export default media;