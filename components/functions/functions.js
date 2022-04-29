export const clean = (obj) => {
    for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined || prop === '__typename') {
          delete obj[prop];
        }
      }
      return obj;
}