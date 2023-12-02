import React, { ReactNode, createContext, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { GetPeriodical } from '../models/usecases/get-periodical'
import { addComment, addRating, getPeriodicals } from '../service/api'
import ListParams, {
	FilterField,
	FilterValue,
	defaultListParams,
	updateListParams
} from '../utils/ContextUtils'

export const ScientificJournalsContext = createContext({
	list: {} as GetPeriodical.Return | undefined,
	isLoading: false,
	limit: {} as number,
	total: {} as number,
	offset: {} as number,
	onSearchParams: (searchTerm: string) => {},
	onPageChange: (page: number) => {},
	onGetCreditList: (status: string) => {},
	onCommentChange: (text: string, peridicalId: number) => {},
	onRatingChange: (
		value: number,
		periodicalId: number,
		callback: () => void
	) => {}
})

const defaultParams = defaultListParams()

export const ScientificJournalsProvider = ({
	children
}: {
	children: ReactNode
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [creditsList, setCreditsList] = useState<GetPeriodical.Return>()

	const listParams = useRef<ListParams>(defaultParams)

	const handleGetPeriodicalList = async (status?: string) => {
		try {
			const { limit, offset, term } = { ...listParams.current }
			const currentPage = offset - 1
			setIsLoading(true)

			const response = await getPeriodicals({
				limit,
				offset: currentPage,
				term: term || ''
			})
			console.log(
				'🚀 ~ file: ScientificJournalsContext.tsx:52 ~ handleGetPeriodicalList ~ response:',
				response
			)
			updateParams(Math.ceil(response.data.total / limit), 'total')
			setCreditsList(response.data)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			toast.error('creditContext.getCreditListsError')
		}
	}

	const onSearchParams = (term: string) => {
		updateParams(term, 'search')
		handleGetPeriodicalList()
	}

	const updateParams = (value: FilterValue, field: FilterField) => {
		listParams.current = updateListParams(value, field, listParams.current)
	}

	const onPageChange = (page: number) => {
		updateParams(page, 'offset')
		handleGetPeriodicalList()
	}

	const onCommentChange = async (text: string, periodicalId: number) => {
		await addComment({ text, periodicalId })
		handleGetPeriodicalList()
	}

	const onRatingChange = async (
		value: number,
		periodicalId: number,
		callback: () => void
	) => {
		await addRating({ value, periodicalId })
		handleGetPeriodicalList()
		callback()
	}

	const value = {
		list: creditsList,
		...listParams.current,
		isLoading,
		onPageChange,
		onSearchParams,
		onCommentChange,
		onRatingChange,
		onGetCreditList: handleGetPeriodicalList
	}

	return (
		<ScientificJournalsContext.Provider value={value}>
			{children}
		</ScientificJournalsContext.Provider>
	)
}
