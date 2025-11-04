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
						<router-link class="nav-link" exact-active-class="active" to="/">
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" active-class="active" to="/create">
							✨ Nuevo Personaje
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" active-class="active" to="/update">
							🔄 Modificar Personaje
						</router-link>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							:class="{ active: isSerieRoute }"
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
		computed: {
			isSerieRoute() {
				return (
					this.$route.path.includes("/serie/") ||
					this.$route.path.includes("/personajes/")
				);
			},
		},
		mounted() {
			service.getSeries().then((result) => {
				this.series = result;
			});
		},
	};
</script>

<style scoped>
	.navbar {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
		padding: 1rem 2rem;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	}

	.navbar-brand img {
		transition: transform 0.3s ease;
		filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
	}

	.navbar-brand img:hover {
		transform: rotate(360deg) scale(1.1);
	}

	.nav-link {
		color: white !important;
		font-weight: 600;
		margin: 0 0.5rem;
		padding: 0.7rem 1.2rem !important;
		border-radius: 8px;
		transition: all 0.3s ease;
		text-transform: uppercase;
		font-size: 0.9rem;
		letter-spacing: 0.5px;
	}

	.nav-link:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}

	.nav-link.active {
		background: rgba(255, 255, 255, 0.3);
		font-weight: 700;
	}

	.dropdown-menu {
		border-radius: 15px;
		border: none;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		padding: 0.5rem 0;
		margin-top: 0.5rem;
	}

	.dropdown-item {
		padding: 0.7rem 1.5rem;
		transition: all 0.3s ease;
		font-weight: 500;
		color: #555;
	}

	.dropdown-item:hover {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		transform: translateX(5px);
	}

	.navbar-toggler {
		border: 2px solid white;
		border-radius: 8px;
	}

	.navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
	}

	@media (max-width: 576px) {
		.navbar {
			padding: 0.5rem 1rem;
		}

		.nav-link {
			margin: 0.3rem 0;
		}
	}
</style>
