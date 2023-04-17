import { Component } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
  Container,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent {
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  myOptions = {
    particles: {
      color: {
        value: '#66ff66',
        animation: {
          enable: true,
          speed: 10,
        },
      },
      move: {
        attract: {
          enable: true,
          distance: 100,
          rotate: {
            x: 2000,
            y: 2000,
          },
        },
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        path: {
          clamp: true,
          enable: true,
          delay: {
            value: 0,
          },
          generator: 'polygonPathGenerator',
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30,
          },
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: '#202020',
          length: 20,
          enable: true,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 0,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'square',
      },
      size: {
        value: 2,
      },
    },
    background: {
      color: '#202020',
    },
    fullScreen: {
      zIndex: -2,
    },
    emitters: {
      direction: 'none',
      rate: {
        quantity: 1,
        delay: 0.25,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
  };

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: '',
      },
      position: '50% 50%',
      size: '2',
      opacity: 1,
    },
    fullScreen: {
      zIndex: -2,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.light,
        },
        resize: false,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '',
      },
      links: {
        color: '#151515',
        distance: 130,
        enable: true,
        opacity: 2,
        width: 2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.outside,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: true,
        speed: 2,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 80,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    // console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    // console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
