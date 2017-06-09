import axios from 'axios'

export default {
  mounted () {
    axios.get('https://randomuser.me/api/')
         .then((respuesta) => {
           this.persona = respuesta.data.results[0]
         })
  },
  data () {
    return {
      persona: null
    }
  },
  computed: {
    datosPersona () {
      return {
        nombre: `${this.persona.name.first} ${this.persona.name.last}`,
        foto: this.persona.picture.large,
        correoe: this.persona.email
      }
    }
  }
}
