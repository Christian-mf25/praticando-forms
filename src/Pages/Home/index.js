import "./style.css"
import yoda from "../../assets/babyYoda.jpg"
import alberto from "../../assets/alberto.jpg"
import luca from "../../assets/luca.jpg"
import stitch from "../../assets/stitch.jpg"

const Home = ({ data, handleBack }) => {

	const userImg = [yoda, alberto, luca, stitch]
	const randomImg = () => Math.floor(Math.random() * 4)

	return (
		<section id="home">

			<header className="head">
				<img src={userImg[randomImg()]}
					className="userImg" />
				<h2 className="userName">{data.name}</h2>
			</header>

			<div className="personalInfo">

				<p className="info">{data.fullName}</p>

				<p className="info">{data.birth}</p>

				<p className="info">{data.address}</p>

				<p className="info">Contato: {data.cellPhone}</p>

				<p className="info">{data.email}</p>

			</div>

			<nav className="navigation">
				<button
					className="backHome"
					onClick={handleBack} >
					Voltar para o cadastro
				</button>
			</nav>
		</section>
	)
}

export default Home