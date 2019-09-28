import styled from 'styled-components'

function ellipsis({width='auto', line_clamp=1, comp}) {
  return styled(comp) `
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${width};
    ${
      line_clamp === 1 ?
     	`white-space: nowrap;` :
  		`
        display: -webkit-box !important;
        -webkit-line-clamp: ${line_clamp};
        flex-direction: column;
        word-wrap: break-word;
        word-break: break-all;
      `
    }
  `
}

export default ellipsis