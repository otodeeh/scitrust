export namespace GetPeriodical {
	export type Params = {
		term: string
		offset: number
		limit: number
	}
	export type Return = {
		periodicals: {
			issn: string
			title: string
			id: number
			description: string
			stratum: string
			createdAt: Date
			comments: {
				id: number
				text: string
				createdAt: Date
				user: {
					name: string
				}
			}[]
			ratings: {
				id: number
				value: number
			}[]
		}[]
		hasNextPage: boolean
		total: number
	}
}
