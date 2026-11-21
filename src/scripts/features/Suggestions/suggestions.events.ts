import { renderSuggestionsList } from "./Suggestion.ui";
export function initSuggestionsEvents() {

    const seeAllButton = document.querySelector(
  ".suggestions-page__see-all"
);
seeAllButton?.addEventListener("click", () => {
  if (suggestionsList) {
  suggestionsList.innerHTML = renderSuggestionsList(6);
}

});
const suggestionsList = document.querySelector(
  ".suggestions-page__list"
);

}
