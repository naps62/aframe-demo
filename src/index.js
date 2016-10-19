import './index.css';
import AFrame from 'aframe';

AFrame.registerComponent('rotate-on-tick', {
  tick: function(t, dt) {
    this.el.object3D.rotation.x += 0.02;
  }
});
