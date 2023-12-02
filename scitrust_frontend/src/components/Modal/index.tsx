import React from 'react'
import './styles.scss'

interface Params {
	children?: React.ReactNode
	clickAwayClose?: boolean
	onClose: () => void
	showClose?: boolean
	title: string
}

export const Modal: React.FC<Params> = ({
	children,
	clickAwayClose = false,
	onClose,
	showClose = false,
	title
}) => {
	const showCloseButton = () =>
		!showClose ? (
			<></>
		) : (
			<div className="modal-header-close-content" onClick={onClose}>
				{/* <CloseCircleIcon height="24" width="24" fill="#FFFFFF" /> */}x
			</div>
		)

	const mainChildren = () => (
		<div className="modal-component">
			<div className="modal-header-content">
				<span>{title}</span>
				{showCloseButton()}
			</div>
			<div className="modal-main-content">{children}</div>
		</div>
	)

	const handleAwayContent = () => {
		return clickAwayClose ? <>{mainChildren()}</> : mainChildren()
	}

	return <div className="modal-main-backdrop">{handleAwayContent()}</div>
}
