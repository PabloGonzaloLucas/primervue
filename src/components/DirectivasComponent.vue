<template>
    <div class="directivas-container">
        <div class="card">
            <h2 class="title">🎯 Directivas Vue</h2>
            
            <div class="form-section">
                <div class="input-group">
                    <label class="label">Introduzca un número</label>
                    <input type="number" v-model="numero" class="input-field"/> 
                </div>

                <div class="resultado-box">
                    <h3 v-if="numero > 0" class="positivo">✓ Positivo</h3> 
                    <h3 v-else-if="numero < 0" class="negativo">✗ Negativo</h3> 
                    <h3 v-else class="cero">⊘ Cero</h3> 
                </div>

                <div class="input-group">
                    <label class="label">Introduzca un nombre</label>
                    <input type="text" v-model="nombre" class="input-field"/>
                </div>
            </div>
        </div>

        <div class="card series-card">
            <h2 class="title">📺 Mis Series Favoritas</h2>
            
            <div class="input-group inline">
                <input type="text" v-model="serieNueva" placeholder="Añadir nueva serie..." class="input-field"/>
                <button @click="nuevaSerie" class="btn-add">+ Agregar</button>
            </div>

            <ul v-if="series.length > 0" class="series-list">
                <li v-for="(serie, index) in series" :key="serie" class="serie-item">
                    <span class="serie-number">{{ index + 1 }}</span>
                    <span class="serie-name">{{ serie }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "DirectivasComponent",
    data(){
        return{
            mostrar : true,
            numero: 0,
            nombre: "Alumno",
            series: ["Breaking Bad", "Futurama", "The Boys", "Stranger Things", "Bleach"],
            serieNueva: ""
        }
    },
    methods: {
        nuevaSerie(){
            this.series.push(this.serieNueva)
        }
    }
}
</script>

<style scoped>
.directivas-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    color: white;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.series-card {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.title {
    margin: 0 0 1.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.form-section {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-group.inline {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: white;
    color: #333;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.input-field:focus {
    outline: none;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
}

.resultado-box {
    text-align: center;
    margin: 1.5rem 0;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
}

.resultado-box h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    padding: 1rem;
    border-radius: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.positivo {
    background: rgba(76, 175, 80, 0.3);
    color: #c8e6c9;
    animation: pulse 1.5s infinite;
}

.negativo {
    background: rgba(244, 67, 54, 0.3);
    color: #ffcdd2;
    animation: shake 0.5s;
}

.cero {
    background: rgba(33, 150, 243, 0.3);
    color: #bbdefb;
}

.btn-add {
    padding: 0.75rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    white-space: nowrap;
}

.btn-add:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-add:active {
    transform: translateY(0);
}

.series-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.serie-item {
    background: rgba(255, 255, 255, 0.2);
    margin: 0.75rem 0;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 1rem;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.serie-item:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.serie-number {
    background: rgba(255, 255, 255, 0.3);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.serie-name {
    font-size: 1.1rem;
    font-weight: 500;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    75% {
        transform: translateX(10px);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .directivas-container {
        padding: 0.5rem;
    }
    
    .card {
        padding: 1.5rem;
    }
    
    .title {
        font-size: 1.5rem;
    }
    
    .input-group.inline {
        flex-direction: column;
    }
    
    .btn-add {
        width: 100%;
    }
}
</style>