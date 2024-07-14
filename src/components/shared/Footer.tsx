import { Link } from "@tanstack/react-router"
import flades from "../../assets/shared/logoWhite.png"
import qr from "../../assets/shared/qr.png"
import useLanguage from "../../hooks/useLanguage";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";

const data = {
    es: [
        "Unete a la causa, aporta ",
        "aquí",
        " con tu donación!"
    ],
    en: [
        "Join the cause, contribute ",
        "here",
        " with your donation!"
    ]
}

function Footer() {
    const { language } = useLanguage();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <footer className=" bg-[#4E2E0F] flex p-4 justify-between items-center gap-4 md:justify-center md:gap-16">
            <FooterModal isOpen={isOpen} onClose={onClose} />
            <Link to="/">
                <img className="w-40 sm:w-48" src={flades} alt="Fundación Flades Logo" />
            </Link>
            <section>
                <h4 className="text-white xs:w-max md:text-2xl">{
                    data[language].map((text, index) => {
                        return index !== 1 ? <span key={index}>{text}</span> : <button onClick={() => onOpen()} className="text-[#61CE70] underline hover:underline md:no-underline">{text}</button>
                    })
                }</h4>
                {/* <img className="w-[200px]" src={qr} alt="QR Aportes" /> */}
            </section>
        </footer>
    )
}

export default Footer

type FooterModalProps = {
    isOpen: boolean,
    onClose: () => void
}

function FooterModal({ isOpen, onClose }: FooterModalProps) {
    return <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
    >
        <ModalContent>
            {() => (
                <div className="grid place-items-center">
                    <img className="w-[400px]" src={qr} alt="QR Aportes" />
                </div>
            )}
        </ModalContent>
    </Modal>
}
