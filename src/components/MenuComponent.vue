<template>
	<nav class="navbar navbar-expand-sm navbar-light bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">
				<img src="./../assets/logo.png" width="45px" />
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link active" aria-current="page" to="/">
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/create">
							Nuevo Personaje
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/update">
							Modificar Personaje
						</router-link>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Series
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li v-for="serie in series" :key="serie">
								<router-link
									class="dropdown-item"
									:to="'/serie/' + serie.idSerie"
								>
									{{ serie.nombre }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
	import ServiceSeries from "@/services/ServiceSeries";
	const service = new ServiceSeries();

	export default {
		name: "MenuComponent",
		data() {
			return {
				series: {},
			};
		},
		mounted() {
			service.getSeries().then((result) => {
				this.series = result;
			});
		},
	};
</script>
