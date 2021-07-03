import React, { useState } from 'react'

const AddTransaction = () => {

    const [description, setdescription] = useState('');
    const [tramactopAmount, settramactopAmount] = useState(0);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description" className="">Description</label>
                    <input type="text" 
                    id="description"
                    value={description}
                    onChange={(e)=>setdescription(e.target.value)}
                    placeholder="Detail of Tranction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input 
                    type="number" 
                    id="transactionamount"
                    value={tramactopAmount}
                    onChange={(e)=> settramactopAmount(e.target.value)}
                    placeholder="Dollar Value of Transaction" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
