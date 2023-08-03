import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat';
import {calender} from '../../utils/Icons'

function Hist() {
    const {transactionHistory} = useGlobalContext()

    const [...hist] = transactionHistory()
    

    return (
        <HistStyled>
            <h2>All Transactions</h2>
            
            {hist.map((item) =>{
                const {_id, title, amount, date, type} = item
                return (
                    <div key={_id} className="history-item">
                        <h3 style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </h3>
                        <h4>{calender} {dateFormat(date)}</h4>
                        <h3 style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                            
                        }}>
                            {
                                type === 'expense' ? `-₹ ${amount <= 0 ? 0 : amount}` : `+₹ ${amount <= 0 ? 0: amount}`
                            }
                        </h3>
                    </div>
                )
            })}
        </HistStyled>
    )
}

const HistStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    
`;

export default Hist