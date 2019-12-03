
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {name: action.name, id: Math.random()}
      return { ...state, bands: [...state.bands, newBand] }
    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
