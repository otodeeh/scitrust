export interface FilterData {
	id: number
	initialDate: Date | string
	finalDate: Date | string
	statusList: string[]
	statusOrder: 'desc' | 'asc'
}

export default interface ListParams {
	limit: number
	offset: number
	total: number
	term?: string
	clientId?: number
	sold?: boolean
	// itemFilter?: FilterData;
}

export type FilterField =
	| 'filter'
	| 'limit'
	| 'offset'
	| 'search'
	| 'total'
	| 'client'
	| 'sold'
export type FilterValue = number | string | FilterData | boolean

export const INITIAL_PAGE = 1
export const DEFAULT_LIMIT = 19

/**
 * @description Return a clear or saved list params.
 * @param storedListParams Saved List Params Object
 * @param clearAll Flag to clear all values
 * @returns Returns a new List Params Object
 */
export function defaultListParams(
	storedListParams?: ListParams,
	clearAll = true
): ListParams {
	if (!clearAll) {
		return {
			limit: storedListParams?.limit || DEFAULT_LIMIT,
			offset: storedListParams?.offset || INITIAL_PAGE,
			total: storedListParams?.total || INITIAL_PAGE,
			term: storedListParams?.term || ''
		}
	} else {
		return {
			limit: DEFAULT_LIMIT,
			offset: INITIAL_PAGE,
			total: INITIAL_PAGE,
			term: ''
		}
	}
}

/**
 * @description Update a List Params Object
 * @param value Value to update in object
 * @param field Field to be updated
 * @param listParams List Params Object to be updated
 * @returns Returns a new List Params Object
 */
export const updateListParams = (
	value: FilterValue,
	field: FilterField,
	listParams: ListParams
) => {
	const newListParams = { ...listParams }

	switch (field) {
		case 'limit':
			newListParams.limit = value as number
			break
		case 'offset':
			newListParams.offset = value as number
			break
		case 'total':
			newListParams.total = value as number
			break
		case 'search':
			newListParams.term = value as string
			break
		case 'client':
			newListParams.clientId = value as number
			break
		case 'sold':
			newListParams.sold = value as boolean
			break
	}

	return newListParams
}

/**
 * @description Clear basic attributes from List Params Object
 * @param listParams List Params Object
 * @param clearAll Flag to clear all values
 * @returns Returns a new List Params Object
 */
export const clearListParams = (listParams: ListParams, clearAll = false) => {
	if (clearAll) {
		return defaultListParams()
	} else {
		const newListParams = { ...listParams }
		newListParams.offset = INITIAL_PAGE
		newListParams.total = INITIAL_PAGE
		return newListParams
	}
}
