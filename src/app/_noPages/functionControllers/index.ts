import { validators } from './validators';
import { errorMessages } from './errorMessages.ts';

export const functionControllers = {
  info: (title: any, content: any, mainButtonParameters: any, ...rest: any[]): boolean | undefined => {
    if (!validators.isQuantityParameterCorrect(rest)) throw new Error(errorMessages.parametersQuantityWrong);
    if (!validators.isCorrectTypeOfTitle(title)) throw new Error(errorMessages.titleTypeWrong);
    if (!validators.isCorrectTypeOfContent(content)) throw new Error(errorMessages.contentTypeWrong);
    if (mainButtonParameters && !validators.isCorrectTypeOfMainButtonParameters(mainButtonParameters))
      throw new Error(errorMessages.mainButtonParameters);
    return true;
  },
  warning: (title: any, content: any, mainButtonParameters: any, ...rest: any[]): boolean | undefined => {
    if (!validators.isQuantityParameterCorrect(rest)) throw new Error(errorMessages.parametersQuantityWrong);
    if (!validators.isCorrectTypeOfTitle(title)) throw new Error(errorMessages.titleTypeWrong);
    if (!validators.isCorrectTypeOfContent(content)) throw new Error(errorMessages.contentTypeWrong);
    if (mainButtonParameters && !validators.isCorrectTypeOfMainButtonParameters(mainButtonParameters))
      throw new Error(errorMessages.mainButtonParameters);
    return true;
  },
  error: (title: any, content: any, mainButtonParameters: any, ...rest: any[]): boolean | undefined => {
    if (!validators.isQuantityParameterCorrect(rest)) throw new Error(errorMessages.parametersQuantityWrong);
    if (!validators.isCorrectTypeOfTitle(title)) throw new Error(errorMessages.titleTypeWrong);
    if (!validators.isCorrectTypeOfContent(content)) throw new Error(errorMessages.contentTypeWrong);
    if (mainButtonParameters && !validators.isCorrectTypeOfMainButtonParameters(mainButtonParameters))
      throw new Error(errorMessages.mainButtonParameters);
    return true;
  },
};
