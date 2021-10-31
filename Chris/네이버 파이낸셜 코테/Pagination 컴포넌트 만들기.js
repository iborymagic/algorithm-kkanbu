const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_TOTAL_ITEM_COUNT = 0;
const DEFAULT_PAGE_PER_ITEM_COUNT = 20;

const MAX_PAGINATION_ITEM_COUNT = 10;

export default class Pagination {
  #state = {
    currentPage: DEFAULT_CURRENT_PAGE,
    totalItemCount: DEFAULT_TOTAL_ITEM_COUNT,
    pagePerItemCount: DEFAULT_PAGE_PER_ITEM_COUNT
  }

  constructor({currentPage, totalItemCount, pagePerItemCount}) {
    this.setState({currentPage, totalItemCount, pagePerItemCount});
  }

  #isValidCurrentPage(currentPage) {
    if (currentPage < 1) {
      return false;
    }

    return true;
  }

  #isValidTotalItemCount(itemCount) {
    return itemCount >= 0;
  }

  #isValidPagePerItemCount(itemCount) {
    return itemCount > 0;
  }

  #getMaxPage() {
    return Math.ceil(this.#state.totalItemCount / this.#state.pagePerItemCount)
  }

  #setCurrentPage(currentPage) {
    if (this.#isValidCurrentPage(currentPage)) {
      const maxPage = this.#getMaxPage();
      this.#state.currentPage = currentPage < maxPage ? currentPage : maxPage;
      return
    }

    this.#state.currentPage = DEFAULT_CURRENT_PAGE;
  }

  #getPaginationItemTemplate(itemPage) {
    if (itemPage === this.#state.currentPage) {
      return `<span class="current-page">${itemPage}</span>`
    }

    return `<span>${itemPage}</span>`
  }

  #getPartialPaginationItemsTemplate(paginationStart, paginationEnd) {
    const itemCount = paginationEnd - paginationStart + 1;

    return [...Array(itemCount)].map((_, index) => this.#getPaginationItemTemplate(paginationStart + index)).join("");
  }

  #getPaginationItemsTemplate() {
    const maxPageListIndex = parseInt(this.#getMaxPage() / MAX_PAGINATION_ITEM_COUNT);
    const maxPageItemIndex = this.#getMaxPage() % MAX_PAGINATION_ITEM_COUNT;

    const pageListIndex = parseInt((this.#state.currentPage - 1) / MAX_PAGINATION_ITEM_COUNT);

    if (pageListIndex === maxPageListIndex) {
      const paginationStart = (maxPageListIndex * MAX_PAGINATION_ITEM_COUNT) + 1;
      const paginationEnd = maxPageItemIndex;

      return this.#getPartialPaginationItemsTemplate(paginationStart, paginationEnd);
    } else {
      const paginationStart = (pageListIndex * MAX_PAGINATION_ITEM_COUNT) + 1;
      const paginationEnd = (pageListIndex * MAX_PAGINATION_ITEM_COUNT) + MAX_PAGINATION_ITEM_COUNT;

      return this.#getPartialPaginationItemsTemplate(paginationStart, paginationEnd);
    }
  }

  #getPaginationTemplate() {
    if (this.#state.currentPage === 1) {
      return `${this.#getPaginationItemsTemplate()}<span class="next-page"></span>`
    }

    if (this.#state.currentPage === this.#getMaxPage()) {
      return `<span class="prev-page"></span>${this.#getPaginationItemsTemplate()}`
    }

    return `<span class="prev-page"></span>${this.#getPaginationItemsTemplate()}<span class="next-page"></span>`
  }

  setState({currentPage, totalItemCount, pagePerItemCount}) {
    if (typeof totalItemCount === "number") {
      this.#state.totalItemCount = this.#isValidTotalItemCount(totalItemCount) ? totalItemCount : DEFAULT_TOTAL_ITEM_COUNT;    
    }

    if (typeof pagePerItemCount === "number") {
      this.#state.pagePerItemCount = this.#isValidPagePerItemCount(pagePerItemCount) ? pagePerItemCount : DEFAULT_PAGE_PER_ITEM_COUNT;
    }

    if (typeof currentPage === "number") {
      this.#setCurrentPage(currentPage);
    }
  }

  render() {
    if (this.#getMaxPage() === 0) {
      return '<div></div>';
    }

    return `<div>${this.#getPaginationTemplate()}</div>`;
  }
}
