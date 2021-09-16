import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import "./style.css"

const Form = ({ formSchema, onSubmitFunction }) => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(formSchema)
	})

	return (

		<section className="register">
			<div className="filedForm">
				<form
					className="registerForm"
					onSubmit={handleSubmit(onSubmitFunction)} >

					<div>
						<input
							className="inputInfo"
							placeholder="Username *" {...register("name")}
							maxLength={18} />
						<p className="erroMessage">
							{errors.name?.message}
						</p>
					</div>

					<div>
						<input
							className="inputInfo"
							placeholder="Nome completo *"
							{...register("fullName")} />
						<p className="erroMessage">
							{errors.fullName?.message}
						</p>
					</div>

					<div>
						<input
							className="inputInfo"
							placeholder="Data de nascimento *"
							{...register("birth")} />
						<p className="erroMessage">
							{errors.birth?.message}
						</p>
					</div>


					<div>
						<input
							className="inputInfo"
							placeholder="Endereço *"
							{...register("address")} />
						<p className="erroMessage">
							{errors.address?.message}
						</p>
					</div>

					<div>
						<input
							className="inputInfo"
							placeholder="48 12345-1234"
							{...register("cellPhone")} />
						<p className="erroMessage">
							{errors.cellPhone?.message}
						</p>
					</div>

					<div>
						<input
							className="inputInfo"
							placeholder="Email *"
							{...register("email")} />
						<p className="erroMessage">
							{errors.email?.message}
						</p>
					</div>

					<div>
						<input
							className="inputInfo"
							placeholder="Senha *"
							{...register("password")}
							type="password" />
						<p className="erroMessage">
							{errors.password?.message}
						</p>
					</div>

					<button
						className="registerButton"
						type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</section>
	)
}

export default Form