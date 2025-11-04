<template>
	<MenuComponent />
	<div class="main-container">
		<router-view />
	</div>
</template>

<script>
	import MenuComponent from "./components/MenuComponent.vue";

	export default {
		name: "App",
		components: {
			MenuComponent,
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		min-height: 100vh;
	}

	#app {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		min-height: 100vh;
	}

	.main-container {
		width: 90%;
		max-width: 1200px;
		margin: 2rem auto;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.95);
		border-radius: 20px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		min-height: calc(100vh - 150px);
	}

	/* Estilos globales para botones */
	.btn {
		border-radius: 10px;
		padding: 0.7rem 1.5rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}

	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.btn-success {
		background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
		color: white;
	}

	.btn-danger {
		background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
		color: white;
	}

	/* Estilos para formularios */
	.form-control,
	.form-select {
		border: 2px solid #e0e0e0;
		border-radius: 10px;
		padding: 0.8rem;
		transition: all 0.3s ease;
		font-size: 1rem;
	}

	.form-control:focus,
	.form-select:focus {
		border-color: #667eea;
		box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
		outline: none;
	}

	label {
		font-weight: 600;
		color: #555;
		margin-bottom: 0.5rem;
		display: block;
		margin-top: 1rem;
	}

	/* Estilos para tablas */
	.table {
		border-radius: 15px;
		overflow: hidden;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
	}

	.table thead {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.table thead th {
		padding: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.table tbody td {
		padding: 1rem;
		vertical-align: middle;
	}

	.table tbody tr {
		transition: all 0.3s ease;
	}

	.table tbody tr:hover {
		background-color: #f8f9ff;
		transform: scale(1.01);
	}

	/* Animaciones */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.main-container > div {
		animation: fadeIn 0.5s ease;
	}
</style>
