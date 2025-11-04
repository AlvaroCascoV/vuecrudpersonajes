<template>
	<div class="serie-container">
		<div class="serie-header">
			<h1 class="serie-title">📺 Detalle de la Serie</h1>
		</div>
		<div class="serie-card">
			<div class="serie-image-container">
				<img :src="serie.imagen" class="serie-image" :alt="serie.nombre" />
				<div class="serie-badge">
					<span class="star">⭐</span>
					<span class="rating">{{ serie.puntuacion }}</span>
				</div>
			</div>
			<div class="serie-info">
				<h2 class="serie-name">{{ serie.nombre }}</h2>
				<div class="serie-details">
					<div class="detail-item">
						<span class="icon">🆔</span>
						<span class="label">ID:</span>
						<span class="value">{{ serie.idSerie }}</span>
					</div>
					<div class="detail-item">
						<span class="icon">⭐</span>
						<span class="label">IMDB:</span>
						<span class="value">{{ serie.puntuacion }}/10</span>
					</div>
				</div>
				<router-link
					:to="'/personajes/' + serie.idSerie"
					class="btn btn-primary btn-personajes"
				>
					<span>👥</span>
					Ver Personajes
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import ServiceSeries from "@/services/ServiceSeries";
	const service = new ServiceSeries();
	export default {
		name: "SerieComponent",
		data() {
			return {
				serie: {},
			};
		},
		mounted() {
			service.findSerie(this.$route.params.id).then((result) => {
				this.serie = result;
			});
		},
		watch: {
			"$route.params.id"(nextVal, oldVal) {
				if (nextVal != oldVal) {
					service.findSerie(this.$route.params.id).then((result) => {
						this.serie = result;
					});
				}
			},
		},
	};
</script>

<style scoped>
	.serie-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	.serie-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.serie-title {
		font-size: 2.5rem;
		font-weight: 800;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.serie-card {
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		border-radius: 25px;
		padding: 2rem;
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		animation: slideIn 0.6s ease;
	}

	.serie-image-container {
		position: relative;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease;
	}

	.serie-image-container:hover {
		transform: scale(1.05);
	}

	.serie-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.serie-badge {
		position: absolute;
		top: 20px;
		right: 20px;
		background: rgba(255, 255, 255, 0.95);
		padding: 0.8rem 1.5rem;
		border-radius: 50px;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		font-weight: 700;
		font-size: 1.2rem;
	}

	.star {
		font-size: 1.5rem;
	}

	.rating {
		color: #ff6b6b;
	}

	.serie-info {
		padding: 1rem;
	}

	.serie-name {
		font-size: 2.5rem;
		font-weight: 800;
		color: #333;
		margin-bottom: 1.5rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.serie-details {
		margin-bottom: 2rem;
	}

	.detail-item {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 12px;
		margin-bottom: 1rem;
		font-size: 1.1rem;
		transition: all 0.3s ease;
	}

	.detail-item:hover {
		background: white;
		transform: translateX(5px);
	}

	.detail-item .icon {
		font-size: 1.5rem;
	}

	.detail-item .label {
		font-weight: 700;
		color: #555;
	}

	.detail-item .value {
		color: #667eea;
		font-weight: 600;
	}

	.btn-personajes {
		width: 100%;
		padding: 1.2rem;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.7rem;
		text-decoration: none;
		margin-top: 1rem;
	}

	.btn-personajes span {
		font-size: 1.5rem;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.serie-card {
			grid-template-columns: 1fr;
			padding: 1.5rem;
		}

		.serie-name {
			font-size: 2rem;
		}

		.serie-title {
			font-size: 2rem;
		}

		.serie-container {
			padding: 1rem;
		}
	}
</style>
