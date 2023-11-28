import React, { ReactNode } from 'react'
import './style.scss'

export const InputRoot = ({ children }: { children: ReactNode }) => (
	<div id="input-component">
		<label>{children}</label>
	</div>
)
