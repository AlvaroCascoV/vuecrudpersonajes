import axios from "axios";
import Global from "@/Global";

export default class ServiceSeries {
    getSeries() {
        return new Promise(function (resolve) {
            let request = "api/Series"
            let url = Global.urlApiPersonajes + request
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => resolve(data))
        })
    }
    getPersonajes() {
        return new Promise(function (resolve) {
            let request = "api/Personajes"
            let url = Global.urlApiPersonajes + request
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => resolve(data))
        })
    }
    findSerie(id) {
        return new Promise(function (resolve) {
            let request = "api/Series/" + id
            let url = Global.urlApiPersonajes + request
            let serie = []
            axios.get(url).then(response => {
                serie = response.data
                resolve(serie)
            })
        })
    }
    findPersonajes(id) {
        return new Promise(function (resolve) {
            let request = "api/Series/PersonajesSerie/" + id
            let url = Global.urlApiPersonajes + request
            let personajes = {}
            axios.get(url).then(response => {
                personajes = response.data
                resolve(personajes)
            })
        })
    }
    insertPersonaje(personaje) {
        return new Promise(function (resolve) {
            let request = "api/Personajes"
            let url = Global.urlApiPersonajes + request
            axios.post(url, personaje).then(response => {
                resolve(response.data)
            })
        })
    }
    updatePersonaje(idSerie, idPersonaje) {
        return new Promise(function (resolve) {
            let request = "api/personajes/" + idPersonaje + "/" + idSerie
            let url = Global.urlApiPersonajes + request
            axios.put(url).then(response => {
                resolve(response.data)
            })
        })
    }
}