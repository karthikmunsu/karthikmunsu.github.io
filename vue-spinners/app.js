Vue.config.debug = true // turn on debugging mode

var CircleLoader = VueSpinners.CircleLoader
var RainbowCircleLoader = VueSpinners.RainbowCircleLoader
var TilesLoader = VueSpinners.TilesLoader
var TraingleLoader = VueSpinners.TraingleLoader
var DottedLoader = VueSpinners.DottedLoader

new Vue({
	el: '#app',
	components: {
    CircleLoader,
    RainbowCirlceLoader,
    TilesLoader,
    TraingleLoader,
    DottedLoader
	},
	data () {
		return {
			color: '#3AB982',
      height: '35px',
      width: '4px',
      margin: '2px',
      radius: '2px'
		}
	}
})