<template>
	<div>
		<h1>Modificar personaje</h1>
		<form v-on:submit.prevent="updatePersonaje">
			<div className="form-group">
				<label>Personaje</label>
				<select class="form-select" v-model="idPersonaje">
					<option
						v-for="pers in personajes"
						:value="pers.idPersonaje"
						:key="pers"
					>
						{{ pers.nombre }}
					</option>
				</select>
			</div>
			<div className="form-group">
				<label>Serie</label>
				<select class="form-select" v-model="idSerie">
					<option v-for="serie in series" :value="serie.idSerie" :key="serie">
						{{ serie.nombre }}
					</option>
				</select>
			</div>

			<button className="btn btn-success">Modificar Personaje</button>
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
