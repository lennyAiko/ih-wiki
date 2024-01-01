export function getCategoryEmoji(category) {
  const emojiMap = {
    blog: "💻",
    x: "⚔️",
    community: "🧑‍💻️",
    newsletter: "🗞️",
    youtube: "▶️",
    website: "🌐",
    book: "📖",
    creator: "👷",
    conference: "🤝",
    podcast: "🎧",
    tool: "⚒️",
    free: "🆓",
    paid: "💲",
    freemium: "🆓💲",
  };
  return emojiMap[category] ?? "❓";
}

export function upperFirstLetter(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

export function getRefLink(link) {
  return `${link}?ref=ih-wiki`;
}

export function sliceString(string) {
  return `${string.slice(0, 100)}...`;
}

export function getArticlesPath() {
  return path.resolve(__dirname, "../data/articles");
}
