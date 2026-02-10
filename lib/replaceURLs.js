const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[-\+=&;%@\.\w_]*)#?(?:[\w!\/]*))?)/g;

export default function createAnchors(message) {
  return message.replace(urlRegex, function(match) {
    // Don't break <img src="http:..." /> or mailtos or other anchors
    const matchIndex = message.indexOf(match);
    const context = message.slice(Math.max(0, matchIndex - 7), matchIndex);
    if (/(src=|href=|mailto:)/.test(context)) return match;
    
    let href = match;
    if (match.slice(0, 4) !== 'http') href = 'http://' + href;
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer">' + match.replace('www.', '') + '</a>';
  });
}

// Simple regex replace function.
export function regexReplace(message, regex, replace) {
  return message.replace(regex, replace);
}
