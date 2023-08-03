import React from 'react'
import { InnerLayout } from '../../styles/layout';
import styled from 'styled-components'
import Hist from './Hist'
function Transactions() {
  return (
    <Transactstyled>
    <InnerLayout>
        <Hist/>
    </InnerLayout>
    </Transactstyled>
    

  )
}
const Transactstyled=styled.div`
h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
`;

export default Transactions