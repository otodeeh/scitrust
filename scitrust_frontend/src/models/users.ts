export type isUserByRegistrationRequest = {
	email: string
}

export type isUserByRegistrationResponse = {
	name: string
}

export type getUserResponse = {
	birthday: Date
	cpf: string
	department_code: string
	name: string
	email: string
}

export type loginRequest = {
	email: string
	password: string
}

export type registerRequest = {
	cpf: string
	name: string
	password: string
	passwordConfirmation: string
	email: string
}

export type forgotPasswordRequest = {
	email: string
}

export type newPasswordRequest = {
	token: string
	oldPassword?: string
	password: string
	passwordConfirmation: string
}

export type updateAccountRequest = {
	contact: string
	deletedAt?: Date
	email: string
	language: string
	phone: string
	role?: string
	token?: string
}

export type authenticateResponse = {
	token: string
	name: string
	id: number
	email: string
}

export type updateAccountLanguageRequest = {
	language: string
}

export type updateAccountLanguageResponse = {
	id: number
	language: string
}
