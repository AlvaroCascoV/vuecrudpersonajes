<template>
	<div class="personajes-container">
		<div class="header">
			<h1 class="page-title">👥 Personajes de la Serie</h1>
			<p class="subtitle">ID de la Serie: {{ $route.params.id }}</p>
			<router-link
				class="btn btn-danger btn-back"
				:to="'/serie/' + $route.params.id"
			>
				<span>⬅️</span>
				Volver a Serie
			</router-link>
		</div>
		<div class="personajes-grid">
			<div
				class="personaje-card"
				v-for="pers in personajes"
				:key="pers.idPersonaje"
			>
				<div class="card-image">
					<img :src="pers.imagen" :alt="pers.nombre" />
					<div class="card-overlay">
						<span class="card-icon">⭐</span>
					</div>
				</div>
				<div class="card-content">
					<h3 class="personaje-name">{{ pers.nombre }}</h3>
				</div>
			</div>
		</div>
		<div v-if="!personajes || personajes.length === 0" class="empty-state">
			<span class="empty-icon">😔</span>
			<p>No hay personajes disponibles para esta serie</p>
		</div>
	</div>
</template>

<script>
	import ServiceSeries from "@/services/ServiceSeries";
	const service = new ServiceSeries();
	export default {
		name: "PersonajesComponent",
		data() {
			return {
				personajes: {},
			};
		},
		mounted() {
			service.findPersonajes(this.$route.params.id).then((result) => {
				this.personajes = result;
			});
		},
		watch: {
			"$route.params.id"(nextVal, oldVal) {
				if (nextVal) {
					if (nextVal != oldVal) {
						service.findPersonajes(this.$route.params.id).then((result) => {
							this.personajes = result;
						});
					}
				}
			},
		},
	};
</script>

<style scoped>
	.personajes-container {
		padding: 2rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.page-title {
		font-size: 2.8rem;
		font-weight: 800;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 1.5rem;
		font-weight: 500;
	}

	.btn-back {
		padding: 0.8rem 2rem;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		font-size: 1.1rem;
	}

	.btn-back span {
		font-size: 1.3rem;
	}

	.personajes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.personaje-card {
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
		transition: all 0.4s ease;
		cursor: pointer;
		animation: fadeInUp 0.6s ease;
	}

	.personaje-card:hover {
		transform: translateY(-15px);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
	}

	.card-image {
		position: relative;
		width: 100%;
		height: 350px;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.personaje-card:hover .card-image img {
		transform: scale(1.1);
	}

	.card-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.7) 100%
		);
		opacity: 0;
		transition: opacity 0.4s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.personaje-card:hover .card-overlay {
		opacity: 1;
	}

	.card-icon {
		font-size: 4rem;
		animation: bounce 1s infinite;
	}

	.card-content {
		padding: 1.5rem;
		text-align: center;
		background: white;
	}

	.personaje-name {
		font-size: 1.4rem;
		font-weight: 700;
		color: #333;
		margin: 0;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	}

	.empty-state {
		text-align: center;
		padding: 4rem 2rem;
		color: #999;
	}

	.empty-icon {
		font-size: 5rem;
		display: block;
		margin-bottom: 1rem;
	}

	.empty-state p {
		font-size: 1.3rem;
		font-weight: 500;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@media (max-width: 768px) {
		.personajes-container {
			padding: 1rem;
		}

		.page-title {
			font-size: 2rem;
		}

		.personajes-grid {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			gap: 1rem;
		}

		.card-image {
			height: 250px;
		}
	}
</style>
