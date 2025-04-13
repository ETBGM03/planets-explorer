import { SearchBar } from "@/features/planets/components";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";

// Mock Next.js hooks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

// Mock debounce hook
jest.mock("../../src/shared/hooks/useDebounce", () => ({
  useDebounce: (value: string) => value,
}));

describe("SearchBar", () => {
  const mockPush = jest.fn();
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders search input correctly", () => {
    render(<SearchBar />);

    expect(screen.getByLabelText(/search for a planet/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("updates URL with search parameter when typing", async () => {
    render(<SearchBar />);

    const input = screen.getByRole("textbox");

    await act(async () => {
      fireEvent.change(input, { target: { value: "mars" } });
    });

    expect(mockPush).toHaveBeenCalledWith("?search=mars");
  });

  it("clears search parameter when input is empty", async () => {
    render(<SearchBar />);

    const input = screen.getByRole("textbox");

    await act(async () => {
      fireEvent.change(input, { target: { value: "" } });
    });

    expect(mockPush).toHaveBeenCalledWith("?");
  });
});
