<template>
  <pre v-html="mouse"></pre>
</template>
<style>

</style>
<script>
  export default{
    computed: {
      mouse () {
        return this.$store.state.mousePosition
      }
    },
    mounted () {
      document.addEventListener("mousemove", this.getMouseXY);
    },
    beforeDestroy () {
      document.removeEventListener("mousemove", this.getMouseXY);
    },
    methods: {
      getMouseXY(e) {
        var tempX = 0
        var tempY = 0
        var IE = false
        if (IE) { // grab the x-y pos.s if browser is IE
          tempX = event.clientX + document.body.scrollLeft
          tempY = event.clientY + document.body.scrollTop
        } else {  // grab the x-y pos.s if browser is NS
          tempX = e.pageX
          tempY = e.pageY
        }
        // catch possible negative values in NS4
        if (tempX < 0) {
          tempX = 0
        }
        if (tempY < 0) {
          tempY = 0
        }
        // show the position values in the form named Show
        // in the text fields named MouseX and MouseY
        this.$store.dispatch('setMousePosition', {x: tempX, y: tempY})
      }
    }
  }
</script>
