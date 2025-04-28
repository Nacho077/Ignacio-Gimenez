import closeIcon from '../../assets/images/icons/close_black.svg'
import s from './modal.module.css'

const Modal = ({data:{text, buttons}, onClose}) => {
    return (
        <section className={s.container_main}>
            <div className={s.container}>
                <button className={s.container_close} onClick={onClose}>
                    <img src={closeIcon} alt="close icon" />
                </button>
                <div className={s.container_text_anim}>
                    <p className={s.text}>{text}</p>
                </div>
                <div className={s.container_buttons}>
                    {buttons?.map(button => (
                        <button
                        key={button.text}
                        className={`btn ${s.btn}`}
                        onClick={() => {
                            button.onClick && button.onClick() 
                            onClose()}}
                        >
                            {button.content}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Modal;