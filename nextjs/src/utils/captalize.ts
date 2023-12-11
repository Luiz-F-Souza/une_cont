export const captalize = (string: string) => {

    const firstLetterUpperCase = string.charAt(0).toUpperCase()
    const completeWord = firstLetterUpperCase + string.slice(1)
    
    return completeWord
  }