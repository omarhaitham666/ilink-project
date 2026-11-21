import { suggestionsData } from "./Suggestions.data";

export function renderSuggestionsList(count: number): string {
  return suggestionsData.slice(0, count).map((suggestion) => `
    <article class="suggestion-card">
      <h3>${suggestion.title}</h3>
      <p>${suggestion.description}</p>

      <div class="suggestion-card__info">
        <span>By ${suggestion.author}</span>
        <span>${suggestion.votes} votes</span>
        <span>${suggestion.comments} comments</span>
        <span>${suggestion.time}</span>
      </div>
    </article>
  `).join("");
}
export function SuggestionsPage(): string {
  return `
    <section class="suggestions-page">

      <div class="suggestions-page__header">
        <h1>Suggestions</h1>
        <p>Share your ideas and help us improve iLink.</p>
      </div>

      <div class="suggestions-page__form">
  <h2>Share Your Suggestion</h2>
  <p>Have an idea? We'd love to hear it.</p>

  <textarea
    class="suggestions-page__textarea"
    placeholder="Write your suggestion..."
  ></textarea>

  <button class="suggestions-page__submit">
    Submit
  </button>
</div>

<div class="suggestions-page__section-header">
  <h2>Top Voted Suggestions</h2>
  <p>Explore the most popular ideas from our community.</p>
</div>

      <div class="suggestions-page__list">
        ${renderSuggestionsList(3)} 
          </div>
         
            <button class="suggestions-page__see-all">
        See All
      </button>

    </section>
  `;
}