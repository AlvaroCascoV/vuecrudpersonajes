<template>
	<div class="update-container">
		<div class="form-header">
			<h1 class="form-title">
				<span class="emoji-icon">🔄</span>
				Modificar Personaje
			</h1>
			<p class="form-description">Cambia un personaje de una serie a otra</p>
		</div>
		<form class="styled-form" v-on:submit.prevent="updatePersonaje">
			<div class="form-group">
				<label>
					<span class="label-icon">👤</span>
					Selecciona el Personaje
				</label>
				<select class="form-select" v-model="idPersonaje" required>
					<option value="0" disabled>Elige un personaje</option>
					<option
						v-for="pers in personajes"
						:value="pers.idPersonaje"
						:key="pers"
					>
						{{ pers.nombre }}
					</option>
				</select>
			</div>
			<div class="form-group">
				<label>
					<span class="label-icon">📺</span>
					Nueva Serie
				</label>
				<select class="form-select" v-model="idSerie" required>
					<option value="0" disabled>Selecciona la nueva serie</option>
					<option v-for="serie in series" :value="serie.idSerie" :key="serie">
						{{ serie.nombre }}
					</option>
				</select>
			</div>

			<button class="btn btn-success btn-submit" type="submit">
				<span class="btn-icon">🔄</span>
				Modificar Personaje
			</button>
		</form>
	</div>
</template>

<script>
	import ServiceSeries from "@/services/ServiceSeries";
	const service = new ServiceSeries();
	import Swal from "sweetalert2";
	export default {
		name: "UpdatePersonaje",
		data() {
			return {
				personajes: {},
				series: {},
				idPersonaje: 0,
				idSerie: 0,
			};
		},
		mounted() {
			service.getSeries().then((result) => {
				this.series = result;
			});
			service.getPersonajes().then((result) => {
				this.personajes = result;
			});
		},
		methods: {
			updatePersonaje() {
				Swal.fire({
					title: "¿Estás seguro?",
					text: "¡No podrás volver atrás!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Si, modificar",
					cancelButtonText: "Cancelar",
				}).then((result) => {
					if (result.isConfirmed) {
						console.log("modificado");
						service.updatePersonaje(this.idSerie, this.idPersonaje).then(() => {
							this.$router.push("/personajes/" + this.idSerie);
						});

						Swal.fire({
							title: "Modificado",
							text: "Tu personaje ha sido movido de serie.",
							icon: "success",
						});
					}
				});
			},
		},
	};
</script>

<style scoped>
	.update-container {
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
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.form-title .emoji-icon {
		-webkit-text-fill-color: initial;
		background: none;
		-webkit-background-clip: initial;
		background-clip: initial;
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

	.form-select {
		width: 100%;
		padding: 1rem;
		border: 2px solid #ddd;
		border-radius: 12px;
		font-size: 1rem;
		transition: all 0.3s ease;
		background: white;
		cursor: pointer;
	}

	.form-select:focus {
		border-color: #667eea;
		box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
		outline: none;
		transform: translateY(-2px);
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

	.btn-submit .btn-icon {
		font-size: 1.5rem;
		display: inline-block;
	}

	.btn-submit:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 25px rgba(17, 153, 142, 0.3);
	}

	@media (max-width: 768px) {
		.update-container {
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
