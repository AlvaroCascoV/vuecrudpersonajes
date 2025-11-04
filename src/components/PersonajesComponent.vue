<template>
	<div>
		<h1>Personajes de {{ $route.params.id }}</h1>
		<div>
			<table class="table table-primary">
				<thead>
					<tr>
						<th>Personaje</th>
						<th>Imagen</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="pers in personajes" :key="pers">
						<td>{{ pers.nombre }}</td>
						<td><img :src="pers.imagen" style="width: 150px" /></td>
					</tr>
				</tbody>
			</table>
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
				if (nextVal != oldVal) {
					service.findPersonajes(this.$route.params.id).then((result) => {
						this.personajes = result;
					});
				}
			},
		},
	};
</script>
