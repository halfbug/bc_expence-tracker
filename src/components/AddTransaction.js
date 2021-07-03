import React from 'react'

const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description" className="">Description</label>
                    <input type="text" placeholder="Detail of Tranction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" placeholder="Dollar Value of Transaction" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
