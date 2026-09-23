// Small presentational component to render a star rating (e.g., 4.5).
export default function StarRating({ rating }) {
  const rounded = Math.round(rating * 2) / 2; // nearest half
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      stars.push("★");
    } else if (i - 0.5 === rounded) {
      stars.push("⯪"); // half star glyph
    } else {
      stars.push("☆");
    }
  }
  return (
    <span
      className="text-amber-500 text-sm"
      aria-label={`Rating: ${rating} out of 5`}
      title={`${rating} / 5`}
    >
      {stars.join(" ")}
      <span className="text-slate-500 ml-1">({rating.toFixed(1)})</span>
    </span>
  );
}
