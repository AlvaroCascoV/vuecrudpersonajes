<template>
	<div>
		<h1>CREAR</h1>
		<form v-on:submit.prevent="insertPersonaje">
			<label>Nombre</label>
			<input class="form-control" v-model="personaje.nombre" />
			<label>Imagen</label>
			<input class="form-control" v-model="personaje.imagen" />
			<label>Serie</label>
			<select class="form-select" v-model="personaje.idSerie">
				<option v-for="serie in series" :value="serie.idSerie" :key="serie">
					{{ serie.nombre }}
				</option>
			</select>
			<button class="btn btn-success">Insertar</button>
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
