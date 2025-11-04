<template>
	<div>
		<h1>SERIE {{ serie.idSerie }}</h1>
		<div>
			<img :src="serie.imagen" style="width: 250px" />
			<h4>{{ serie.nombre }}</h4>
			<span>IMDB {{ serie.puntuacion }}</span>
			<br />
			<router-link :to="'/personajes/' + serie.idSerie" class="btn btn-primary">
				Personajes
			</router-link>
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
