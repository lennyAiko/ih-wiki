export function getCategoryEmoji (category) {
    let emoji = ''
    switch(category.toLowerCase()) {
        case 'blog':
            emoji = '💻'
            break
        case 'x':
            emoji = '⚔️'
            break
        case 'community':
            emoji = '🧑‍💻️'
            break
        case 'newsletter':
            emoji = '🗞'
            break
        case 'youtube':
            emoji = '🎞'
            break
        case 'website':
            emoji = '🌐'
            break
        case 'book':
            emoji = '📖'
            break
        case 'creator':
            emoji = '👷'
            break
        case 'conference':
            emoji = '🤝'
            break
        case 'podcast':
            emoji = '🎧'
            break
        case 'tool':
            emoji = '🛠️'
            break
        default:
            emoji = '❓'
            break
        
    }
    return emoji
}

export function upperFirstLetter (string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`
}