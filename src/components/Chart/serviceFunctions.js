  export function addSpaces(number) {
    const str = number.toFixed(2).toString();
    const parts = [];
    for (let i = str.length; i > 0; i -= 3) {
      parts.unshift(str.substring(Math.max(0, i - 3), i));
    }
    return parts.join(' ');
  }