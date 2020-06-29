/*
 * Supported Keys: https://craig.is/killing/mice
 */
export default [
  /** Global */
  {
    commandName: 'incrementActiveViewport',
    label: 'Next Viewport',
    keys: ['right'],
  },
  {
    commandName: 'decrementActiveViewport',
    label: 'Previous Viewport',
    keys: ['left'],
  },
  /** Viewport */
  { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
  { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
  { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
  {
    commandName: 'flipViewportVertical',
    label: 'Flip Horizontally',
    keys: ['h'],
  },
  {
    commandName: 'flipViewportHorizontal',
    label: 'Flip Vertically',
    keys: ['v'],
  },
  { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
  { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
  { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
  { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
  { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
  { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
  {
    commandName: 'previousViewportDisplaySet',
    label: 'Previous Series',
    keys: ['pagedown'],
  },
  {
    commandName: 'nextViewportDisplaySet',
    label: 'Next Series',
    keys: ['pageup'],
  },
  /** Window level presets */
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 1 },
    label: 'W/L Preset 1',
    keys: ['1'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 2 },
    label: 'W/L Preset 2',
    keys: ['2'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 3 },
    label: 'W/L Preset 3',
    keys: ['3'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 4 },
    label: 'W/L Preset 4',
    keys: ['4'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 5 },
    label: 'W/L Preset 5',
    keys: ['5'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 6 },
    label: 'W/L Preset 6',
    keys: ['6'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 7 },
    label: 'W/L Preset 7',
    keys: ['7'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 8 },
    label: 'W/L Preset 8',
    keys: ['8'],
  },
  {
    commandName: 'setWindowLevelPreset',
    commandOptions: { preset: 9 },
    label: 'W/L Preset 9',
    keys: ['9'],
  },
];