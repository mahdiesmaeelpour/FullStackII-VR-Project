import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {

    fullScreen: true,
    ...options,
  });

  const buttonsPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  );

  buttonsPanel.setAngle(
    -0.6,
    0.1
  );

  r360.renderToSurface(
    r360.createRoot('ConnectedButtonInfoPanel'),
    buttonsPanel
  );

  const infoPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  );

  infoPanel.setAngle(
    0.6,
    0.1
  );

  r360.renderToSurface(
    r360.createRoot('ConnectedHouseInfoPanel'),
    infoPanel
  );


  r360.compositor.setBackground(r360.getAssetURL('360_front_door.jpg'));
}

window.React360 = {init};