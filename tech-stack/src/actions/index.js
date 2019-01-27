// action creator:
export function selectLibrary(libraryId) {
  return {
    // action:
    type: 'select_library',
    payload: libraryId
  };
}
