let eyes = new Blotter.Text("na so so wonder jesus dey do", {
    family : "sans-serif",
    size : 80,
    });

let material = new Blotter.ChannelSplitMaterial();
material.uniforms.uOffset.value = 0.08;

setInterval(()=>{
  material.uniforms.uRotation.value = material.uniforms.uRotation.value+30;
},100);

var blotter = new Blotter(material, { texts : eyes });

let scope = blotter.forText(eyes);
let elem = document.getElementById('center');
scope.appendTo(elem);