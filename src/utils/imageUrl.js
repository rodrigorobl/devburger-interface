/**
 * Converte uma URL relativa do produto para uma URL absoluta
 * @param {string} url - URL da imagem do produto que pode ser relativa ou absoluta
 * @returns {string} URL completa da imagem
 */
export function getImageUrl(url) {
  if (!url) return '';
  
  // Se a URL já começar com http, já é uma URL absoluta
  if (url.startsWith('http')) {
    return url;
  }
  
  // Caso contrário, adiciona a URL base da API
  return `https://devburger-api-jyne.vercel.app${url}`;
} 