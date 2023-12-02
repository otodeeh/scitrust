import { Box, Rating } from '@mui/material'
import React from 'react'
import './styles.scss'

type Props = {
	value?: number
	onChangeValue: (value: number | null) => void
	type: 'readonly' | 'rating'
}

export const SimpleRating = ({ value, onChangeValue, type }: Props) => {
	return (
		<div className="simple-rating">
			{type === 'rating' && (
				<Box component="fieldset" mb={0} borderColor="transparent">
					<Rating
						name="simple-controlled"
						value={value}
						precision={0.5}
						onChange={(event, newValue) => {
							onChangeValue(newValue)
						}}
					/>
				</Box>
			)}
			{type === 'readonly' && (
				<Box component="fieldset" mb={0} borderColor="transparent">
					<Rating
						name="read-only"
						value={value}
						precision={0.5}
						readOnly
						size="small"
					/>
				</Box>
			)}
		</div>
	)
}
