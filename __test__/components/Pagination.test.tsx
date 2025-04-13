import { Pagination } from "@/features/planets/components";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";

// Mock Next.js navigation hooks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Pagination", () => {
  // Setup common mocks and values
  const mockPush = jest.fn();
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Setup default mock implementations
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  it("renders pagination buttons correctly", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={2} />);

    // Should show 3 page buttons (1, 2, 3) and navigation buttons
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("highlights current page", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={2} />);

    const currentPageButton = screen.getByText("2");
    expect(currentPageButton).toHaveClass("bg-blue-500", "text-white");
  });

  it("disables previous button on first page", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={1} />);

    const prevButton = screen.getByText("Back");
    expect(prevButton).toBeDisabled();
  });

  it("disables next button on last page", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={3} />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("navigates to previous page when clicking previous button", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={2} />);

    const prevButton = screen.getByText("Back");
    fireEvent.click(prevButton);

    // Verify that router.push was called with correct query params
    expect(mockPush).toHaveBeenCalledWith("?page=1");
  });

  it("navigates to next page when clicking next button", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={2} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(mockPush).toHaveBeenCalledWith("?page=3");
  });

  it("navigates to specific page when clicking page number", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={1} />);

    const pageButton = screen.getByText("2");
    fireEvent.click(pageButton);

    expect(mockPush).toHaveBeenCalledWith("?page=2");
  });

  it("preserves existing query parameters when navigating", () => {
    // Mock existing search params
    const paramsWithSearch = new URLSearchParams("search=mars&sort=name-asc");
    (useSearchParams as jest.Mock).mockReturnValue(paramsWithSearch);

    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={1} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    // Should preserve existing params and only update page
    expect(mockPush).toHaveBeenCalledWith("?search=mars&sort=name-asc&page=2");
  });

  it("does not render when there is only one page", () => {
    const { container } = render(
      <Pagination totalItems={5} itemsPerPage={5} currentPage={1} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("handles edge case with zero items", () => {
    const { container } = render(
      <Pagination totalItems={0} itemsPerPage={5} currentPage={1} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("applies correct styles to buttons", () => {
    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={2} />);

    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      expect(button).toHaveClass("px-4", "py-2", "border", "rounded-md");
    });
  });

  it("handles large number of pages correctly", () => {
    render(<Pagination totalItems={50} itemsPerPage={5} currentPage={5} />);

    // Should show all 10 page buttons
    for (let i = 1; i <= 10; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  it("maintains URL structure when changing pages", () => {
    // Mock complex URL params
    const complexParams = new URLSearchParams(
      "search=mars&sort=name-asc&filter=rocky"
    );
    (useSearchParams as jest.Mock).mockReturnValue(complexParams);

    render(<Pagination totalItems={15} itemsPerPage={5} currentPage={1} />);

    const pageButton = screen.getByText("2");
    fireEvent.click(pageButton);

    // Should maintain all existing params
    expect(mockPush).toHaveBeenCalledWith(
      "?search=mars&sort=name-asc&filter=rocky&page=2"
    );
  });
});
