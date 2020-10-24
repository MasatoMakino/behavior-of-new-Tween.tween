import {Tween} from "@tweenjs/tween.js";
import {BoxGeometry, Mesh, MeshNormalMaterial} from "three";

const geometry = new BoxGeometry( 0.2, 0.2, 0.2 );
const material = new MeshNormalMaterial();
const cube = new Mesh(geometry, material)
const tween = new Tween(cube.position).to({x: 100, y: 100, z: 100}, 10000); // OK
const tweenAny = new Tween(cube.position as any).to({x: 100, y: 100, z: 100}, 10000); // OK