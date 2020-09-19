import createService from "../";

import { productDetails as mockDetails } from "../mockData";

const mockNetwork = {
  get: jest.fn(),
} as any;
describe("Products service", () => {
  afterEach(() => {
    mockNetwork.get.mockClear();
  });
  it("retrieves product details", async () => {
    mockNetwork.get.mockImplementation(() =>
      Promise.resolve({ data: mockDetails })
    );

    const service = createService({ network: mockNetwork });
    const response = await service.getProducts();
    expect(response).toMatchObject({ data: mockDetails });
    expect(mockNetwork.get).toHaveBeenCalledWith(
      expect.stringContaining("sometimes-maybe"),
      {
        method: "GET",
      }
    );
  });
});
