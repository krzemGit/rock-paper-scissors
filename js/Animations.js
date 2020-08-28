class Animations {
  constructor() {
    this.panels = document.querySelectorAll('.panel')
    this.drawActive = false
    this.panelX = 0;
    this.panelY = 0;
    this.events = window.innerWidth < 768 ? ['touchstart', 'touchend', 'touchmove', 'touchleave'] : ['mousedown', 'mouseup', 'mousemove', 'mouseleave'] // disabled to mouse events only, left for further developement on touch screens


    // listeners

    this.panels.forEach(panel => {
      if (window.innerWidth > 500) {
        panel.addEventListener(this.events[0], (e) => {
          panel.style.backgroundColor = '#bbb'
          this.drawActive = true

          let panelShape = panel.getBoundingClientRect();

          this.panelX = e.clientX - panelShape.left
          this.panelY = e.clientY - panelShape.top
          console.log(this.panelX, this.panelY);

        })
        panel.addEventListener(this.events[1], () => {
          panel.style.backgroundColor = '#fff'
          this.drawActive = false
        })
        panel.addEventListener(this.events[3], () => {
          panel.style.backgroundColor = '#fff'
          this.drawActive = false
        })
        panel.addEventListener(this.events[2], (e) => {
          if (this.drawActive) {
            console.log('moving');

            panel.style.left = e.clientX - this.panelX + 'px'
            panel.style.top = e.clientY - this.panelY + 'px'
          }
        })
      }

    })
  }
}

const animations = new Animations()