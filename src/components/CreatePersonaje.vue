<template>
	<div class="create-container">
		<div class="form-header">
			<h1 class="form-title">✨ Crear Nuevo Personaje</h1>
			<p class="form-description">
				Agrega un nuevo personaje a tu serie favorita
			</p>
		</div>
		<form class="styled-form" v-on:submit.prevent="insertPersonaje">
			<div class="form-group">
				<label>
					<span class="label-icon">👤</span>
					Nombre del Personaje
				</label>
				<input
					class="form-control"
					v-model="personaje.nombre"
					placeholder="Ej: Walter White"
					required
				/>
			</div>
			<div class="form-group">
				<label>
					<span class="label-icon">🖼️</span>
					URL de la Imagen
				</label>
				<input
					class="form-control"
					v-model="personaje.imagen"
					placeholder="https://ejemplo.com/imagen.jpg"
					required
				/>
				<div v-if="personaje.imagen" class="image-preview">
					<img :src="personaje.imagen" alt="Preview" />
				</div>
			</div>
			<div class="form-group">
				<label>
					<span class="label-icon">📺</span>
					Serie
				</label>
				<select class="form-select" v-model="personaje.idSerie" required>
					<option value="" disabled>Selecciona una serie</option>
					<option v-for="serie in series" :value="serie.idSerie" :key="serie">
						{{ serie.nombre }}
					</option>
				</select>
			</div>
			<button class="btn btn-success btn-submit" type="submit">
				<span>✅</span>
				Crear Personaje
			</button>
		</form>
	</div>
</template>

<script>
	import ServiceSeries from "@/services/ServiceSeries";
	const service = new ServiceSeries();
	export default {
		name: "CreatePersonaje",
		data() {
			return {
				personaje: {
					idPersonaje: 0,
					nombre: "",
					imagen: "",
					idSerie: 0,
				},
				series: {},
			};
		},
		mounted() {
			service.getSeries().then((result) => {
				this.series = result;
			});
		},
		methods: {
			insertPersonaje() {
				console.log(this.personaje);
				service.insertPersonaje(this.personaje).then((result) => {
					this.$router.push("/personajes/" + this.personaje.idSerie);
					console.log("Insertado id: " + result);
				});
			},
		},
	};
</script>

<style scoped>
	.create-container {
		max-width: 700px;
		margin: 0 auto;
		padding: 2rem;
	}

	.form-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.form-title {
		font-size: 2.5rem;
		font-weight: 800;
		background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.5rem;
	}

	.form-description {
		color: #666;
		font-size: 1.1rem;
	}

	.styled-form {
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		padding: 2.5rem;
		border-radius: 20px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: flex;
		align-items: center;
		font-size: 1.1rem;
		color: #333;
		margin-bottom: 0.7rem;
		font-weight: 700;
	}

	.label-icon {
		font-size: 1.3rem;
		margin-right: 0.5rem;
	}

	.form-control,
	.form-select {
		width: 100%;
		padding: 1rem;
		border: 2px solid #ddd;
		border-radius: 12px;
		font-size: 1rem;
		transition: all 0.3s ease;
		background: white;
	}

	.form-control:focus,
	.form-select:focus {
		border-color: #11998e;
		box-shadow: 0 0 0 0.2rem rgba(17, 153, 142, 0.25);
		outline: none;
		transform: translateY(-2px);
	}

	.image-preview {
		margin-top: 1rem;
		text-align: center;
		padding: 1rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	.image-preview img {
		max-width: 100%;
		max-height: 300px;
		border-radius: 10px;
		object-fit: cover;
	}

	.btn-submit {
		width: 100%;
		margin-top: 1.5rem;
		padding: 1.2rem;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.btn-submit span {
		font-size: 1.5rem;
	}

	.btn-submit:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 25px rgba(17, 153, 142, 0.3);
	}

	@media (max-width: 768px) {
		.create-container {
			padding: 1rem;
		}

		.styled-form {
			padding: 1.5rem;
		}

		.form-title {
			font-size: 2rem;
		}
	}
</style>
