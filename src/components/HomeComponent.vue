<template>
	<div class="home-container">
		<div class="hero-section">
			<h1 class="hero-title">Bienvenido a la App de Series</h1>
			<p class="hero-subtitle">
				Gestiona tus personajes favoritos de las mejores series
			</p>
			<div class="hero-icons">
				<div class="icon-card">
					<span class="icon">📺</span>
					<h3>Series</h3>
					<p>Explora diferentes series</p>
				</div>
				<div class="icon-card">
					<span class="icon">👥</span>
					<h3>Personajes</h3>
					<p>Descubre todos los personajes</p>
				</div>
				<div class="icon-card">
					<span class="icon">✨</span>
					<h3>Gestión</h3>
					<p>Crea y modifica personajes</p>
				</div>
			</div>
			<div class="cta-buttons">
				<router-link to="/create" class="btn btn-primary btn-lg">
					Crear Personaje
				</router-link>
				<router-link to="/update" class="btn btn-success btn-lg">
					Modificar Personaje
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeComponent",
	};
</script>

<style scoped>
	.home-container {
		padding: 2rem 0;
	}

	.hero-section {
		text-align: center;
		padding: 3rem 2rem;
	}

	.hero-title {
		font-size: 3.5rem;
		font-weight: 800;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
		animation: slideInDown 0.8s ease;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		color: #666;
		margin-bottom: 3rem;
		animation: fadeIn 1s ease 0.3s both;
	}

	.hero-icons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
		animation: fadeIn 1s ease 0.6s both;
	}

	.icon-card {
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		padding: 2rem;
		border-radius: 20px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.icon-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
	}

	.icon {
		font-size: 4rem;
		display: block;
		margin-bottom: 1rem;
	}

	.icon-card h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: #333;
		font-weight: 700;
	}

	.icon-card p {
		color: #666;
		font-size: 1rem;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 3rem;
		flex-wrap: wrap;
		animation: fadeIn 1s ease 0.9s both;
	}

	.btn-lg {
		padding: 1rem 2.5rem;
		font-size: 1.1rem;
		text-decoration: none;
	}

	@keyframes slideInDown {
		from {
			opacity: 0;
			transform: translateY(-50px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.hero-icons {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.btn-lg {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
