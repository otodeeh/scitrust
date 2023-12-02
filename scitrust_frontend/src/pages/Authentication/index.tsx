import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import sci from '../../assets/sci.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthContext } from '../../context/AuthContext'
import './styles.scss'

interface FormData {
	email: string
	password: string
}

export const Authentication = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty }
	} = useForm<FormData>()

	const { onLogin } = useContext(AuthContext)

	return (
		<div className="authentication">
			<div className="container">
				<img className="logo" src={sci} alt="" style={{ height: '100%' }} />
				<form onSubmit={handleSubmit(onLogin)}>
					<label htmlFor="email">
						E-mail
						<Input
							name="email"
							placeholder="Email"
							innerRef={{ ...register('email', { required: true }) }}
						/>
						<small>{errors.email && 'Email obrigatório'}</small>
					</label>
					<label htmlFor="">
						Senha
						<Input
							name="password"
							type="password"
							placeholder="Senha"
							innerRef={{ ...register('password', { required: true }) }}
						/>
					</label>
				</form>
				<Button size="lg" onClick={handleSubmit(onLogin)}>
					Login
				</Button>
				<a href="/home">Navegar como visitante</a>
			</div>
		</div>
	)
}
