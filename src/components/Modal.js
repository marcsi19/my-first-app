import './Modal.css'

export default function Modal({children, handleClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">

        {/* <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p> */}

        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  )
}