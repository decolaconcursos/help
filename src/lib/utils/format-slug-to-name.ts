export const formatSlugToName = (slug: string): string => {
  const words: string[] = slug.split('-')
  let name = ''

  for (const word of words) {
    if (word.length >= 3) {
      name += capitalizeFirstLetter(word)
    } else {
      name += word
    }
  }

  return name
}

const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
