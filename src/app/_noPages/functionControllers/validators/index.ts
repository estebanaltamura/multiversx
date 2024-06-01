export const validators = {
  isQuantityParameterCorrect: (rest: any[]) => {
    console.log(rest[0].length);
    return rest[0].length === 0;
  },
  isCorrectTypeOfTitle: (title: any) => typeof title === 'string',
  isCorrectTypeOfContent: (content: any) => typeof content === 'string',
  isCorrectTypeOfMainButtonParameters: (mainButtonParameters: any) => {
    if (typeof mainButtonParameters !== 'object') return false;
    if (Object.keys(mainButtonParameters).length > 2) return false;
    if (
      !Object.keys(mainButtonParameters).includes('callback') &&
      !Object.keys(mainButtonParameters).includes('redirectUrl')
    )
      return false;

    if (Object.keys(mainButtonParameters).includes('callback')) {
      if (typeof mainButtonParameters['callback'] !== 'function') return false;
    }
    if (Object.keys(mainButtonParameters).includes('redirectUrl')) {
      if (typeof mainButtonParameters['redirectUrl'] !== 'string') return false;
    }
    return true;
  },

  isCorrectTypeOfSecondaryButtonParameters: (secondaryButtonParameters: any) => {
    if (typeof secondaryButtonParameters !== 'object') return false;
    if (Object.keys(secondaryButtonParameters).length > 2) return false;
    if (
      !Object.keys(secondaryButtonParameters).includes('callback') &&
      !Object.keys(secondaryButtonParameters).includes('redirectUrl')
    )
      return false;
    if (Object.keys(secondaryButtonParameters).includes('callback')) {
      if (typeof secondaryButtonParameters['callback'] !== 'function') return false;
    }
    if (Object.keys(secondaryButtonParameters).includes('redirectUrl')) {
      if (typeof secondaryButtonParameters['redirectUrl'] !== 'string') return false;
    }
    return true;
  },
};
