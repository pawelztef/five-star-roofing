import styled from 'styled-components'


export default styled.div`
    clear: both;
    display: block;
    height: 1px;
    font-size: 0;
    line-height: 0;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    overflow: hidden;
    background: #c11f2e;
    margin-bottom: ${ props => props.marginBottom ? props.marginBottom + "px" : "20px" };
  }
`
