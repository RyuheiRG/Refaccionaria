import { useState } from "react"

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)
    const [openProductId, setOpenProductId] = useState(null)

    const openModal = (productId) => {
        setOpenProductId(productId)
        setIsOpen(true)
    }

    const closeModal = () => {
        setOpenProductId(null)
        setIsOpen(false)
    }

    return { isOpen, openProductId, openModal, closeModal }
}